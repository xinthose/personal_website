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
import { Book } from "./../shared/bible/Book";
import { Chapter } from "./../shared/bible/Chapter";
import { Verse } from "./../shared/bible/Verse";

// rxjs
import { combineLatest } from "rxjs";
import { switchMap } from "rxjs/operators";

// other
import { ClipboardService } from "ngx-clipboard";
import { jello } from "ngx-animate";
import { environment } from "environments/environment";

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
  debug: boolean = true;
  advDebug: boolean = false;
  logLoc: string = "BibleComponent.";
  showAnimation: boolean = false;
  @ViewChild("bookDropdownList", { static: false }) public bookDropdownList!: DropDownListComponent;
  @ViewChild("chapterDropdownList", { static: false }) public chapterDropdownList!: DropDownListComponent;
  @ViewChild("verseStartDropdownList", { static: false }) public verseStartDropdownList!: DropDownListComponent;
  @ViewChild("verseEndDropdownList", { static: false }) public verseEndDropdownList!: DropDownListComponent;
  url: string = environment.production ? "http://www.xinthose.com/bible/" : "http://localhost:4200/bible/";
  @ViewChild("productTypeChild", { static: true }) public productTypeChild!: DropDownListComponent;
  ProductTypeID: number = 0;
  productTypeData: Array<{ Description: string, ProductTypeID: number, SubProductTypeID: number }> = [{
    Description: "Test 1", ProductTypeID: 1, SubProductTypeID: 1
  }, {
    Description: "Test 2", ProductTypeID: 2, SubProductTypeID: 2
  }, {
    Description: "Test 3", ProductTypeID: 3, SubProductTypeID: 3
  }];
  productTypeDefaultItem: { Description: string, ProductTypeID: number } = { Description: "Select type...", ProductTypeID: 0 };

  bible: any;
  verseText: string = "";
  verseTitle: string = "";
  verseLocation: string = "";
  showVerse: boolean = false;
  showVerseNumbers: boolean = false;
  shareBibleVerseData: Array<{ text: string }> = [
    { text: "Copy Link" },
  ];

  // dropdown disable
  isDisabledChapters: boolean = true;
  disableSelectedVerseStart: boolean = true;
  disableSelectedVerseEnd: boolean = true;

  // dropdown default selection
  defaultItemBook: Book = { bookName: "Select Book", bookId: 0, subcategory: "" };
  defaultItemChapter: Chapter = { chapterName: "Select Chapter", chapterId: 0, bookId: 0 };
  defaultItemVerse: Verse = { verseName: "Select Verse", verseId: 0, chapterId: 0, bookId: 0 };

  // dropdown data
  dataBooks: any; // leave as any type for grouping
  dataBooksGrouped!: GroupResult[];
  dataChapters: Array<Chapter> = [];
  dataVerses: Array<Verse> = [];

  // dropdown cascade result
  dataResultChapters: Array<Chapter> = [];
  dataResultVerses: Array<Verse> = [];

  // dropdown values (selection)
  selectedBook: Book = { bookName: "", bookId: 0, subcategory: "" };
  selectedBookNum: number = 0;
  selectedChapter: Chapter = { chapterName: "", chapterId: 0, bookId: 0 };
  selectedVerseStart: Verse = { verseName: "", verseId: 0, chapterId: 0, bookId: 0 };
  selectedVerseEnd: Verse = { verseName: "", verseId: 0, chapterId: 0, bookId: 0 };

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
      this.dataBooks = await this.bibleService.fetchBooks();
      this.dataBooksGrouped = groupBy(this.dataBooks, [{ field: "subcategory" }]);
      console.log(this.dataBooksGrouped)

      this.dataChapters = await this.bibleService.fetchChapters();
      this.dataVerses = await this.bibleService.fetchVerses();
      this.bible = await this.bibleService.fetch("./assets/bible/en_kjv.json");

    } catch (error) {
      console.error("BibleComponent.ngOnInit >> error = " + error);
    }
  }

  async ngAfterViewInit() {
    //this.productTypeChild.writeValue(this.productTypeData[0]);
    this.ProductTypeID = 1;
    this.dataBooks = await this.bibleService.fetchBooks();
    this.selectedBookNum = 2;

    // check for URL parameters
    // http://localhost:4200/bible/1/1/1/2 (book, chapter, verse start, verse end)
    this.route.paramMap.subscribe((pathParams: any) => {
      // get data
      const bookId: number = pathParams.get("bookId") || 0;
      const chapterId: number = pathParams.get("chapterId") || 0;
      const verseIdStart: number = pathParams.get("verseIdStart") || 0;
      const verseIdEnd: number = pathParams.get("verseIdEnd") || 0;

      // set data
      if (bookId) {
        // find book
        // const result: Book = this.dataBooks.find((book: Book) => {
        //   return book.bookId == bookId
        // })
        // if (this.debug) {
        //   console.debug("ngOnInit >> set book to " + JSON.stringify(result));
        // }

        // set value in dropdown
        //this.bookDropdownList.writeValue(result);
        // if (result) {
        //   //this.selectedBook = result;
        // }
        this.selectedBookNum = bookId;
      }
      /*if (chapterId) {
        // find chapter
        const result = this.dataChapters.find((chapter: Chapter) => {
          return chapter.chapterId == chapterId
        })
        if (this.debug) {
          console.debug("ngOnInit >> set chapter to " + JSON.stringify(result));
        }

        // set value in dropdown
        if (result) {
          this.selectedChapter = result;
        }
      }
      if (verseIdStart) {
        // find starting verse
        const result = this.dataVerses.find((verse: Verse) => {
          return verse.verseId == verseIdStart
        })
        if (this.debug) {
          console.debug("ngOnInit >> set verse start to " + JSON.stringify(result));
        }

        // set value in dropdown
        if (result) {
          this.selectedVerseStart = result;
        }
      }
      if (verseIdEnd) {
        // find ending verse
        const result = this.dataVerses.find((verse: Verse) => {
          return verse.verseId == verseIdEnd
        })
        if (this.debug) {
          console.debug("ngOnInit >> set verse end to " + JSON.stringify(result));
        }

        // set value in dropdown
        if (result) {
          this.selectedVerseEnd = result;
        }
      }*/

      console.log(bookId, chapterId, verseIdStart, verseIdEnd);
    });
  }

  // dropdown changes

  handleBookChange(value: any) {
    console.log(value);
    this.selectedBook = value;
    this.selectedChapter = { chapterName: "", chapterId: 0, bookId: 0 };
    this.selectedVerseStart = { verseName: "", verseId: 0, chapterId: 0, bookId: 0 };
    this.selectedVerseEnd = { verseName: "", verseId: 0, chapterId: 0, bookId: 0 };
    this.showVerse = false;

    if (value.bookId == this.defaultItemBook.bookId) {
      this.isDisabledChapters = true;
      this.dataResultChapters = [];
    } else {
      this.isDisabledChapters = false;
      this.dataResultChapters = this.dataChapters.filter((s) => s.bookId === value.bookId)
    }

    this.disableSelectedVerseStart = true;
    this.disableSelectedVerseEnd = true;
    this.dataResultVerses = [];
  }

  handleChapterChange(value: any) {
    this.selectedChapter = value;
    this.selectedVerseStart = { verseName: "", verseId: 0, chapterId: 0, bookId: 0 };
    this.selectedVerseEnd = { verseName: "", verseId: 0, chapterId: 0, bookId: 0 };
    this.showVerse = false;

    if (value.chapterId == this.defaultItemChapter.chapterId) {
      this.disableSelectedVerseStart = true;
      this.disableSelectedVerseEnd = true;
      this.dataResultVerses = [];
    } else {
      this.disableSelectedVerseStart = false;
      this.dataResultVerses = this.dataVerses.filter((s) => ((s.chapterId === value.chapterId) && (s.bookId === value.bookId)))
    }
  }

  handleSelectedVerseStart(value: any) {
    // verse selected
    if (value.verseId) {
      // set data
      this.selectedVerseStart = value;

      // set verse end same as beginning if it was empty or less in value
      if ((!this.selectedVerseEnd.verseId) || (this.selectedVerseStart.verseId > this.selectedVerseEnd.verseId)) {
        this.disableSelectedVerseEnd = false;
        this.selectedVerseEnd = value;
        this.verseEndDropdownList.writeValue(value);
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
          searchArr.push(this.selectedBook.bookId);
          searchArr.push(this.selectedChapter.chapterId);
          searchArr.push(this.selectedVerseStart.verseId);
          searchArr.push(this.selectedVerseEnd.verseId);

          // get URL to copy
          const url: string = `${this.url}${searchArr.join("/")}`;
          if (this.debug) {
            console.debug(this.logLoc + "shareBibleVerse >> url = " + url);
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
