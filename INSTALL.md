# Installation

## Linux

- `cd /home/adam/Documents/svn/github/personal-website`
- `git config user.email "adamdunsmoor@pm.me"`
- `git config user.name "xinthose"`
- `apt-get install nodejs npm build-essential`

## Personal Website

- `ng new personal-website --style=scss --routing`
- `ng generate module app-routing --flat --module=app`
- `ng generate component home bible about`
- Bible in JSON: <https://github.com/thiagobodruk/bible>
 
## General

- `npm install -g @angular/cli`
- `npm install --save rxjs rxjs-compat @angular/http`

## Kendo-UI (Progress)

- `npm install --save @progress/kendo-angular-buttons @progress/kendo-angular-l10n @angular/animations @progress/kendo-angular-dropdowns`
- `npm install --save @progress/kendo-theme-default`

## MDBootstrap Pro 

- tutorial: <https://mdbootstrap.com/angular/5min-quickstart/>
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

## Angular Commands (ng)

- `ng --version`    // show angular version
- `ng update --all --force` // update all angular packages
- `ng build --prod --aot`   // build for production
- `ng serve --host 0.0.0.0` // allow outside PC's access to the app

## Kendo Node.js commands

- `ncu -u -f /^@progress/`  // check progress widget versions

## Node Commands

- `node -v` // show node version

## NPM Commands (Node Package Manager)

- `npm -v`  // show npm version
- `npm install -g npm`  // update npm version
- `npm update`  # update all packages in the app
- `npm install` -g version-check
- npm install [package]@[version]   // install specific version of a package
- `npm ls @progress/kendo-angular-scheduler`  // show version of a package

### Install dependencies

- `npm install -g npm-install-peers`
- `npm-install-peers`
- `npm install @angular/cli@latest`  // install latest version of angular cli

## Typescript Commands

- `tsc -v`  // show typescript version

## Github

- `git config --global user.email "your github login email address"`  // set email address
- `git config --global user.email`  // check email address

### Update pm2

- `npm install pm2@latest -g`
- `pm2 update`

## Other

- `http-server`

## Notes

- `[style.height.%]="100"`  // full height grid (as long as content)

## Troubleshooting

- `ERROR in The Angular Compiler requires TypeScript >=3.1.1 and <3.3.0 but 3.3.3 was found instead.`
  - `npm install typescript@">=3.1.1 <3.3.0"`
