# Xinthose Installation

## Create App (client directory)

- `ng new personal-website --style=scss --routing=true`

### Components

- `for i in home bible about page-not-found; do ng g c "${i}"; done`

#### Services

- `ng g service bible`

### Packages

- `npm i @angular/cli @angular/core @angular/forms @angular/http @angular/forms @angular/localize terser typescript rxjs express compression ngx-clipboard ngx-animate @ungap/url-search-params`
- Progress
  - `ng add @progress/kendo-angular-buttons @progress/kendo-angular-dropdowns @progress/kendo-data-query @progress/kendo-angular-inputs`
  - `npm i @progress/kendo-theme-material`
- MDBootstrap v5 Angular <https://mdbootstrap.com/docs/b5/angular/>
  - `ng add mdb-angular-ui-kit`
    - answer yes to all questions
- `ng add @fortawesome/angular-fontawesome`
  - choose free icons
- for `ref/utility` helper Node.js files
  - `npm i jsonminify`

## References

- Bible in JSON: <https://github.com/thiagobodruk/bible>
- API.Bible: <https://docs.api.bible/docs>

## Hosting Website with Amazon Web Services

- copy `package.json` into `dist/personal-website` before zipping files
- when zipping files for update, select all files in `dist/personal-website` and ZIP them, do not zip parent folder `dist/personal-website`
- use this zip file to upload and deploy on Elastic Beanstalk

## Troubleshooting

- `ERROR in The Angular Compiler requires TypeScript >=3.6.4 and <3.9.0 but 3.9.7 was found instead.`
  - `npm i typescript@">=3.6.4 <3.9.0"`
