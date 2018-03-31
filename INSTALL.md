# Installation

## Linux
//curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
apt-get install nodejs npm build-essential
//ln -s /usr/bin/nodejs /usr/bin/node
sudo npm install n -g
n ls
n 9.6.1 (or latest version)

## Kendo-UI Module
npm install -g @angular/cli
ng new my-first-angular-project --style=scss
cd my-first-angular-project
npm install --save @progress/kendo-angular-buttons @progress/kendo-angular-l10n @angular/animations @progress/kendo-angular-dropdowns
npm install --save @progress/kendo-theme-default
npm install
ng build --prod
ng serve

## Firebase Hosting
npm install -g firebase-tools
firebase login: hosting, dist, do not overwrite index.html
firebase init
firebase deploy

## Bootstrap Module
npm install angular-bootstrap-md --save
npm i -g @angular/cli
npm i -g typescript
npm install --save chart.js@2.5.0 font-awesome hammerjs

## Angular Universal
### https://mdbootstrap.com/angular/angular-universal/?utm_campaign=TutAngUniversal&utm_source=news&mc_cid=f5194e9ab7&mc_eid=e2b1bf3234
npm install @angular/platform-server express --save
npm install ts-loader webpack-node-externals npm-run-all --save-dev
ng generate module server --flat --module=app
npm install node-sass --unsafe-perm

## Personal Website
ng generate module app-routing --flat --module=app
ng generate component home bible
Bible in JSON: https://github.com/thiagobodruk/bible

# Commands

## Angular Commands
ng --version    // show angular version
ng build --prod   // build for production

## Node.js Commands
npm -v  // show npm version
npm update  # update all packages in the app
npm install -g version-check
### Install dependencies
npm install -g npm-install-peers
npm-install-peers
npm install @angular/cli@latest  // install latest version of angular cli

## Typescript Commands
tsc -v  // show typescript version