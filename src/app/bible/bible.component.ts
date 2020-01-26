import { Component, OnInit } from '@angular/core';

// Progress
import { GroupResult, groupBy } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';

import { BibleService } from "../bible.service";

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent {
  debug: boolean = true;
  advDebug: boolean = false;

  bible: any;
  verseText: string;
  verseTitle: string;
  verseLocation: string;
  showVerse: boolean;
  showVerseNumbers: boolean;

  // dropdown disable
  isDisabledChapters: boolean = true;
  isDisabledVerses: boolean = true;
  disableSelectedVerseEnd: boolean = true;

  // dropdown default selection
  defaultItemBook: { bookName: string, bookId: number } = { bookName: "Select Book", bookId: null };
  defaultItemChapter: { chapterName: string, chapterId: number } = { chapterName: "Select Chapter", chapterId: null };
  defaultItemVerse: { verseName: string, verseId: number } = { verseName: "Select Verse", verseId: null };

  // dropdown data
  dataBooksGrouped: GroupResult[];
  dataChapters: Array<{ chapterName: string, chapterId: number, bookId: number }>;
  dataVerses: Array<{ verseName: string, verseId: number, chapterId: number, bookId: number }>;

  // dropdown cascade result
  dataResultChapters: Array<{ chapterName: string, chapterId: number, bookId: number }>;
  dataResultVerses: Array<{ verseName: string, verseId: number, chapterId: number }>;

  // dropdown selection
  selectedBook: { bookName: string, bookId: number };
  selectedChapter: { chapterName: string, chapterId: number };
  selectedVerseStart: { verseName: string, verseId: number };
  selectedVerseEnd: { verseName: string, verseId: number };

  constructor(
    private bibleService: BibleService,
  ) {
    // fetch JSON data asynchronously
    this.bibleService.fetchBooks()
      .subscribe(response => {
        if (this.advDebug) {
          console.debug("fetchBooks >> response = %O", response);
        }
        this.dataBooksGrouped = groupBy(response, [{ field: "subcategory" }]);;
      }, error => {
        console.error(error);
      }, () => {
      });
    this.bibleService.fetchChapters()
      .subscribe(response => {
        if (this.advDebug) {
          console.debug("fetchChapters >> response = %O", response);
        }
        this.dataChapters = response;
      }, error => {
        console.error(error);
      }, () => {
      });
    this.bibleService.fetchVerses()
      .subscribe(response => {
        if (this.advDebug) {
          console.debug("fetchVerses >> response = %O", response);
        }
        this.dataVerses = response;
      }, error => {
        console.error(error);
      }, () => {
      });
    this.bibleService.fetch('./assets/bible/en_kjv.json')
      .subscribe(response => {
        if (this.advDebug) {
          console.debug("Bible >> response = %O", response);
        }
        this.bible = response;
      }, error => {
        console.error(error);
      }, () => {
      });
  }

  // dropdown changes

  handleBookChange(value: any) {
    this.selectedBook = value;
    this.selectedChapter = undefined;
    this.selectedVerseStart = undefined;
    this.selectedVerseEnd = undefined;
    this.showVerse = false;

    if (value.bookId == this.defaultItemBook.bookId) {
      this.isDisabledChapters = true;
      this.dataResultChapters = [];
    } else {
      this.isDisabledChapters = false;
      this.dataResultChapters = this.dataChapters.filter((s) => s.bookId === value.bookId)
    }

    this.isDisabledVerses = true;
    this.dataResultVerses = [];
  }

  handleChapterChange(value: any) {
    this.selectedChapter = value;
    this.selectedVerseStart = undefined;
    this.selectedVerseEnd = undefined;
    this.showVerse = false;

    if (value.chapterId == this.defaultItemChapter.chapterId) {
      this.isDisabledVerses = true;
      this.dataResultVerses = [];
    } else {
      this.isDisabledVerses = false;
      this.dataResultVerses = this.dataVerses.filter((s) => ((s.chapterId === value.chapterId) && (s.bookId === value.bookId)))
    }
  }

  handleSelectedVerseStart(value: any) {
    // verse selected
    if (value.verseId) {
      // set data
      this.selectedVerseStart = value;
      this.disableSelectedVerseEnd = false;
      this.setBibleInfo();
    } else {
      this.showVerse = false;
      this.disableSelectedVerseEnd = true;
    }
  }

  handleSelectedVerseEnd(value: any) {
    // verse selected
    if (value.verseId) {
      // set data
      this.selectedVerseEnd = value;
      this.setBibleInfo();
    } else {
      this.showVerse = false;
    }
  }

  // switch changes
  showVerseNumbersChange() {
    if (this.showVerse) {
      this.setBibleInfo();
    }
  }

  // functions
  
  setBibleInfo() {
    console.assert(this.selectedVerseStart != null, "verse not selected");
    console.assert(this.selectedBook != null, "book not selected");
    console.assert(this.selectedChapter != null, "chapter not selected");
    
    // get data
    let bookId = this.selectedBook.bookId;
    let bookName = this.selectedBook.bookName;
    let bookAbbrev = this.bible[bookId - 1].abbrev;

    let chapterId = this.selectedChapter.chapterId;
    let chapterName = this.selectedChapter.chapterName;

    let verseIdStart = this.selectedVerseStart.verseId;
    let verseNameStart = this.selectedVerseStart.verseName;

    let verseIdEnd = verseIdStart;
    let verseNameEnd = "";
    if (this.selectedVerseEnd) {
      verseIdEnd = this.selectedVerseEnd.verseId;
      verseNameEnd = this.selectedVerseEnd.verseName;
    }

    let numVerses = 1;
    if (verseIdEnd != verseIdStart) {
      numVerses = verseIdEnd - verseIdStart + 1;
    }
    if (this.debug) {
      console.debug("numVerses = " + numVerses.toString());
    }

    let verseText = "";
    for (let index = 0; index < numVerses; index++) {
      let passage = this.bible[bookId - 1].chapters[chapterId - 1][verseIdStart + index - 1];
      if (this.showVerseNumbers) {
        verseText += "[" + (verseIdStart + index).toString() + "] ";
        verseText += passage + " ";
      } else {
        verseText += passage + "  ";
      }
    }
    verseText = verseText.trimRight();  // remove white space at end of string
    if (this.debug) {
      console.debug("verseText = " + verseText);
    }

    let verseTitle = bookName + " " + chapterName + " " + verseNameStart;
    let verseLocation = bookAbbrev + " " + chapterId.toString() + ":" + verseIdStart.toString();
    if (verseIdEnd != verseIdStart) {
      verseTitle += " to " + verseNameEnd;
      verseLocation += "-" + verseIdEnd.toString();
    }

    // set data
    this.verseText = verseText;
    this.verseTitle = verseTitle;
    this.verseLocation = verseLocation;
    this.showVerse = true;
  }

}
