/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {setGlobalOptions} from "firebase-functions";
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import twilio from "twilio";

// Limit the maximum number of concurrent function instances.
setGlobalOptions({maxInstances: 10});

// Valid PINs allowed to join the conference room.
const VALID_PINS = new Set(["1611"]);

/**
 * Send TwiML back to Twilio as an HTTP response.
 *
 * @param response Express-style response object
 * @param twiml Twilio VoiceResponse object
 */
function sendTwiML(response: any, twiml: twilio.twiml.VoiceResponse) {
  response.type("text/xml");
  response.status(200).send(twiml.toString());
}

/**
 * Entry point for the /voice request.
 * Prompts the caller for a 4-digit PIN and gathers digits.
 */
export const voice = onRequest((request, response) => {
  logger.info("Incoming Twilio voice webhook");

  const twiml = new twilio.twiml.VoiceResponse();

  const gather = twiml.gather({
    numDigits: 4,
    action: "/join",
    method: "POST",
    timeout: 10,
  });

  // Prompt the caller to enter the PIN.
  gather.say(
    "Welcome to the bible reading chat room. Please enter your four digit PIN.",
  );

  // If no digits are entered, tell the caller goodbye and hang up.
  twiml.say("No PIN was entered. Goodbye.");
  twiml.hangup();

  sendTwiML(response, twiml);
});

/**
 * Entry point for the /join request.
 * Validates the entered PIN and either redirects back or joins a Twilio
 * conference.
 */
export const join = onRequest((request, response) => {
  const pin = request.body.Digits as string | undefined;

  const twiml = new twilio.twiml.VoiceResponse();

  if (!pin || !VALID_PINS.has(pin)) {
    // Invalid or missing PIN: prompt the caller again.
    twiml.say("Invalid PIN. Please try again.");
    twiml.redirect({method: "POST"}, "/voice");
    return sendTwiML(response, twiml);
  }

  // Valid PIN: announce joining and connect to the conference room.
  twiml.say(`Joining chat room ${pin}.`);

  const dial = twiml.dial();

  dial.conference(
    {
      startConferenceOnEnter: true,
      endConferenceOnExit: false,
      beep: "onEnter",
      waitUrl:
        "http://twimlets.com/holdmusic?Bucket=com.twilio.music.classical",
    },
    `chatroom-${pin}`,
  );

  return sendTwiML(response, twiml);
});
