import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // dropdown disable
  public isDisabledChapters: boolean = true;
  public isDisabledVerses: boolean = true;

  // dropdown default selection
  public defaultItemBook: { bookName: string, bookId: number } = { bookName: "Select Book", bookId: null };
  public defaultItemChapter: { chapterName: string, chapterId: number } = { chapterName: "Select Chapter", chapterId: null };
  public defaultItemVerse: { verseName: string, verseId: number } = { verseName: "Select Verse", verseId: null };

  // dropdown data
  public dataBooks: Array<{ bookName: string, bookId: number }> = [
    { bookName: "Genesis", bookId: 1 },
    { bookName: "Exodus", bookId: 2 },
    { bookName: "Leviticus", bookId: 3 },
    { bookName: "Numbers", bookId: 4 },
    { bookName: "Deuteronomy", bookId: 5 },
    { bookName: "Joshua", bookId: 6 },
    { bookName: "Judges", bookId: 7 },
    { bookName: "Ruth", bookId: 8 },
    { bookName: "1 Samuel", bookId: 9 },
    { bookName: "2 Samuel", bookId: 10 },
    { bookName: "1 Kings", bookId: 11 },
    { bookName: "2 Kings", bookId: 12 },
    { bookName: "1 Chronicles", bookId: 13 },
    { bookName: "2 Chronicles", bookId: 14 },
    { bookName: "Ezra", bookId: 15 },
    { bookName: "Nehemiah", bookId: 16 },
    { bookName: "Esther", bookId: 17 },
    { bookName: "Job", bookId: 18 },
    { bookName: "Psalms", bookId: 19 },
    { bookName: "Proverbs", bookId: 20 },
    { bookName: "Ecclesiastes", bookId: 21 },
    { bookName: "Song of Solomon", bookId: 22 },
    { bookName: "Isaiah", bookId: 23 },
    { bookName: "Jeremiah", bookId: 24 },
    { bookName: "Lamentations", bookId: 25 },
    { bookName: "Ezekiel", bookId: 26 },
    { bookName: "Daniel", bookId: 27 },
    { bookName: "Hosea", bookId: 28 },
    { bookName: "Joel", bookId: 29 },
    { bookName: "Amos", bookId: 30 },
    { bookName: "Obadiah", bookId: 31 },
    { bookName: "Jonah", bookId: 32 },
    { bookName: "Micah", bookId: 33 },
    { bookName: "Nahum", bookId: 34 },
    { bookName: "Habakkuk", bookId: 35 },
    { bookName: "Zephaniah", bookId: 36 },
    { bookName: "Haggai", bookId: 37 },
    { bookName: "Zechariah", bookId: 38 },
    { bookName: "Malachi", bookId: 39 },
    { bookName: "Matthew", bookId: 40 },
    { bookName: "Mark", bookId: 41 },
    { bookName: "Luke", bookId: 42 },
    { bookName: "John", bookId: 43 },
    { bookName: "Acts", bookId: 44 },
    { bookName: "Romans", bookId: 45 },
    { bookName: "1 Corinthians", bookId: 46 },
    { bookName: "2 Corinthians", bookId: 47 },
    { bookName: "Galatians", bookId: 48 },
    { bookName: "Ephesians", bookId: 49 },
    { bookName: "Philippians", bookId: 50 },
    { bookName: "Colossians", bookId: 51 },
    { bookName: "1 Thessalonians", bookId: 52 },
    { bookName: "2 Thessalonians", bookId: 53 },
    { bookName: "1 Timothy", bookId: 54 },
    { bookName: "2 Timothy", bookId: 55 },
    { bookName: "Titus", bookId: 56 },
    { bookName: "Philemon", bookId: 57 },
    { bookName: "Hebrews", bookId: 58 },
    { bookName: "James", bookId: 59 },
    { bookName: "1 Peter", bookId: 60 },
    { bookName: "2 Peter", bookId: 61 },
    { bookName: "1 John", bookId: 62 },
    { bookName: "2 John", bookId: 63 },
    { bookName: "3 John", bookId: 64 },
    { bookName: "Jude", bookId: 65 },
    { bookName: "Revelation", bookId: 66 },
  ];
  public dataChapters: Array<{ chapterName: string, chapterId: number, bookId: number }> = [
    { chapterName: "Chapter 1", chapterId: 1, bookId: 1 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 2 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 3 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 4 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 5 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 6 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 7 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 8 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 9 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 10 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 11 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 12 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 13 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 14 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 15 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 16 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 17 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 18 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 19 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 20 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 21 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 22 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 23 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 24 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 25 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 26 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 27 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 28 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 29 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 30 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 31 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 32 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 33 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 34 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 35 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 36 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 37 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 38 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 39 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 40 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 41 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 42 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 43 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 44 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 45 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 46 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 47 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 48 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 49 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 50 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 51 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 52 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 53 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 54 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 55 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 56 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 57 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 58 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 59 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 60 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 61 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 62 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 63 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 64 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 65 },
    { chapterName: "Chapter 1", chapterId: 1, bookId: 66 },
  ];
  public dataVerses: Array<{ verseName: string, verseId: number, chapterId: number, }> = [
    { verseName: "Verse 1", verseId: 1, chapterId: 1 },
    { verseName: "Verse 1", verseId: 1, chapterId: 2 },
    { verseName: "Verse 1", verseId: 1, chapterId: 3 },
    { verseName: "Verse 1", verseId: 1, chapterId: 4 },
    { verseName: "Verse 1", verseId: 1, chapterId: 5 },
    { verseName: "Verse 1", verseId: 1, chapterId: 6 },
    { verseName: "Verse 1", verseId: 1, chapterId: 7 },
    { verseName: "Verse 1", verseId: 1, chapterId: 8 },
    { verseName: "Verse 1", verseId: 1, chapterId: 9 },
    { verseName: "Verse 1", verseId: 1, chapterId: 10 },
    { verseName: "Verse 1", verseId: 1, chapterId: 11 },
    { verseName: "Verse 1", verseId: 1, chapterId: 12 },
    { verseName: "Verse 1", verseId: 1, chapterId: 13 },
    { verseName: "Verse 1", verseId: 1, chapterId: 14 },
    { verseName: "Verse 1", verseId: 1, chapterId: 15 },
    { verseName: "Verse 1", verseId: 1, chapterId: 16 },
    { verseName: "Verse 1", verseId: 1, chapterId: 17 },
    { verseName: "Verse 1", verseId: 1, chapterId: 18 },
    { verseName: "Verse 1", verseId: 1, chapterId: 19 },
    { verseName: "Verse 1", verseId: 1, chapterId: 20 },
    { verseName: "Verse 1", verseId: 1, chapterId: 21 },
    { verseName: "Verse 1", verseId: 1, chapterId: 22 },
    { verseName: "Verse 1", verseId: 1, chapterId: 23 },
    { verseName: "Verse 1", verseId: 1, chapterId: 24 },
    { verseName: "Verse 1", verseId: 1, chapterId: 25 },
    { verseName: "Verse 1", verseId: 1, chapterId: 26 },
    { verseName: "Verse 1", verseId: 1, chapterId: 27 },
    { verseName: "Verse 1", verseId: 1, chapterId: 28 },
    { verseName: "Verse 1", verseId: 1, chapterId: 29 },
    { verseName: "Verse 1", verseId: 1, chapterId: 30 },
    { verseName: "Verse 1", verseId: 1, chapterId: 31 },
    { verseName: "Verse 1", verseId: 1, chapterId: 32 },
    { verseName: "Verse 1", verseId: 1, chapterId: 33 },
    { verseName: "Verse 1", verseId: 1, chapterId: 34 },
    { verseName: "Verse 1", verseId: 1, chapterId: 35 },
    { verseName: "Verse 1", verseId: 1, chapterId: 36 },
    { verseName: "Verse 1", verseId: 1, chapterId: 37 },
    { verseName: "Verse 1", verseId: 1, chapterId: 38 },
    { verseName: "Verse 1", verseId: 1, chapterId: 39 },
    { verseName: "Verse 1", verseId: 1, chapterId: 40 },
    { verseName: "Verse 1", verseId: 1, chapterId: 41 },
    { verseName: "Verse 1", verseId: 1, chapterId: 42 },
    { verseName: "Verse 1", verseId: 1, chapterId: 43 },
    { verseName: "Verse 1", verseId: 1, chapterId: 44 },
    { verseName: "Verse 1", verseId: 1, chapterId: 45 },
    { verseName: "Verse 1", verseId: 1, chapterId: 46 },
    { verseName: "Verse 1", verseId: 1, chapterId: 47 },
    { verseName: "Verse 1", verseId: 1, chapterId: 48 },
    { verseName: "Verse 1", verseId: 1, chapterId: 49 },
    { verseName: "Verse 1", verseId: 1, chapterId: 50 },
    { verseName: "Verse 1", verseId: 1, chapterId: 51 },
    { verseName: "Verse 1", verseId: 1, chapterId: 52 },
    { verseName: "Verse 1", verseId: 1, chapterId: 53 },
    { verseName: "Verse 1", verseId: 1, chapterId: 54 },
    { verseName: "Verse 1", verseId: 1, chapterId: 55 },
    { verseName: "Verse 1", verseId: 1, chapterId: 56 },
    { verseName: "Verse 1", verseId: 1, chapterId: 57 },
    { verseName: "Verse 1", verseId: 1, chapterId: 58 },
    { verseName: "Verse 1", verseId: 1, chapterId: 59 },
    { verseName: "Verse 1", verseId: 1, chapterId: 60 },
    { verseName: "Verse 1", verseId: 1, chapterId: 61 },
    { verseName: "Verse 1", verseId: 1, chapterId: 62 },
    { verseName: "Verse 1", verseId: 1, chapterId: 63 },
    { verseName: "Verse 1", verseId: 1, chapterId: 64 },
    { verseName: "Verse 1", verseId: 1, chapterId: 65 },
    { verseName: "Verse 1", verseId: 1, chapterId: 66 },
    { verseName: "Verse 2", verseId: 2, chapterId: 1 },
    { verseName: "Verse 2", verseId: 2, chapterId: 2 },
    { verseName: "Verse 2", verseId: 2, chapterId: 3 },
    { verseName: "Verse 2", verseId: 2, chapterId: 4 },
    { verseName: "Verse 2", verseId: 2, chapterId: 5 },
    { verseName: "Verse 2", verseId: 2, chapterId: 6 },
    { verseName: "Verse 2", verseId: 2, chapterId: 7 },
    { verseName: "Verse 2", verseId: 2, chapterId: 8 },
    { verseName: "Verse 2", verseId: 2, chapterId: 9 },
    { verseName: "Verse 2", verseId: 2, chapterId: 10 },
    { verseName: "Verse 2", verseId: 2, chapterId: 11 },
    { verseName: "Verse 2", verseId: 2, chapterId: 12 },
    { verseName: "Verse 2", verseId: 2, chapterId: 13 },
    { verseName: "Verse 2", verseId: 2, chapterId: 14 },
    { verseName: "Verse 2", verseId: 2, chapterId: 15 },
    { verseName: "Verse 2", verseId: 2, chapterId: 16 },
    { verseName: "Verse 2", verseId: 2, chapterId: 17 },
    { verseName: "Verse 2", verseId: 2, chapterId: 18 },
    { verseName: "Verse 2", verseId: 2, chapterId: 19 },
    { verseName: "Verse 2", verseId: 2, chapterId: 20 },
    { verseName: "Verse 2", verseId: 2, chapterId: 21 },
    { verseName: "Verse 2", verseId: 2, chapterId: 22 },
    { verseName: "Verse 2", verseId: 2, chapterId: 23 },
    { verseName: "Verse 2", verseId: 2, chapterId: 24 },
    { verseName: "Verse 2", verseId: 2, chapterId: 25 },
    { verseName: "Verse 2", verseId: 2, chapterId: 26 },
    { verseName: "Verse 2", verseId: 2, chapterId: 27 },
    { verseName: "Verse 2", verseId: 2, chapterId: 28 },
    { verseName: "Verse 2", verseId: 2, chapterId: 29 },
    { verseName: "Verse 2", verseId: 2, chapterId: 30 },
    { verseName: "Verse 2", verseId: 2, chapterId: 31 },
    { verseName: "Verse 2", verseId: 2, chapterId: 32 },
    { verseName: "Verse 2", verseId: 2, chapterId: 33 },
    { verseName: "Verse 2", verseId: 2, chapterId: 34 },
    { verseName: "Verse 2", verseId: 2, chapterId: 35 },
    { verseName: "Verse 2", verseId: 2, chapterId: 36 },
    { verseName: "Verse 2", verseId: 2, chapterId: 37 },
    { verseName: "Verse 2", verseId: 2, chapterId: 38 },
    { verseName: "Verse 2", verseId: 2, chapterId: 39 },
    { verseName: "Verse 2", verseId: 2, chapterId: 40 },
    { verseName: "Verse 2", verseId: 2, chapterId: 41 },
    { verseName: "Verse 2", verseId: 2, chapterId: 42 },
    { verseName: "Verse 2", verseId: 2, chapterId: 43 },
    { verseName: "Verse 2", verseId: 2, chapterId: 44 },
    { verseName: "Verse 2", verseId: 2, chapterId: 45 },
    { verseName: "Verse 2", verseId: 2, chapterId: 46 },
    { verseName: "Verse 2", verseId: 2, chapterId: 47 },
    { verseName: "Verse 2", verseId: 2, chapterId: 48 },
    { verseName: "Verse 2", verseId: 2, chapterId: 49 },
    { verseName: "Verse 2", verseId: 2, chapterId: 50 },
    { verseName: "Verse 2", verseId: 2, chapterId: 51 },
    { verseName: "Verse 2", verseId: 2, chapterId: 52 },
    { verseName: "Verse 2", verseId: 2, chapterId: 53 },
    { verseName: "Verse 2", verseId: 2, chapterId: 54 },
    { verseName: "Verse 2", verseId: 2, chapterId: 55 },
    { verseName: "Verse 2", verseId: 2, chapterId: 56 },
    { verseName: "Verse 2", verseId: 2, chapterId: 57 },
    { verseName: "Verse 2", verseId: 2, chapterId: 58 },
    { verseName: "Verse 2", verseId: 2, chapterId: 59 },
    { verseName: "Verse 2", verseId: 2, chapterId: 60 },
    { verseName: "Verse 2", verseId: 2, chapterId: 61 },
    { verseName: "Verse 2", verseId: 2, chapterId: 62 },
    { verseName: "Verse 2", verseId: 2, chapterId: 63 },
    { verseName: "Verse 2", verseId: 2, chapterId: 64 },
    { verseName: "Verse 2", verseId: 2, chapterId: 65 },
    { verseName: "Verse 2", verseId: 2, chapterId: 66 },
  ];

  // dropdown cascade result
  public dataResultChapters: Array<{ chapterName: string, chapterId: number, bookId: number }>;
  public dataResultVerses: Array<{ verseName: string, verseId: number, chapterId: number, }>;

  // dropdown selection
  public selectedBook: { bookName: string, bookId: number };
  public selectedChapter: { chapterName: string, chapterId: number };
  public selectedVerse: { verseName: string, verseId: number };

  // dropdown change
  handleBookChange(value) {
    this.selectedBook = value;
    this.selectedChapter = undefined;
    this.selectedVerse = undefined;

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

  handleChapterChange(value) {
    this.selectedChapter = value;
    this.selectedVerse = undefined;

    if (value.chapterId == this.defaultItemChapter.chapterId) {
      this.isDisabledVerses = true;
      this.dataResultVerses = [];
    } else {
      this.isDisabledVerses = false;
      this.dataResultVerses = this.dataVerses.filter((s) => s.chapterId === value.chapterId)
    }
  }

  handleVerseChange(value) {
    this.selectedVerse = value;
  }
}
