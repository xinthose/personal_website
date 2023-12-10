# Changelog

## 1.2.0 (12/9/2023)

- update packages

## 1.1.3 (12/4/2022)

- update packages
- update `.browserslistrc` to work on mobile browsers

## 1.1.2 (10/15/2022)

- update packages

## 1.1.1 (2/12/2022)

- *Bug*: in file  `bible.component.ts` funtion `handleChapterChange`, the filter to get `chapter` was not also querying based on the currently selected `bookId`, returning results for the book of Genesis everytime
- add `searchVerses.json`

## 1.1.0 (12/30/2021)

- add excel file (`KJV Bible Info.xlsx`) with all Bible data in it
- add Node.js utility `createVerses.js` to create `verses.json` file (it had errors before because it was made by hand)
- update Angular version from 10 to 13

## 1.0.10 (2/7/2021)

- use Bible text from this repository: <https://github.com/aruljohn/Bible-kjv> instead of this one: <https://github.com/thiagobodruk/bible> because the later has unicode characters in it
  - thiagobodruk's repository also seems to have mistakes judging by the PR requests and has not been maintained for almost a year
  - books are loaded from individual json files instead of one Bible json file

## 1.0.9 (1/30/2020)

- `bible.component`
  - add share button to share current Bible verse(s) selected and automatically load them from the URL

## 1.0.8 (10/19/2020)

- `bible.component`
  - add animation to verse copy button when it is clicked
  - auto-set verse end based on the position of verse

## 1.0.7 (10/11/2020)

- **Major:** update Angular 9 to 10
- use `async` and `await` to load the Bible
- add more strict settings in `tsconfig.json`
- add copy button for verse text

## 1.0.6 (8/23/2020)

- host website with AWS and node.js with express

## 1.0.5 (3/21/2020)

- add options: show inline verse numbers
- **Major:** update Angular 8 to 9
- host website with firebase

## 1.0.4 (12/16/2019)

- in `bible`, allow selection of a range of verses, not just one
- in `page-not-found`, fix incorrect `src` for `404.png`
- fix this issue in `en_kjv.json`: Judges 5 only has 31 verses, not 32

## 1.0.3 (9/29/2019)

- group Bible books dropdown by Old/New Testament
- add Website Version to about page
- remove `personal-website` from `deployUrl` and `baseHref` in `angular.json` (it was unnecessary)

## 1.0.2 (7/20/2019)

- **Major:** update Angular from v7 to v8

## 1.0.1 (5/12/2019)

- created `about`, `page-not-found` components

## 1.0.0 (4/28/2019)

- Website first hosted on domain [xinthose.com](http://www.xinthose.com)
