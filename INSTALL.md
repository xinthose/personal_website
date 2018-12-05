# Installation

## Linux
- `cd /home/adam/Documents/svn/github/personal-website`
- `git config user.email "adamdunsmoor@pm.me"`
- `git config user.name "xinthose"`
- `apt-get install nodejs npm build-essential`

## Personal Website
- `ng new personal-website --style=scss --routing`
- `ng generate module app-routing --flat --module=app`
- `ng generate component home bible`
- Bible in JSON: https://github.com/thiagobodruk/bible
 
## General
- `npm install -g @angular/cli`
- `npm install --save rxjs rxjs-compat @angular/http`

## Kendo-UI (Progress)
- `npm install --save @progress/kendo-angular-buttons @progress/kendo-angular-l10n @angular/animations @progress/kendo-angular-dropdowns`
- `npm install --save @progress/kendo-theme-default`

## MDBootstrap Pro 
- tutorial: https://mdbootstrap.com/angular/5min-quickstart/
    - click PRO
- `npm install bootstrap --save`
- `npm install angular-bootstrap-md --save`
- `npm install --save chart.js@2.5.0 @types/chart.js easy-pie-chart@2.1.7 hammerjs@2.0.8 screenfull@3.3.0 font-awesome`

## Firebase Hosting
- `npm install -g firebase-tools`
- `firebase login: hosting, dist, do not overwrite index.html`
- `firebase init`
- `firebase deploy`

# Commands

## Angular Commands
- `ng --version`    // show angular version
- `ng build --prod`   // build for production

## Node.js Commands
- `npm -v`  // show npm version
- `npm install -g npm`  // update npm version
- `npm update`  // update all packages in the app
- `npm install -g version-check`
### Install dependencies
- `npm install -g npm-install-peers`
- `npm-install-peers`
- `npm install @angular/cli@latest`  // install latest version of angular cli

## Typescript Commands
- `tsc -v`  // show typescript versio