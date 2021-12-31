# Xinthose Installation

## Visual Studio Code

- Install Github extension
- Set your Visual Studio Code Personal Access Token
- Test commit and push

## Linux

- `cd /home/adam/Documents/svn/github/personal-website`
- `apt-get install nodejs npm build-essential`

## Angular

### Create App (client directory)

- `ng new personal-website --style=scss --routing=true`
  
#### Components

- `for i in home bible about page-not-found; do ng g c "${i}"; done`

### Installation

- `npm i @angular/cli @angular/core @angular/forms @angular/http @angular/forms @angular/localize terser typescript rxjs express compression ngx-clipboard ngx-animate @ungap/url-search-params`
- Progress
  - `ng add @progress/kendo-angular-buttons @progress/kendo-angular-dropdowns @progress/kendo-data-query @progress/kendo-angular-inputs`
  - `npm i @progress/kendo-theme-material`
- MDBootstrap v5 Angular <https://mdbootstrap.com/docs/b5/angular/>
  - `ng add mdb-angular-ui-kit`
    - answer yes to all questions
- `ng add @fortawesome/angular-fontawesome`
  - choose free icons

#### Services

- `ng g service bible`

## References

- Bible in JSON: <https://github.com/thiagobodruk/bible>
- API.Bible: <https://docs.api.bible/docs>

## Hosting Website with Amazon Web Services

- copy `package.json` into `dist/personal-website` before zipping files
- when zipping files for update, select all files in `dist/personal-website` and ZIP them, do not zip parent folder `dist/personal-website`
- use this zip file to upload and deploy on Elastic Beanstalk

## Commands

### Angular Commands (ng)

- `ng --version`    // show angular version
- `ng update --all --force` // update all angular packages (ignore peer dependency errors)
- `ng build --prod --aot`   // build for production
- `ng serve --host 0.0.0.0` // allow outside PC's access to the app
- `tsc -v`  // show typescript version
- `node -v` // show node version

### NPM Commands (Node Package Manager)

- `npm -v`  // show npm version
- `npm i -g npm`  // update npm version
- `npm update`  # update all packages in the app
- `npm i [package]@[version]`   // install specific version of a package
- `npm ls @progress/kendo-angular-scheduler`  // show version of a package
- `npm i --package-lock-only` // only create `package-lock.json` file

### Github

- `git config --global user.email "your github login email address"`  // set email address
- `git config --global user.email`  // check email address

## Troubleshooting

- `ERROR in The Angular Compiler requires TypeScript >=3.6.4 and <3.9.0 but 3.9.7 was found instead.`
  - `npm i typescript@">=3.6.4 <3.9.0"`
