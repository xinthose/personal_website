# Xinthose Installation

## Packages

- `npm i @angular/cli @angular/core @angular/forms @angular/http @angular/forms @angular/localize terser typescript rxjs express compression ngx-clipboard ngx-animate @ungap/url-search-params bootstrap`
- Progress
  - `ng add @progress/kendo-angular-buttons`
  - `ng add @progress/kendo-angular-dropdowns`
  - `ng add @progress/kendo-data-query`
  - `ng add @progress/kendo-angular-inputs`
  - `ng add @progress/kendo-angular-navigation`
  - `npm i @progress/kendo-theme-material`
- `ng add @fortawesome/angular-fontawesome`
  - choose free icons

## Create App (client directory)

- `ng new personal-website --style=scss --routing=true`

## Components

- `ng g c home`
- `ng g c bible`
- `ng g c about`
- `ng g c page-not-found`

## Services

- `ng g service bible`

## References

- Bible in JSON: <https://github.com/thiagobodruk/bible>
- API.Bible: <https://docs.api.bible/docs>

## How to Update Repository Packages

- `npm install -g npm-check-updates`
- `ncu`
- `ncu -u`
- `npm install --force`

## Hosting Website with Firebase

- `npm install -g firebase-tools`
- `firebase login`
- `firebase init`
  - select "App Hosting"
- enable Service Usage API when you get an error, run `firebase init` again
- `firebase apphosting:secrets:set TELERIK_LICENSE`
- copy and paste the contents of `telerik-license.txt` when prompted (may take 20 seconds)

## Firebase Cloud Functions

- `npm install -g firebase-tools`
- `firebase login`
- `firebase init`
  - select "Cloud Functions"
- `firebase deploy --only functions`

## OHBC Twilio Chat Room Setup

- `cd functions`
- `npm install twilio`
- `npm install -D eslint-config-prettier`

## Troubleshooting

- `ERROR in The Angular Compiler requires TypeScript >=3.6.4 and <3.9.0 but 3.9.7 was found instead.`
  - `npm i typescript@">=5.2.0 <5.3.0"`
