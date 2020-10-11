import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

// Progress
import { GroupResult, groupBy } from '@progress/kendo-data-query';

// Services
import { BibleService } from "../bible.service";

// interfaces
import { Book } from "./../shared/bible/Book";
import { Chapter } from "./../shared/bible/Chapter";
import { Verse } from "./../shared/bible/Verse";

// other
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent implements OnInit {
  debug: boolean = true;
  advDebug: boolean = false;

  bible: any;
  verseText: string = "";
  verseTitle: string = "";
  verseLocation: string = "";
  showVerse: boolean = false;
  showVerseNumbers: boolean = false;

  // dropdown disable
  isDisabledChapters: boolean = true;
  isDisabledVerses: boolean = true;
  disableSelectedVerseEnd: boolean = true;

  // dropdown default selection
  defaultItemBook: { bookName: string, bookId: number } = { bookName: "Select Book", bookId: 0 };
  defaultItemChapter: { chapterName: string, chapterId: number } = { chapterName: "Select Chapter", chapterId: 0 };
  defaultItemVerse: { verseName: string, verseId: number } = { verseName: "Select Verse", verseId: 0 };

  // dropdown data
  dataBooksGrouped!: GroupResult[];
  dataChapters: Array<{ chapterName: string, chapterId: number, bookId: number }> = [];
  dataVerses: Array<{ verseName: string, verseId: number, chapterId: number, bookId: number }> = [];

  // dropdown cascade result
  dataResultChapters: Array<{ chapterName: string, chapterId: number, bookId: number }> = [];
  dataResultVerses: Array<{ verseName: string, verseId: number, chapterId: number }> = [];

  // dropdown selection
  selectedBook: Book = { bookName: "", bookId: 0 };
  selectedChapter: Chapter = { chapterName: "", chapterId: 0 };
  selectedVerseStart: Verse = { verseName: "", verseId: 0 };
  selectedVerseEnd: Verse = { verseName: "", verseId: 0 };

  constructor(
    private bibleService: BibleService,
    private router: Router,
    private route: ActivatedRoute,
    private clipBoard: ClipboardService
  ) {
  }

  async ngOnInit() {
    try {
      // get the Bible
      const books = await this.bibleService.fetchBooks();
      this.dataBooksGrouped = groupBy(books, [{ field: "subcategory" }]);;

      this.dataChapters = await this.bibleService.fetchChapters();
      this.dataVerses = await this.bibleService.fetchVerses();
      this.bible = await this.bibleService.fetch('./assets/bible/en_kjv.json');
    } catch (error) {
      console.error("BibleComponent.ngOnInit >> error = " + error);
    }
  }

  // dropdown changes

  handleBookChange(value: any) {
    this.selectedBook = value;
    this.selectedChapter = { chapterName: "", chapterId: 0 };
    this.selectedVerseStart = { verseName: "", verseId: 0 };
    this.selectedVerseEnd = { verseName: "", verseId: 0 };
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
    this.selectedVerseStart = { verseName: "", verseId: 0 };
    this.selectedVerseEnd = { verseName: "", verseId: 0 };
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

    // get number of verses selected
    let numVerses = 1;
    if (verseIdEnd != verseIdStart) {
      numVerses = verseIdEnd - verseIdStart + 1;
    }
    if (this.debug) {
      console.debug("numVerses = " + numVerses.toString());
    }

    // build verse text
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

    // get verse title and location
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

  copyBibleVerse () {
    const verse = this.verseLocation + " \"" + this.verseText + "\"";
    this.clipBoard.copy(verse);
  }
}
