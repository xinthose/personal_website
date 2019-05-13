import { Component, OnInit } from '@angular/core';

import books from './data/books.json';
import chapters from './data/chapters.json';
import verses from './data/verses.json';
import bible from './data/en_kjv.json';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public verseText: string;
  public verseTitle: string;
  public verseLocation: string;
  public showVerse: boolean;

  // dropdown disable
  public isDisabledChapters: boolean = true;
  public isDisabledVerses: boolean = true;

  // dropdown default selection
  public defaultItemBook: { bookName: string, bookId: number } = { bookName: "Select Book", bookId: null };
  public defaultItemChapter: { chapterName: string, chapterId: number } = { chapterName: "Select Chapter", chapterId: null };
  public defaultItemVerse: { verseName: string, verseId: number } = { verseName: "Select Verse", verseId: null };

  // dropdown data
  public dataBooks: Array<{ bookName: string, bookId: number }> = books;
  public dataChapters: Array<{ chapterName: string, chapterId: number, bookId: number }> = chapters;
  public dataVerses: Array<{ verseName: string, verseId: number, chapterId: number, bookId: number }> = verses;

  // dropdown cascade result
  public dataResultChapters: Array<{ chapterName: string, chapterId: number, bookId: number }>;
  public dataResultVerses: Array<{ verseName: string, verseId: number, chapterId: number }>;

  // dropdown selection
  public selectedBook: { bookName: string, bookId: number };
  public selectedChapter: { chapterName: string, chapterId: number };
  public selectedVerse: { verseName: string, verseId: number };

  // dropdown change
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
      this.verseText = bible[this.selectedBook.bookId - 1].chapters[this.selectedChapter.chapterId - 1][this.selectedVerse.verseId - 1];
      this.verseTitle = this.selectedBook.bookName + " " + this.selectedChapter.chapterName + " " + this.selectedVerse.verseName;
      this.verseLocation = bible[this.selectedBook.bookId - 1].abbrev + " " + this.selectedChapter.chapterId.toString() + ":" + this.selectedVerse.verseId.toString();
      this.showVerse = true;
    } else {
      this.showVerse = false;
    }
  }
}
