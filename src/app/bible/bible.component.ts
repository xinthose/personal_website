import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { BibleService } from "../bible.service";

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent implements OnInit {
  bible: any;
  verseText: string;
  verseTitle: string;
  verseLocation: string;
  showVerse: boolean;
  debug: boolean = true;

  // dropdown disable
  isDisabledChapters: boolean = true;
  isDisabledVerses: boolean = true;

  // dropdown default selection
  defaultItemBook: { bookName: string, bookId: number } = { bookName: "Select Book", bookId: null };
  defaultItemChapter: { chapterName: string, chapterId: number } = { chapterName: "Select Chapter", chapterId: null };
  defaultItemVerse: { verseName: string, verseId: number } = { verseName: "Select Verse", verseId: null };

  // dropdown data
  dataBooks: Array<{ bookName: string, bookId: number }>;
  dataChapters: Array<{ chapterName: string, chapterId: number, bookId: number }>;
  dataVerses: Array<{ verseName: string, verseId: number, chapterId: number, bookId: number }>;

  // dropdown cascade result
  dataResultChapters: Array<{ chapterName: string, chapterId: number, bookId: number }>;
  dataResultVerses: Array<{ verseName: string, verseId: number, chapterId: number }>;

  // dropdown selection
  selectedBook: { bookName: string, bookId: number };
  selectedChapter: { chapterName: string, chapterId: number };
  selectedVerse: { verseName: string, verseId: number };  

  constructor(
    private bibleService: BibleService,
  ) {
    // import * as books from './bible/data/books.json';
    // import * as chapters from './bible/data/chapters.json';
    // import * as verses from './bible/data/verses.json';    
    // import * as bible from './data/en_kjv.json';

    //this.dataBooks = books;
    this.bibleService.fetch('./data/books.json')
      .subscribe(response => {
        if (this.debug) console.debug("response = " + JSON.stringify(response));
        
      }, error => {
        console.error(error);
      }, () => {
      });

    // this.dataChapters = chapters;
    // this.dataVerses = verses;
    // this.bible = bible;
  }

  ngOnInit() {
  }

  // dropdown changes

  handleBookChange(value: any) {
    this.selectedBook = value;
    this.selectedChapter = undefined;
    this.selectedVerse = undefined;
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
    this.selectedVerse = undefined;
    this.showVerse = false;

    if (value.chapterId == this.defaultItemChapter.chapterId) {
      this.isDisabledVerses = true;
      this.dataResultVerses = [];
    } else {
      this.isDisabledVerses = false;
      this.dataResultVerses = this.dataVerses.filter((s) => ((s.chapterId === value.chapterId) && (s.bookId === value.bookId)))
    }
  }
  
  handleVerseChange(value: any) {
    if (value.verseId) {
      this.selectedVerse = value;
      this.verseText = this.bible[this.selectedBook.bookId - 1].chapters[this.selectedChapter.chapterId - 1][this.selectedVerse.verseId - 1];
      this.verseTitle = this.selectedBook.bookName + " " + this.selectedChapter.chapterName + " " + this.selectedVerse.verseName;
      this.verseLocation = this.bible[this.selectedBook.bookId - 1].abbrev + " " + this.selectedChapter.chapterId.toString() + ":" + this.selectedVerse.verseId.toString();
      this.showVerse = true;
    } else {
      this.showVerse = false;
    }
  }
}
