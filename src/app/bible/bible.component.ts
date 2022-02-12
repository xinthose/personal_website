import { Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { trigger, transition, useAnimation } from "@angular/animations";
import URLSearchParams from "@ungap/url-search-params";  // <https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams>

// Progress
import { GroupResult, groupBy, AggregateResult } from "@progress/kendo-data-query";
import { DropDownListComponent } from "@progress/kendo-angular-dropdowns";

// Services
import { BibleService } from "../bible.service";

// interfaces
import { BibleBookIntf } from "../interfaces/bible/BibleBookIntf";
import { BookIntf } from "../interfaces/bible/BookIntf";
import { ChapterIntf } from "../interfaces/bible/ChapterIntf";
import { VerseIntf } from "../interfaces/bible/VerseIntf";

// other
import { ClipboardService } from "ngx-clipboard";
import { jello } from "ngx-animate";
import { environment } from "environments/environment";
import config from "../../assets/config.json";

@Component({
  selector: "app-bible",
  templateUrl: "./bible.component.html",
  styleUrls: ["./bible.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger("jello", [transition("* => *", useAnimation(jello))])
  ],
})
export class BibleComponent implements OnInit, AfterViewInit {
  debug: boolean = config.debug;
  advDebug: boolean = config.advDebug;
  logID: string = "BibleComponent.";
  showAnimation: boolean = false;
  @ViewChild("bookDropdownList", { static: true }) public bookDropdownList!: DropDownListComponent;
  @ViewChild("chapterDropdownList", { static: true }) public chapterDropdownList!: DropDownListComponent;
  @ViewChild("verseStartDropdownList", { static: true }) public verseStartDropdownList!: DropDownListComponent;
  @ViewChild("verseEndDropdownList", { static: true }) public verseEndDropdownList!: DropDownListComponent;
  url: string = environment.production ? "http://www.xinthose.com/bible/" : "http://localhost:4200/bible/";

  bibleBook!: BibleBookIntf;
  bookId: number = 0;
  verseText: string = "";
  verseLocation: string = "";
  showVerse: boolean = false;
  shareBibleVerseData: Array<{ text: string }> = [
    { text: "Copy Link" },
  ];

  // options
  abbreviateBook: boolean = false;
  showVerseNumbers: boolean = false;

  // dropdown disable
  isDisabledChapters: boolean = true;
  disableSelectedVerseStart: boolean = true;
  disableSelectedVerseEnd: boolean = true;

  // dropdown default selection
  defaultItemBook: BookIntf = { bookName: "Select Book", bookId: 0, subcategory: "" };
  defaultItemChapter: ChapterIntf = { chapterName: "Select Chapter", chapterId: 0, bookId: 0 };
  defaultItemVerse: VerseIntf = { verseName: "Select Verse", verseId: 0, chapterId: 0, bookId: 0 };

  // dropdown data
  dataBooks: any; // leave as any type for grouping
  dataBooksGrouped!: GroupResult[];
  dataChapters: Array<ChapterIntf> = [];
  dataVerses: Array<VerseIntf> = [];

  // dropdown cascade result
  dataResultChapters: Array<ChapterIntf> = [];
  dataResultVerses: Array<VerseIntf> = [];

  // dropdown values (selection)
  selectedBook: number = 0;
  selectedChapter: number = 0;
  selectedVerseStart: number = 0;
  selectedVerseEnd: number = 0;

  // autocomplete verse search
  public listItems: Array<string> = [
    "Gen 1:1",
    "Gen 1:2",
    "Gen 1:3",
    "Gen 1:4",
    "Gen 1:5",
    "Gen 2:1",
    "Gen 2:2",
    "Gen 2:3",
    "Gen 2:4",
    "Gen 2:5",
  ];

  constructor(
    private bibleService: BibleService,
    private router: Router,
    private route: ActivatedRoute,
    private clipBoard: ClipboardService
  ) {
  }

  async ngOnInit() {
    try {
    } catch (error) {
      console.error("BibleComponent.ngOnInit >> error = " + error);
    }
  }

  async ngAfterViewInit() {
    // get the Bible book
    this.dataBooks = await this.bibleService.fetchBooks();
    this.dataBooksGrouped = groupBy(this.dataBooks, [{ field: "subcategory" }]);

    this.dataChapters = await this.bibleService.fetchChapters();
    this.dataVerses = await this.bibleService.fetchVerses();

    // check for URL parameters
    // http://localhost:4200/bible/1/1/1/2 (book, chapter, verse start, verse end)
    const bookId: number = Number(this.route.snapshot.params.bookId) || 0;
    const chapterId: number = Number(this.route.snapshot.params.chapterId) || 0;
    const verseIdStart: number = Number(this.route.snapshot.params.verseIdStart) || 0;
    const verseIdEnd: number = Number(this.route.snapshot.params.verseIdEnd) || 0;
    console.log(bookId, chapterId, verseIdStart, verseIdEnd);

    // set dropdown selections
    if (bookId) {
      this.selectedBook = bookId;
      await this.handleBookChange(bookId);

      if (chapterId) {
        this.selectedChapter = chapterId;
        this.handleChapterChange(chapterId);
      }
      if (verseIdStart) {
        this.selectedVerseStart = verseIdStart;
        this.selectedVerseEnd = verseIdEnd;
        this.handleSelectedVerseStart(verseIdStart);
      }

      // open/close first dropdown to get DOM to update
      setTimeout(() => {
        this.bookDropdownList.toggle();
        this.bookDropdownList.toggle();
      });
    }
  }

  // dropdown changes

  async handleBookChange(bookId: number) {
    try {
      // reset values
      this.bookId = bookId;
      this.selectedChapter = 0;
      this.selectedVerseStart = 0;
      this.selectedVerseEnd = 0;
      this.showVerse = false;

      if (bookId == this.defaultItemBook.bookId) {
        this.isDisabledChapters = true;
        this.dataResultChapters = [];
      } else {
        this.isDisabledChapters = false;
        this.dataResultChapters = this.dataChapters.filter((s: ChapterIntf) => s.bookId === bookId);
        if (this.debug) {
          console.debug(`${this.logID}handleBookChange >> dataResultChapters = ${JSON.stringify(this.dataResultChapters)}`);
        }

        // get Bible for book
        const dataResultBooks: Array<BookIntf> = this.dataBooks.filter((s: BookIntf) => s.bookId === bookId);
        let bookURL: string = "./assets/bible/text/" + dataResultBooks[0].bookName + ".json";
        bookURL = bookURL.replace(/ /g, ''); // remove white space in case of numbers in front
        this.bibleBook = await this.bibleService.fetchBibleBook(bookURL);
      }

      this.disableSelectedVerseStart = true;
      this.disableSelectedVerseEnd = true;
      this.dataResultVerses = [];

    } catch (error) {
      console.error("BibleComponent.handleBookChange >> error = " + error);
    }
  }

  handleChapterChange(chapterId: number) {
    // get chapter
    const chapter: ChapterIntf | undefined = this.dataChapters.find((chapter: ChapterIntf) => {
      return ((chapter.chapterId == chapterId) && (chapter.bookId == this.bookId))
    });
    if (this.debug) {
      console.debug(`${this.logID}handleChapterChange >> chapter = ${JSON.stringify(chapter)}`);
    }

    // reset values
    this.selectedVerseStart = 0;
    this.selectedVerseEnd = 0;
    this.showVerse = false;

    if (chapterId == this.defaultItemChapter.chapterId) {
      this.disableSelectedVerseStart = true;
      this.disableSelectedVerseEnd = true;
      this.dataResultVerses = [];
    } else if (chapter) {
      this.disableSelectedVerseStart = false;
      this.dataResultVerses = this.dataVerses.filter((s: VerseIntf) => ((s.chapterId === chapter.chapterId) && (s.bookId === chapter.bookId)));
      if (this.debug) {
        console.debug(`${this.logID}handleChapterChange >> dataResultVerses = ${JSON.stringify(this.dataResultVerses)}`);
      }
    }
  }

  handleSelectedVerseStart(verseId: number) {
    // verse selected
    if (verseId) {
      const verse = this.dataVerses.find((verse: VerseIntf) => {
        return verse.verseId == verseId
      });

      // set verse end same as beginning if it was empty or less in value
      if ((!this.selectedVerseEnd) || (this.selectedVerseStart > this.selectedVerseEnd)) {
        this.disableSelectedVerseEnd = false;
        this.selectedVerseEnd = verseId;
        this.verseEndDropdownList.writeValue(verseId);
      } else {
        this.disableSelectedVerseEnd = false;
      }

      // set Bible info
      this.setBibleInfo();
    } else {
      this.showVerse = false;
      this.disableSelectedVerseEnd = true;
    }
  }

  handleSelectedVerseEnd(verseId: number) {
    // verse selected
    if (verseId) {
      // set data
      this.selectedVerseEnd = verseId;
      this.setBibleInfo();
    } else {
      this.showVerse = false;
    }
  }

  // switch changes
  abbreviateBookChange(value: boolean) {
    if (this.showVerse) {
      this.setBibleInfo();
    }
  }

  showVerseNumbersChange(value: boolean) {
    if (this.showVerse) {
      this.setBibleInfo();
    }
  }

  // functions

  setBibleInfo() {
    // set verse end to start if not selected yet
    if (!this.selectedVerseEnd) {
      this.selectedVerseEnd = this.selectedVerseStart;
    }

    // get array data
    const book = this.dataBooks.find((book: BookIntf) => {
      return book.bookId == this.selectedBook
    });
    const chapter = this.dataChapters.find((chapter: ChapterIntf) => {
      return chapter.chapterId == this.selectedChapter
    });
    const verseStart = this.dataVerses.find((verse: VerseIntf) => {
      return verse.verseId == this.selectedVerseStart
    });
    const verseEnd = this.dataVerses.find((verse: VerseIntf) => {
      return verse.verseId == this.selectedVerseEnd
    });

    // get data
    const bookName = book.bookName;
    const bookAbbrev = this.bibleBook.abbrev;

    // get number of verses selected
    let numVerses = 1;
    if (this.selectedVerseEnd != this.selectedVerseStart) {
      numVerses = this.selectedVerseEnd - this.selectedVerseStart + 1;
    }
    if (this.debug) {
      console.debug("numVerses = " + numVerses.toString());
    }

    // get chapter and verse name
    const chapterName: string = chapter ? chapter.chapterName : "";
    const verseNameStart: string = verseStart ? verseStart.verseName : "";

    // find ending verse
    let verseNameEnd = "";
    if (this.selectedVerseEnd) {
      verseNameEnd = verseEnd ? verseEnd.verseName : "";
    }

    // build verse text
    let verseText = "";
    for (let index = 0; index < numVerses; index++) {
      let passage = this.bibleBook.chapters[this.selectedChapter - 1].verses[this.selectedVerseStart + index - 1].text;
      if (this.showVerseNumbers) {
        verseText += "[" + (this.selectedVerseStart + index).toString() + "] ";
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
    let verseLocation: string = "";
    if (this.abbreviateBook) {
      verseLocation = `${bookAbbrev} ${this.selectedChapter}:${this.selectedVerseStart}`;
    } else {
      verseLocation = `${bookName} ${this.selectedChapter}:${this.selectedVerseStart}`;
    }
    if (this.selectedVerseEnd != this.selectedVerseStart) {
      verseLocation += `-${this.selectedVerseEnd}`;
    }

    // set data
    this.verseText = verseText;
    this.verseLocation = verseLocation;
    this.showVerse = true;
  }

  copyBibleVerse() {
    // build verse for copying
    const verse = this.verseLocation + " \"" + this.verseText + "\"";

    // copy verse to clipboard
    this.clipBoard.copy(verse);

    // shake copy button
    this.showAnimation = !this.showAnimation;
  }

  shareBibleVerse(e: any) {
    try {
      switch (e.text) {
        case this.shareBibleVerseData[0].text:  // Copy Link
          // save selected verse in parameters
          const searchArr: Array<Number> = [];
          searchArr.push(this.selectedBook);
          searchArr.push(this.selectedChapter);
          searchArr.push(this.selectedVerseStart);
          searchArr.push(this.selectedVerseEnd);

          // get URL to copy
          const url: string = `${this.url}${searchArr.join("/")}`;
          if (this.debug) {
            console.debug(this.logID + "shareBibleVerse >> url = " + url);
          }

          // copy URL to clipboard
          this.clipBoard.copy(url);
          break;
        default:
          console.error("e.text unhandled >> e.text = " + e.text);
          break;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
