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

## Hosting Website with Amazon Web Services

- copy `server/package.json` and `server/server.js` into `dist/personal-website`
- select all files in `dist/personal-website` and ZIP them, do not zip parent folder `dist/personal-website`
- use this zip file to upload and deploy on Elastic Beanstalk

## Troubleshooting

- `ERROR in The Angular Compiler requires TypeScript >=3.6.4 and <3.9.0 but 3.9.7 was found instead.`
  - `npm i typescript@">=5.2.0 <5.3.0"`
