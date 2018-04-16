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
    /* Chapter 1 */
    { chapterName: "Chapter 1", chapterId: 1, bookId: 1 },  // Genesis
    { chapterName: "Chapter 1", chapterId: 1, bookId: 2 },  // Exodus
    { chapterName: "Chapter 1", chapterId: 1, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 1", chapterId: 1, bookId: 4 },  // Numbers
    { chapterName: "Chapter 1", chapterId: 1, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 1", chapterId: 1, bookId: 6 },  // Joshua
    { chapterName: "Chapter 1", chapterId: 1, bookId: 7 },  // Judges
    { chapterName: "Chapter 1", chapterId: 1, bookId: 8 },  // Ruth
    { chapterName: "Chapter 1", chapterId: 1, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 1", chapterId: 1, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 1", chapterId: 1, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 1", chapterId: 1, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 1", chapterId: 1, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 1", chapterId: 1, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 1", chapterId: 1, bookId: 15 },  // Ezra
    { chapterName: "Chapter 1", chapterId: 1, bookId: 16 },  // Nehemiah
    { chapterName: "Chapter 1", chapterId: 1, bookId: 17 },  // Esther
    { chapterName: "Chapter 1", chapterId: 1, bookId: 18 },  // Job
    { chapterName: "Chapter 1", chapterId: 1, bookId: 19 },  // Psalms
    { chapterName: "Chapter 1", chapterId: 1, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 1", chapterId: 1, bookId: 21 },  // Ecclesiastes
    { chapterName: "Chapter 1", chapterId: 1, bookId: 22 },  // Song of Solomon
    { chapterName: "Chapter 1", chapterId: 1, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 1", chapterId: 1, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 1", chapterId: 1, bookId: 25 },  // Lamentations
    { chapterName: "Chapter 1", chapterId: 1, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 1", chapterId: 1, bookId: 27 },  // Daniel
    { chapterName: "Chapter 1", chapterId: 1, bookId: 28 },  // Hosea
    { chapterName: "Chapter 1", chapterId: 1, bookId: 29 },  // Joel
    { chapterName: "Chapter 1", chapterId: 1, bookId: 30 },  // Amos
    { chapterName: "Chapter 1", chapterId: 1, bookId: 31 },  // Obadiah
    { chapterName: "Chapter 1", chapterId: 1, bookId: 32 },  // Jonah
    { chapterName: "Chapter 1", chapterId: 1, bookId: 33 },  // Micah
    { chapterName: "Chapter 1", chapterId: 1, bookId: 34 },  // Nahum
    { chapterName: "Chapter 1", chapterId: 1, bookId: 35 },  // Habakkuk
    { chapterName: "Chapter 1", chapterId: 1, bookId: 36 },  // Zephaniah
    { chapterName: "Chapter 1", chapterId: 1, bookId: 37 },  // Haggai
    { chapterName: "Chapter 1", chapterId: 1, bookId: 38 },  // Zechariah
    { chapterName: "Chapter 1", chapterId: 1, bookId: 39 },  // Malachi
    { chapterName: "Chapter 1", chapterId: 1, bookId: 40 },  // Matthew
    { chapterName: "Chapter 1", chapterId: 1, bookId: 41 },  // Mark
    { chapterName: "Chapter 1", chapterId: 1, bookId: 42 },  // Luke
    { chapterName: "Chapter 1", chapterId: 1, bookId: 43 },  // John
    { chapterName: "Chapter 1", chapterId: 1, bookId: 44 },  // Acts
    { chapterName: "Chapter 1", chapterId: 1, bookId: 45 },  // Romans
    { chapterName: "Chapter 1", chapterId: 1, bookId: 46 },  // 1 Corinthians
    { chapterName: "Chapter 1", chapterId: 1, bookId: 47 },  // 2 Corinthians
    { chapterName: "Chapter 1", chapterId: 1, bookId: 48 },  // Galatians
    { chapterName: "Chapter 1", chapterId: 1, bookId: 49 },  // Ephesians
    { chapterName: "Chapter 1", chapterId: 1, bookId: 50 },  // Philippians
    { chapterName: "Chapter 1", chapterId: 1, bookId: 51 },  // Colossians
    { chapterName: "Chapter 1", chapterId: 1, bookId: 52 },  // 1 Thessalonians
    { chapterName: "Chapter 1", chapterId: 1, bookId: 53 },  // 2 Thessalonians
    { chapterName: "Chapter 1", chapterId: 1, bookId: 54 },  // 1 Timothy
    { chapterName: "Chapter 1", chapterId: 1, bookId: 55 },  // 2 Timothy
    { chapterName: "Chapter 1", chapterId: 1, bookId: 56 },  // Titus
    { chapterName: "Chapter 1", chapterId: 1, bookId: 57 },  // Philemon
    { chapterName: "Chapter 1", chapterId: 1, bookId: 58 },  // Hebrews
    { chapterName: "Chapter 1", chapterId: 1, bookId: 59 },  // James
    { chapterName: "Chapter 1", chapterId: 1, bookId: 60 },  // 1 Peter
    { chapterName: "Chapter 1", chapterId: 1, bookId: 61 },  // 2 Peter
    { chapterName: "Chapter 1", chapterId: 1, bookId: 62 },  // 1 John
    { chapterName: "Chapter 1", chapterId: 1, bookId: 63 },  // 2 John
    { chapterName: "Chapter 1", chapterId: 1, bookId: 64 },  // 3 John
    { chapterName: "Chapter 1", chapterId: 1, bookId: 65 },  // Jude
    { chapterName: "Chapter 1", chapterId: 1, bookId: 66 },  // Revelation
    /* Chapter 3 */
    { chapterName: "Chapter 2", chapterId: 2, bookId: 1 },  // Genesis
    { chapterName: "Chapter 2", chapterId: 2, bookId: 2 },  // Exodus
    { chapterName: "Chapter 2", chapterId: 2, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 2", chapterId: 2, bookId: 4 },  // Numbers
    { chapterName: "Chapter 2", chapterId: 2, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 2", chapterId: 2, bookId: 6 },  // Joshua
    { chapterName: "Chapter 2", chapterId: 2, bookId: 7 },  // Judges
    { chapterName: "Chapter 2", chapterId: 2, bookId: 8 },  // Ruth
    { chapterName: "Chapter 2", chapterId: 2, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 2", chapterId: 2, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 2", chapterId: 2, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 2", chapterId: 2, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 2", chapterId: 2, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 2", chapterId: 2, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 2", chapterId: 2, bookId: 15 },  // Ezra
    { chapterName: "Chapter 2", chapterId: 2, bookId: 16 },  // Nehemiah
    { chapterName: "Chapter 2", chapterId: 2, bookId: 17 },  // Esther
    { chapterName: "Chapter 2", chapterId: 2, bookId: 18 },  // Job
    { chapterName: "Chapter 2", chapterId: 2, bookId: 19 },  // Psalms
    { chapterName: "Chapter 2", chapterId: 2, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 2", chapterId: 2, bookId: 21 },  // Ecclesiastes
    { chapterName: "Chapter 2", chapterId: 2, bookId: 22 },  // Song of Solomon
    { chapterName: "Chapter 2", chapterId: 2, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 2", chapterId: 2, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 2", chapterId: 2, bookId: 25 },  // Lamentations
    { chapterName: "Chapter 2", chapterId: 2, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 2", chapterId: 2, bookId: 27 },  // Daniel
    { chapterName: "Chapter 2", chapterId: 2, bookId: 28 },  // Hosea
    { chapterName: "Chapter 2", chapterId: 2, bookId: 29 },  // Joel
    { chapterName: "Chapter 2", chapterId: 2, bookId: 30 },  // Amos
    { chapterName: "Chapter 2", chapterId: 2, bookId: 32 },  // Jonah
    { chapterName: "Chapter 2", chapterId: 2, bookId: 33 },  // Micah
    { chapterName: "Chapter 2", chapterId: 2, bookId: 34 },  // Nahum
    { chapterName: "Chapter 2", chapterId: 2, bookId: 35 },  // Habakkuk
    { chapterName: "Chapter 2", chapterId: 2, bookId: 36 },  // Zephaniah
    { chapterName: "Chapter 2", chapterId: 2, bookId: 37 },  // Haggai
    { chapterName: "Chapter 2", chapterId: 2, bookId: 38 },  // Zechariah
    { chapterName: "Chapter 2", chapterId: 2, bookId: 39 },  // Malachi
    { chapterName: "Chapter 2", chapterId: 2, bookId: 40 },  // Matthew
    { chapterName: "Chapter 2", chapterId: 2, bookId: 41 },  // Mark
    { chapterName: "Chapter 2", chapterId: 2, bookId: 42 },  // Luke
    { chapterName: "Chapter 2", chapterId: 2, bookId: 43 },  // John
    { chapterName: "Chapter 2", chapterId: 2, bookId: 44 },  // Acts
    { chapterName: "Chapter 2", chapterId: 2, bookId: 45 },  // Romans
    { chapterName: "Chapter 2", chapterId: 2, bookId: 46 },  // 1 Corinthians
    { chapterName: "Chapter 2", chapterId: 2, bookId: 47 },  // 2 Corinthians
    { chapterName: "Chapter 2", chapterId: 2, bookId: 48 },  // Galatians
    { chapterName: "Chapter 2", chapterId: 2, bookId: 49 },  // Ephesians
    { chapterName: "Chapter 2", chapterId: 2, bookId: 50 },  // Philippians
    { chapterName: "Chapter 2", chapterId: 2, bookId: 51 },  // Colossians
    { chapterName: "Chapter 2", chapterId: 2, bookId: 52 },  // 1 Thessalonians
    { chapterName: "Chapter 2", chapterId: 2, bookId: 53 },  // 2 Thessalonians
    { chapterName: "Chapter 2", chapterId: 2, bookId: 54 },  // 1 Timothy
    { chapterName: "Chapter 2", chapterId: 2, bookId: 55 },  // 2 Timothy
    { chapterName: "Chapter 2", chapterId: 2, bookId: 56 },  // Titus
    { chapterName: "Chapter 2", chapterId: 2, bookId: 58 },  // Hebrews
    { chapterName: "Chapter 2", chapterId: 2, bookId: 59 },  // James
    { chapterName: "Chapter 2", chapterId: 2, bookId: 60 },  // 1 Peter
    { chapterName: "Chapter 2", chapterId: 2, bookId: 61 },  // 2 Peter
    { chapterName: "Chapter 2", chapterId: 2, bookId: 62 },  // 1 John
    { chapterName: "Chapter 2", chapterId: 2, bookId: 66 },  // Revelation
    /* Chapter 3 */
    { chapterName: "Chapter 3", chapterId: 3, bookId: 1 },  // Genesis
    { chapterName: "Chapter 3", chapterId: 3, bookId: 2 },  // Exodus
    { chapterName: "Chapter 3", chapterId: 3, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 3", chapterId: 3, bookId: 4 },  // Numbers
    { chapterName: "Chapter 3", chapterId: 3, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 3", chapterId: 3, bookId: 6 },  // Joshua
    { chapterName: "Chapter 3", chapterId: 3, bookId: 7 },  // Judges
    { chapterName: "Chapter 3", chapterId: 3, bookId: 8 },  // Ruth
    { chapterName: "Chapter 3", chapterId: 3, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 3", chapterId: 3, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 3", chapterId: 3, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 3", chapterId: 3, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 3", chapterId: 3, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 3", chapterId: 3, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 3", chapterId: 3, bookId: 15 },  // Ezra
    { chapterName: "Chapter 3", chapterId: 3, bookId: 16 },  // Nehemiah
    { chapterName: "Chapter 3", chapterId: 3, bookId: 17 },  // Esther
    { chapterName: "Chapter 3", chapterId: 3, bookId: 18 },  // Job
    { chapterName: "Chapter 3", chapterId: 3, bookId: 19 },  // Psalms
    { chapterName: "Chapter 3", chapterId: 3, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 3", chapterId: 3, bookId: 21 },  // Ecclesiastes
    { chapterName: "Chapter 3", chapterId: 3, bookId: 22 },  // Song of Solomon
    { chapterName: "Chapter 3", chapterId: 3, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 3", chapterId: 3, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 3", chapterId: 3, bookId: 25 },  // Lamentations
    { chapterName: "Chapter 3", chapterId: 3, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 3", chapterId: 3, bookId: 27 },  // Daniel
    { chapterName: "Chapter 3", chapterId: 3, bookId: 28 },  // Hosea
    { chapterName: "Chapter 3", chapterId: 3, bookId: 29 },  // Joel
    { chapterName: "Chapter 3", chapterId: 3, bookId: 30 },  // Amos
    { chapterName: "Chapter 3", chapterId: 3, bookId: 32 },  // Jonah
    { chapterName: "Chapter 3", chapterId: 3, bookId: 33 },  // Micah
    { chapterName: "Chapter 3", chapterId: 3, bookId: 34 },  // Nahum
    { chapterName: "Chapter 3", chapterId: 3, bookId: 35 },  // Habakkuk
    { chapterName: "Chapter 3", chapterId: 3, bookId: 36 },  // Zephaniah
    { chapterName: "Chapter 3", chapterId: 3, bookId: 38 },  // Zechariah
    { chapterName: "Chapter 3", chapterId: 3, bookId: 39 },  // Malachi
    { chapterName: "Chapter 3", chapterId: 3, bookId: 40 },  // Matthew
    { chapterName: "Chapter 3", chapterId: 3, bookId: 41 },  // Mark
    { chapterName: "Chapter 3", chapterId: 3, bookId: 42 },  // Luke
    { chapterName: "Chapter 3", chapterId: 3, bookId: 43 },  // John
    { chapterName: "Chapter 3", chapterId: 3, bookId: 44 },  // Acts
    { chapterName: "Chapter 3", chapterId: 3, bookId: 45 },  // Romans
    { chapterName: "Chapter 3", chapterId: 3, bookId: 46 },  // 1 Corinthians
    { chapterName: "Chapter 3", chapterId: 3, bookId: 47 },  // 2 Corinthians
    { chapterName: "Chapter 3", chapterId: 3, bookId: 48 },  // Galatians
    { chapterName: "Chapter 3", chapterId: 3, bookId: 49 },  // Ephesians
    { chapterName: "Chapter 3", chapterId: 3, bookId: 50 },  // Philippians
    { chapterName: "Chapter 3", chapterId: 3, bookId: 51 },  // Colossians
    { chapterName: "Chapter 3", chapterId: 3, bookId: 52 },  // 1 Thessalonians
    { chapterName: "Chapter 3", chapterId: 3, bookId: 53 },  // 2 Thessalonians
    { chapterName: "Chapter 3", chapterId: 3, bookId: 54 },  // 1 Timothy
    { chapterName: "Chapter 3", chapterId: 3, bookId: 55 },  // 2 Timothy
    { chapterName: "Chapter 3", chapterId: 3, bookId: 56 },  // Titus
    { chapterName: "Chapter 3", chapterId: 3, bookId: 58 },  // Hebrews
    { chapterName: "Chapter 3", chapterId: 3, bookId: 59 },  // James
    { chapterName: "Chapter 3", chapterId: 3, bookId: 60 },  // 1 Peter
    { chapterName: "Chapter 3", chapterId: 3, bookId: 61 },  // 2 Peter
    { chapterName: "Chapter 3", chapterId: 3, bookId: 62 },  // 1 John
    { chapterName: "Chapter 3", chapterId: 3, bookId: 66 },  // Revelation
    /* Chapter 4 */
    { chapterName: "Chapter 4", chapterId: 4, bookId: 1 },  // Genesis
    { chapterName: "Chapter 4", chapterId: 4, bookId: 2 },  // Exodus
    { chapterName: "Chapter 4", chapterId: 4, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 4", chapterId: 4, bookId: 4 },  // Numbers
    { chapterName: "Chapter 4", chapterId: 4, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 4", chapterId: 4, bookId: 6 },  // Joshua
    { chapterName: "Chapter 4", chapterId: 4, bookId: 7 },  // Judges
    { chapterName: "Chapter 4", chapterId: 4, bookId: 8 },  // Ruth
    { chapterName: "Chapter 4", chapterId: 4, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 4", chapterId: 4, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 4", chapterId: 4, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 4", chapterId: 4, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 4", chapterId: 4, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 4", chapterId: 4, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 4", chapterId: 4, bookId: 15 },  // Ezra
    { chapterName: "Chapter 4", chapterId: 4, bookId: 16 },  // Nehemiah
    { chapterName: "Chapter 4", chapterId: 4, bookId: 17 },  // Esther
    { chapterName: "Chapter 4", chapterId: 4, bookId: 18 },  // Job
    { chapterName: "Chapter 4", chapterId: 4, bookId: 19 },  // Psalms
    { chapterName: "Chapter 4", chapterId: 4, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 4", chapterId: 4, bookId: 21 },  // Ecclesiastes
    { chapterName: "Chapter 4", chapterId: 4, bookId: 22 },  // Song of Solomon
    { chapterName: "Chapter 4", chapterId: 4, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 4", chapterId: 4, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 4", chapterId: 4, bookId: 25 },  // Lamentations
    { chapterName: "Chapter 4", chapterId: 4, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 4", chapterId: 4, bookId: 27 },  // Daniel
    { chapterName: "Chapter 4", chapterId: 4, bookId: 28 },  // Hosea
    { chapterName: "Chapter 4", chapterId: 4, bookId: 29 },  // Joel
    { chapterName: "Chapter 4", chapterId: 4, bookId: 30 },  // Amos
    { chapterName: "Chapter 4", chapterId: 4, bookId: 32 },  // Jonah
    { chapterName: "Chapter 4", chapterId: 4, bookId: 33 },  // Micah
    { chapterName: "Chapter 4", chapterId: 4, bookId: 38 },  // Zechariah
    { chapterName: "Chapter 4", chapterId: 4, bookId: 40 },  // Matthew
    { chapterName: "Chapter 4", chapterId: 4, bookId: 41 },  // Mark
    { chapterName: "Chapter 4", chapterId: 4, bookId: 42 },  // Luke
    { chapterName: "Chapter 4", chapterId: 4, bookId: 43 },  // John
    { chapterName: "Chapter 4", chapterId: 4, bookId: 44 },  // Acts
    { chapterName: "Chapter 4", chapterId: 4, bookId: 45 },  // Romans
    { chapterName: "Chapter 4", chapterId: 4, bookId: 46 },  // 1 Corinthians
    { chapterName: "Chapter 4", chapterId: 4, bookId: 47 },  // 2 Corinthians
    { chapterName: "Chapter 4", chapterId: 4, bookId: 48 },  // Galatians
    { chapterName: "Chapter 4", chapterId: 4, bookId: 49 },  // Ephesians
    { chapterName: "Chapter 4", chapterId: 4, bookId: 50 },  // Philippians
    { chapterName: "Chapter 4", chapterId: 4, bookId: 51 },  // Colossians
    { chapterName: "Chapter 4", chapterId: 4, bookId: 52 },  // 1 Thessalonians
    { chapterName: "Chapter 4", chapterId: 4, bookId: 54 },  // 1 Timothy
    { chapterName: "Chapter 4", chapterId: 4, bookId: 55 },  // 2 Timothy
    { chapterName: "Chapter 4", chapterId: 4, bookId: 58 },  // Hebrews
    { chapterName: "Chapter 4", chapterId: 4, bookId: 59 },  // James
    { chapterName: "Chapter 4", chapterId: 4, bookId: 60 },  // 1 Peter
    { chapterName: "Chapter 4", chapterId: 4, bookId: 62 },  // 1 John
    { chapterName: "Chapter 4", chapterId: 4, bookId: 66 },  // Revelation
    /* Chapter 5 */
    { chapterName: "Chapter 5", chapterId: 5, bookId: 1 },  // Genesis
    { chapterName: "Chapter 5", chapterId: 5, bookId: 2 },  // Exodus
    { chapterName: "Chapter 5", chapterId: 5, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 5", chapterId: 5, bookId: 4 },  // Numbers
    { chapterName: "Chapter 5", chapterId: 5, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 5", chapterId: 5, bookId: 6 },  // Joshua
    { chapterName: "Chapter 5", chapterId: 5, bookId: 7 },  // Judges
    { chapterName: "Chapter 5", chapterId: 5, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 5", chapterId: 5, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 5", chapterId: 5, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 5", chapterId: 5, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 5", chapterId: 5, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 5", chapterId: 5, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 5", chapterId: 5, bookId: 15 },  // Ezra
    { chapterName: "Chapter 5", chapterId: 5, bookId: 16 },  // Nehemiah
    { chapterName: "Chapter 5", chapterId: 5, bookId: 17 },  // Esther
    { chapterName: "Chapter 5", chapterId: 5, bookId: 18 },  // Job
    { chapterName: "Chapter 5", chapterId: 5, bookId: 19 },  // Psalms
    { chapterName: "Chapter 5", chapterId: 5, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 5", chapterId: 5, bookId: 21 },  // Ecclesiastes
    { chapterName: "Chapter 5", chapterId: 5, bookId: 22 },  // Song of Solomon
    { chapterName: "Chapter 5", chapterId: 5, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 5", chapterId: 5, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 5", chapterId: 5, bookId: 25 },  // Lamentations
    { chapterName: "Chapter 5", chapterId: 5, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 5", chapterId: 5, bookId: 27 },  // Daniel
    { chapterName: "Chapter 5", chapterId: 5, bookId: 28 },  // Hosea
    { chapterName: "Chapter 5", chapterId: 5, bookId: 30 },  // Amos
    { chapterName: "Chapter 5", chapterId: 5, bookId: 33 },  // Micah
    { chapterName: "Chapter 5", chapterId: 5, bookId: 38 },  // Zechariah
    { chapterName: "Chapter 5", chapterId: 5, bookId: 40 },  // Matthew
    { chapterName: "Chapter 5", chapterId: 5, bookId: 41 },  // Mark
    { chapterName: "Chapter 5", chapterId: 5, bookId: 42 },  // Luke
    { chapterName: "Chapter 5", chapterId: 5, bookId: 43 },  // John
    { chapterName: "Chapter 5", chapterId: 5, bookId: 44 },  // Acts
    { chapterName: "Chapter 5", chapterId: 5, bookId: 45 },  // Romans
    { chapterName: "Chapter 5", chapterId: 5, bookId: 46 },  // 1 Corinthians
    { chapterName: "Chapter 5", chapterId: 5, bookId: 47 },  // 2 Corinthians
    { chapterName: "Chapter 5", chapterId: 5, bookId: 48 },  // Galatians
    { chapterName: "Chapter 5", chapterId: 5, bookId: 49 },  // Ephesians
    { chapterName: "Chapter 5", chapterId: 5, bookId: 52 },  // 1 Thessalonians
    { chapterName: "Chapter 5", chapterId: 5, bookId: 54 },  // 1 Timothy
    { chapterName: "Chapter 5", chapterId: 5, bookId: 58 },  // Hebrews
    { chapterName: "Chapter 5", chapterId: 5, bookId: 59 },  // James
    { chapterName: "Chapter 5", chapterId: 5, bookId: 60 },  // 1 Peter
    { chapterName: "Chapter 5", chapterId: 5, bookId: 62 },  // 1 John
    { chapterName: "Chapter 5", chapterId: 5, bookId: 66 },  // Revelation
    /* Chapter 6 */
    { chapterName: "Chapter 6", chapterId: 6, bookId: 1 },  // Genesis
    { chapterName: "Chapter 6", chapterId: 6, bookId: 2 },  // Exodus
    { chapterName: "Chapter 6", chapterId: 6, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 6", chapterId: 6, bookId: 4 },  // Numbers
    { chapterName: "Chapter 6", chapterId: 6, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 6", chapterId: 6, bookId: 6 },  // Joshua
    { chapterName: "Chapter 6", chapterId: 6, bookId: 7 },  // Judges
    { chapterName: "Chapter 6", chapterId: 6, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 6", chapterId: 6, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 6", chapterId: 6, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 6", chapterId: 6, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 6", chapterId: 6, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 6", chapterId: 6, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 6", chapterId: 6, bookId: 15 },  // Ezra
    { chapterName: "Chapter 6", chapterId: 6, bookId: 16 },  // Nehemiah
    { chapterName: "Chapter 6", chapterId: 6, bookId: 17 },  // Esther
    { chapterName: "Chapter 6", chapterId: 6, bookId: 18 },  // Job
    { chapterName: "Chapter 6", chapterId: 6, bookId: 19 },  // Psalms
    { chapterName: "Chapter 6", chapterId: 6, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 6", chapterId: 6, bookId: 21 },  // Ecclesiastes
    { chapterName: "Chapter 6", chapterId: 6, bookId: 22 },  // Song of Solomon
    { chapterName: "Chapter 6", chapterId: 6, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 6", chapterId: 6, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 6", chapterId: 6, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 6", chapterId: 6, bookId: 27 },  // Daniel
    { chapterName: "Chapter 6", chapterId: 6, bookId: 28 },  // Hosea
    { chapterName: "Chapter 6", chapterId: 6, bookId: 30 },  // Amos
    { chapterName: "Chapter 6", chapterId: 6, bookId: 33 },  // Micah
    { chapterName: "Chapter 6", chapterId: 6, bookId: 38 },  // Zechariah
    { chapterName: "Chapter 6", chapterId: 6, bookId: 40 },  // Matthew
    { chapterName: "Chapter 6", chapterId: 6, bookId: 41 },  // Mark
    { chapterName: "Chapter 6", chapterId: 6, bookId: 42 },  // Luke
    { chapterName: "Chapter 6", chapterId: 6, bookId: 43 },  // John
    { chapterName: "Chapter 6", chapterId: 6, bookId: 44 },  // Acts
    { chapterName: "Chapter 6", chapterId: 6, bookId: 45 },  // Romans
    { chapterName: "Chapter 6", chapterId: 6, bookId: 46 },  // 1 Corinthians
    { chapterName: "Chapter 6", chapterId: 6, bookId: 47 },  // 2 Corinthians
    { chapterName: "Chapter 6", chapterId: 6, bookId: 48 },  // Galatians
    { chapterName: "Chapter 6", chapterId: 6, bookId: 49 },  // Ephesians
    { chapterName: "Chapter 6", chapterId: 6, bookId: 54 },  // 1 Timothy
    { chapterName: "Chapter 6", chapterId: 6, bookId: 58 },  // Hebrews
    { chapterName: "Chapter 6", chapterId: 6, bookId: 66 },  // Revelation
    /* Chapter 7 */
    { chapterName: "Chapter 7", chapterId: 7, bookId: 1 },  // Genesis
    { chapterName: "Chapter 7", chapterId: 7, bookId: 2 },  // Exodus
    { chapterName: "Chapter 7", chapterId: 7, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 7", chapterId: 7, bookId: 4 },  // Numbers
    { chapterName: "Chapter 7", chapterId: 7, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 7", chapterId: 7, bookId: 6 },  // Joshua
    { chapterName: "Chapter 7", chapterId: 7, bookId: 7 },  // Judges
    { chapterName: "Chapter 7", chapterId: 7, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 7", chapterId: 7, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 7", chapterId: 7, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 7", chapterId: 7, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 7", chapterId: 7, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 7", chapterId: 7, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 7", chapterId: 7, bookId: 15 },  // Ezra
    { chapterName: "Chapter 7", chapterId: 7, bookId: 16 },  // Nehemiah
    { chapterName: "Chapter 7", chapterId: 7, bookId: 17 },  // Esther
    { chapterName: "Chapter 7", chapterId: 7, bookId: 18 },  // Job
    { chapterName: "Chapter 7", chapterId: 7, bookId: 19 },  // Psalms
    { chapterName: "Chapter 7", chapterId: 7, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 7", chapterId: 7, bookId: 21 },  // Ecclesiastes
    { chapterName: "Chapter 7", chapterId: 7, bookId: 22 },  // Song of Solomon
    { chapterName: "Chapter 7", chapterId: 7, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 7", chapterId: 7, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 7", chapterId: 7, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 7", chapterId: 7, bookId: 27 },  // Daniel
    { chapterName: "Chapter 7", chapterId: 7, bookId: 28 },  // Hosea
    { chapterName: "Chapter 7", chapterId: 7, bookId: 30 },  // Amos
    { chapterName: "Chapter 7", chapterId: 7, bookId: 33 },  // Micah
    { chapterName: "Chapter 7", chapterId: 7, bookId: 38 },  // Zechariah
    { chapterName: "Chapter 7", chapterId: 7, bookId: 40 },  // Matthew
    { chapterName: "Chapter 7", chapterId: 7, bookId: 41 },  // Mark
    { chapterName: "Chapter 7", chapterId: 7, bookId: 42 },  // Luke
    { chapterName: "Chapter 7", chapterId: 7, bookId: 43 },  // John
    { chapterName: "Chapter 7", chapterId: 7, bookId: 44 },  // Acts
    { chapterName: "Chapter 7", chapterId: 7, bookId: 45 },  // Romans
    { chapterName: "Chapter 7", chapterId: 7, bookId: 46 },  // 1 Corinthians
    { chapterName: "Chapter 7", chapterId: 7, bookId: 47 },  // 2 Corinthians
    { chapterName: "Chapter 7", chapterId: 7, bookId: 58 },  // Hebrews
    { chapterName: "Chapter 7", chapterId: 7, bookId: 66 },  // Revelation
    /* Chapter 8 */
    { chapterName: "Chapter 8", chapterId: 8, bookId: 1 },  // Genesis
    { chapterName: "Chapter 8", chapterId: 8, bookId: 2 },  // Exodus
    { chapterName: "Chapter 8", chapterId: 8, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 8", chapterId: 8, bookId: 4 },  // Numbers
    { chapterName: "Chapter 8", chapterId: 8, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 8", chapterId: 8, bookId: 6 },  // Joshua
    { chapterName: "Chapter 8", chapterId: 8, bookId: 7 },  // Judges
    { chapterName: "Chapter 8", chapterId: 8, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 8", chapterId: 8, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 8", chapterId: 8, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 8", chapterId: 8, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 8", chapterId: 8, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 8", chapterId: 8, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 8", chapterId: 8, bookId: 15 },  // Ezra
    { chapterName: "Chapter 8", chapterId: 8, bookId: 16 },  // Nehemiah
    { chapterName: "Chapter 8", chapterId: 8, bookId: 17 },  // Esther
    { chapterName: "Chapter 8", chapterId: 8, bookId: 18 },  // Job
    { chapterName: "Chapter 8", chapterId: 8, bookId: 19 },  // Psalms
    { chapterName: "Chapter 8", chapterId: 8, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 8", chapterId: 8, bookId: 21 },  // Ecclesiastes
    { chapterName: "Chapter 8", chapterId: 8, bookId: 22 },  // Song of Solomon
    { chapterName: "Chapter 8", chapterId: 8, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 8", chapterId: 8, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 8", chapterId: 8, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 8", chapterId: 8, bookId: 27 },  // Daniel
    { chapterName: "Chapter 8", chapterId: 8, bookId: 28 },  // Hosea
    { chapterName: "Chapter 8", chapterId: 8, bookId: 30 },  // Amos
    { chapterName: "Chapter 8", chapterId: 8, bookId: 38 },  // Zechariah
    { chapterName: "Chapter 8", chapterId: 8, bookId: 40 },  // Matthew
    { chapterName: "Chapter 8", chapterId: 8, bookId: 41 },  // Mark
    { chapterName: "Chapter 8", chapterId: 8, bookId: 42 },  // Luke
    { chapterName: "Chapter 8", chapterId: 8, bookId: 43 },  // John
    { chapterName: "Chapter 8", chapterId: 8, bookId: 44 },  // Acts
    { chapterName: "Chapter 8", chapterId: 8, bookId: 45 },  // Romans
    { chapterName: "Chapter 8", chapterId: 8, bookId: 46 },  // 1 Corinthians
    { chapterName: "Chapter 8", chapterId: 8, bookId: 47 },  // 2 Corinthians
    { chapterName: "Chapter 8", chapterId: 8, bookId: 58 },  // Hebrews
    { chapterName: "Chapter 8", chapterId: 8, bookId: 66 },  // Revelation
    /* Chapter 9 */
    { chapterName: "Chapter 9", chapterId: 9, bookId: 1 },  // Genesis
    { chapterName: "Chapter 9", chapterId: 9, bookId: 2 },  // Exodus
    { chapterName: "Chapter 9", chapterId: 9, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 9", chapterId: 9, bookId: 4 },  // Numbers
    { chapterName: "Chapter 9", chapterId: 9, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 9", chapterId: 9, bookId: 6 },  // Joshua
    { chapterName: "Chapter 9", chapterId: 9, bookId: 7 },  // Judges
    { chapterName: "Chapter 9", chapterId: 9, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 9", chapterId: 9, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 9", chapterId: 9, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 9", chapterId: 9, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 9", chapterId: 9, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 9", chapterId: 9, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 9", chapterId: 9, bookId: 15 },  // Ezra
    { chapterName: "Chapter 9", chapterId: 9, bookId: 16 },  // Nehemiah
    { chapterName: "Chapter 9", chapterId: 9, bookId: 17 },  // Esther
    { chapterName: "Chapter 9", chapterId: 9, bookId: 18 },  // Job
    { chapterName: "Chapter 9", chapterId: 9, bookId: 19 },  // Psalms
    { chapterName: "Chapter 9", chapterId: 9, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 9", chapterId: 9, bookId: 21 },  // Ecclesiastes
    { chapterName: "Chapter 9", chapterId: 9, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 9", chapterId: 9, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 9", chapterId: 9, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 9", chapterId: 9, bookId: 27 },  // Daniel
    { chapterName: "Chapter 9", chapterId: 9, bookId: 28 },  // Hosea
    { chapterName: "Chapter 9", chapterId: 9, bookId: 30 },  // Amos
    { chapterName: "Chapter 9", chapterId: 9, bookId: 38 },  // Zechariah
    { chapterName: "Chapter 9", chapterId: 9, bookId: 40 },  // Matthew
    { chapterName: "Chapter 9", chapterId: 9, bookId: 41 },  // Mark
    { chapterName: "Chapter 9", chapterId: 9, bookId: 42 },  // Luke
    { chapterName: "Chapter 9", chapterId: 9, bookId: 43 },  // John
    { chapterName: "Chapter 9", chapterId: 9, bookId: 44 },  // Acts
    { chapterName: "Chapter 9", chapterId: 9, bookId: 45 },  // Romans
    { chapterName: "Chapter 9", chapterId: 9, bookId: 46 },  // 1 Corinthians
    { chapterName: "Chapter 9", chapterId: 9, bookId: 47 },  // 2 Corinthians
    { chapterName: "Chapter 9", chapterId: 9, bookId: 58 },  // Hebrews
    { chapterName: "Chapter 9", chapterId: 9, bookId: 66 },  // Revelation
    /* Chapter 10 */
    { chapterName: "Chapter 10", chapterId: 10, bookId: 1 },  // Genesis
    { chapterName: "Chapter 10", chapterId: 10, bookId: 2 },  // Exodus
    { chapterName: "Chapter 10", chapterId: 10, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 10", chapterId: 10, bookId: 4 },  // Numbers
    { chapterName: "Chapter 10", chapterId: 10, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 10", chapterId: 10, bookId: 6 },  // Joshua
    { chapterName: "Chapter 10", chapterId: 10, bookId: 7 },  // Judges
    { chapterName: "Chapter 10", chapterId: 10, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 10", chapterId: 10, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 10", chapterId: 10, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 10", chapterId: 10, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 10", chapterId: 10, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 10", chapterId: 10, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 10", chapterId: 10, bookId: 15 },  // Ezra
    { chapterName: "Chapter 10", chapterId: 10, bookId: 16 },  // Nehemiah
    { chapterName: "Chapter 10", chapterId: 10, bookId: 17 },  // Esther
    { chapterName: "Chapter 10", chapterId: 10, bookId: 18 },  // Job
    { chapterName: "Chapter 10", chapterId: 10, bookId: 19 },  // Psalms
    { chapterName: "Chapter 10", chapterId: 10, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 10", chapterId: 10, bookId: 21 },  // Ecclesiastes
    { chapterName: "Chapter 10", chapterId: 10, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 10", chapterId: 10, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 10", chapterId: 10, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 10", chapterId: 10, bookId: 27 },  // Daniel
    { chapterName: "Chapter 10", chapterId: 10, bookId: 28 },  // Hosea
    { chapterName: "Chapter 10", chapterId: 10, bookId: 38 },  // Zechariah
    { chapterName: "Chapter 10", chapterId: 10, bookId: 40 },  // Matthew
    { chapterName: "Chapter 10", chapterId: 10, bookId: 41 },  // Mark
    { chapterName: "Chapter 10", chapterId: 10, bookId: 42 },  // Luke
    { chapterName: "Chapter 10", chapterId: 10, bookId: 43 },  // John
    { chapterName: "Chapter 10", chapterId: 10, bookId: 44 },  // Acts
    { chapterName: "Chapter 10", chapterId: 10, bookId: 45 },  // Romans
    { chapterName: "Chapter 10", chapterId: 10, bookId: 46 },  // 1 Corinthians
    { chapterName: "Chapter 10", chapterId: 10, bookId: 47 },  // 2 Corinthians
    { chapterName: "Chapter 10", chapterId: 10, bookId: 58 },  // Hebrews
    { chapterName: "Chapter 10", chapterId: 10, bookId: 66 },  // Revelation
    /* Chapter 11 */
    { chapterName: "Chapter 11", chapterId: 11, bookId: 1 },  // Genesis
    { chapterName: "Chapter 11", chapterId: 11, bookId: 2 },  // Exodus
    { chapterName: "Chapter 11", chapterId: 11, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 11", chapterId: 11, bookId: 4 },  // Numbers
    { chapterName: "Chapter 11", chapterId: 11, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 11", chapterId: 11, bookId: 6 },  // Joshua
    { chapterName: "Chapter 11", chapterId: 11, bookId: 7 },  // Judges
    { chapterName: "Chapter 11", chapterId: 11, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 11", chapterId: 11, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 11", chapterId: 11, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 11", chapterId: 11, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 11", chapterId: 11, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 11", chapterId: 11, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 11", chapterId: 11, bookId: 16 },  // Nehemiah
    { chapterName: "Chapter 11", chapterId: 11, bookId: 17 },  // Esther
    { chapterName: "Chapter 11", chapterId: 11, bookId: 18 },  // Job
    { chapterName: "Chapter 11", chapterId: 11, bookId: 19 },  // Psalms
    { chapterName: "Chapter 11", chapterId: 11, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 11", chapterId: 11, bookId: 21 },  // Ecclesiastes
    { chapterName: "Chapter 11", chapterId: 11, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 11", chapterId: 11, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 11", chapterId: 11, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 11", chapterId: 11, bookId: 27 },  // Daniel
    { chapterName: "Chapter 11", chapterId: 11, bookId: 28 },  // Hosea
    { chapterName: "Chapter 11", chapterId: 11, bookId: 38 },  // Zechariah
    { chapterName: "Chapter 11", chapterId: 11, bookId: 40 },  // Matthew
    { chapterName: "Chapter 11", chapterId: 11, bookId: 41 },  // Mark
    { chapterName: "Chapter 11", chapterId: 11, bookId: 42 },  // Luke
    { chapterName: "Chapter 11", chapterId: 11, bookId: 43 },  // John
    { chapterName: "Chapter 11", chapterId: 11, bookId: 44 },  // Acts
    { chapterName: "Chapter 11", chapterId: 11, bookId: 45 },  // Romans
    { chapterName: "Chapter 11", chapterId: 11, bookId: 46 },  // 1 Corinthians
    { chapterName: "Chapter 11", chapterId: 11, bookId: 47 },  // 2 Corinthians
    { chapterName: "Chapter 11", chapterId: 11, bookId: 58 },  // Hebrews
    { chapterName: "Chapter 11", chapterId: 11, bookId: 66 },  // Revelation
    /* Chapter 12 */
    { chapterName: "Chapter 12", chapterId: 12, bookId: 1 },  // Genesis
    { chapterName: "Chapter 12", chapterId: 12, bookId: 2 },  // Exodus
    { chapterName: "Chapter 12", chapterId: 12, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 12", chapterId: 12, bookId: 4 },  // Numbers
    { chapterName: "Chapter 12", chapterId: 12, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 12", chapterId: 12, bookId: 6 },  // Joshua
    { chapterName: "Chapter 12", chapterId: 12, bookId: 7 },  // Judges
    { chapterName: "Chapter 12", chapterId: 12, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 12", chapterId: 12, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 12", chapterId: 12, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 12", chapterId: 12, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 12", chapterId: 12, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 12", chapterId: 12, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 12", chapterId: 12, bookId: 16 },  // Nehemiah
    { chapterName: "Chapter 12", chapterId: 12, bookId: 17 },  // Esther
    { chapterName: "Chapter 12", chapterId: 12, bookId: 18 },  // Job
    { chapterName: "Chapter 12", chapterId: 12, bookId: 19 },  // Psalms
    { chapterName: "Chapter 12", chapterId: 12, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 12", chapterId: 12, bookId: 21 },  // Ecclesiastes
    { chapterName: "Chapter 12", chapterId: 12, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 12", chapterId: 12, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 12", chapterId: 12, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 12", chapterId: 12, bookId: 27 },  // Daniel
    { chapterName: "Chapter 12", chapterId: 12, bookId: 28 },  // Hosea
    { chapterName: "Chapter 12", chapterId: 12, bookId: 38 },  // Zechariah
    { chapterName: "Chapter 12", chapterId: 12, bookId: 40 },  // Matthew
    { chapterName: "Chapter 12", chapterId: 12, bookId: 41 },  // Mark
    { chapterName: "Chapter 12", chapterId: 12, bookId: 42 },  // Luke
    { chapterName: "Chapter 12", chapterId: 12, bookId: 43 },  // John
    { chapterName: "Chapter 12", chapterId: 12, bookId: 44 },  // Acts
    { chapterName: "Chapter 12", chapterId: 12, bookId: 45 },  // Romans
    { chapterName: "Chapter 12", chapterId: 12, bookId: 46 },  // 1 Corinthians
    { chapterName: "Chapter 12", chapterId: 12, bookId: 47 },  // 2 Corinthians
    { chapterName: "Chapter 12", chapterId: 12, bookId: 58 },  // Hebrews
    { chapterName: "Chapter 12", chapterId: 12, bookId: 66 },  // Revelation
    /* Chapter 13 */
    { chapterName: "Chapter 13", chapterId: 13, bookId: 1 },  // Genesis
    { chapterName: "Chapter 13", chapterId: 13, bookId: 2 },  // Exodus
    { chapterName: "Chapter 13", chapterId: 13, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 13", chapterId: 13, bookId: 4 },  // Numbers
    { chapterName: "Chapter 13", chapterId: 13, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 13", chapterId: 13, bookId: 6 },  // Joshua
    { chapterName: "Chapter 13", chapterId: 13, bookId: 7 },  // Judges
    { chapterName: "Chapter 13", chapterId: 13, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 13", chapterId: 13, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 13", chapterId: 13, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 13", chapterId: 13, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 13", chapterId: 13, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 13", chapterId: 13, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 13", chapterId: 13, bookId: 16 },  // Nehemiah
    { chapterName: "Chapter 13", chapterId: 13, bookId: 17 },  // Esther
    { chapterName: "Chapter 13", chapterId: 13, bookId: 18 },  // Job
    { chapterName: "Chapter 13", chapterId: 13, bookId: 19 },  // Psalms
    { chapterName: "Chapter 13", chapterId: 13, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 13", chapterId: 13, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 13", chapterId: 13, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 13", chapterId: 13, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 13", chapterId: 13, bookId: 27 },  // Daniel
    { chapterName: "Chapter 13", chapterId: 13, bookId: 28 },  // Hosea
    { chapterName: "Chapter 13", chapterId: 13, bookId: 38 },  // Zechariah
    { chapterName: "Chapter 13", chapterId: 13, bookId: 40 },  // Matthew
    { chapterName: "Chapter 13", chapterId: 13, bookId: 41 },  // Mark
    { chapterName: "Chapter 13", chapterId: 13, bookId: 42 },  // Luke
    { chapterName: "Chapter 13", chapterId: 13, bookId: 43 },  // John
    { chapterName: "Chapter 13", chapterId: 13, bookId: 44 },  // Acts
    { chapterName: "Chapter 13", chapterId: 13, bookId: 45 },  // Romans
    { chapterName: "Chapter 13", chapterId: 13, bookId: 46 },  // 1 Corinthians
    { chapterName: "Chapter 13", chapterId: 13, bookId: 47 },  // 2 Corinthians
    { chapterName: "Chapter 13", chapterId: 13, bookId: 58 },  // Hebrews
    { chapterName: "Chapter 13", chapterId: 13, bookId: 66 },  // Revelation
    /* Chapter 14 */
    { chapterName: "Chapter 14", chapterId: 14, bookId: 1 },  // Genesis
    { chapterName: "Chapter 14", chapterId: 14, bookId: 2 },  // Exodus
    { chapterName: "Chapter 14", chapterId: 14, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 14", chapterId: 14, bookId: 4 },  // Numbers
    { chapterName: "Chapter 14", chapterId: 14, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 14", chapterId: 14, bookId: 6 },  // Joshua
    { chapterName: "Chapter 14", chapterId: 14, bookId: 7 },  // Judges
    { chapterName: "Chapter 14", chapterId: 14, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 14", chapterId: 14, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 14", chapterId: 14, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 14", chapterId: 14, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 14", chapterId: 14, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 14", chapterId: 14, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 14", chapterId: 14, bookId: 17 },  // Esther
    { chapterName: "Chapter 14", chapterId: 14, bookId: 18 },  // Job
    { chapterName: "Chapter 14", chapterId: 14, bookId: 19 },  // Psalms
    { chapterName: "Chapter 14", chapterId: 14, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 14", chapterId: 14, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 14", chapterId: 14, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 14", chapterId: 14, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 14", chapterId: 14, bookId: 27 },  // Daniel
    { chapterName: "Chapter 14", chapterId: 14, bookId: 28 },  // Hosea
    { chapterName: "Chapter 14", chapterId: 14, bookId: 38 },  // Zechariah
    { chapterName: "Chapter 14", chapterId: 14, bookId: 40 },  // Matthew
    { chapterName: "Chapter 14", chapterId: 14, bookId: 41 },  // Mark
    { chapterName: "Chapter 14", chapterId: 14, bookId: 42 },  // Luke
    { chapterName: "Chapter 14", chapterId: 14, bookId: 43 },  // John
    { chapterName: "Chapter 14", chapterId: 14, bookId: 44 },  // Acts
    { chapterName: "Chapter 14", chapterId: 14, bookId: 45 },  // Romans
    { chapterName: "Chapter 14", chapterId: 14, bookId: 46 },  // 1 Corinthians
    { chapterName: "Chapter 14", chapterId: 14, bookId: 66 },  // Revelation
    /* Chapter 15 */
    { chapterName: "Chapter 15", chapterId: 15, bookId: 1 },  // Genesis
    { chapterName: "Chapter 15", chapterId: 15, bookId: 2 },  // Exodus
    { chapterName: "Chapter 15", chapterId: 15, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 15", chapterId: 15, bookId: 4 },  // Numbers
    { chapterName: "Chapter 15", chapterId: 15, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 15", chapterId: 15, bookId: 6 },  // Joshua
    { chapterName: "Chapter 15", chapterId: 15, bookId: 7 },  // Judges
    { chapterName: "Chapter 15", chapterId: 15, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 15", chapterId: 15, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 15", chapterId: 15, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 15", chapterId: 15, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 15", chapterId: 15, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 15", chapterId: 15, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 15", chapterId: 15, bookId: 17 },  // Esther
    { chapterName: "Chapter 15", chapterId: 15, bookId: 18 },  // Job
    { chapterName: "Chapter 15", chapterId: 15, bookId: 19 },  // Psalms
    { chapterName: "Chapter 15", chapterId: 15, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 15", chapterId: 15, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 15", chapterId: 15, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 15", chapterId: 15, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 15", chapterId: 15, bookId: 40 },  // Matthew
    { chapterName: "Chapter 15", chapterId: 15, bookId: 41 },  // Mark
    { chapterName: "Chapter 15", chapterId: 15, bookId: 42 },  // Luke
    { chapterName: "Chapter 15", chapterId: 15, bookId: 43 },  // John
    { chapterName: "Chapter 15", chapterId: 15, bookId: 44 },  // Acts
    { chapterName: "Chapter 15", chapterId: 15, bookId: 45 },  // Romans
    { chapterName: "Chapter 15", chapterId: 15, bookId: 46 },  // 1 Corinthians
    { chapterName: "Chapter 15", chapterId: 15, bookId: 66 },  // Revelation
    /* Chapter 16 */
    { chapterName: "Chapter 16", chapterId: 16, bookId: 1 },  // Genesis
    { chapterName: "Chapter 16", chapterId: 16, bookId: 2 },  // Exodus
    { chapterName: "Chapter 16", chapterId: 16, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 16", chapterId: 16, bookId: 4 },  // Numbers
    { chapterName: "Chapter 16", chapterId: 16, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 16", chapterId: 16, bookId: 6 },  // Joshua
    { chapterName: "Chapter 16", chapterId: 16, bookId: 7 },  // Judges
    { chapterName: "Chapter 16", chapterId: 16, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 16", chapterId: 16, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 16", chapterId: 16, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 16", chapterId: 16, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 16", chapterId: 16, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 16", chapterId: 16, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 16", chapterId: 16, bookId: 17 },  // Esther
    { chapterName: "Chapter 16", chapterId: 16, bookId: 18 },  // Job
    { chapterName: "Chapter 16", chapterId: 16, bookId: 19 },  // Psalms
    { chapterName: "Chapter 16", chapterId: 16, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 16", chapterId: 16, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 16", chapterId: 16, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 16", chapterId: 16, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 16", chapterId: 16, bookId: 40 },  // Matthew
    { chapterName: "Chapter 16", chapterId: 16, bookId: 41 },  // Mark
    { chapterName: "Chapter 16", chapterId: 16, bookId: 42 },  // Luke
    { chapterName: "Chapter 16", chapterId: 16, bookId: 43 },  // John
    { chapterName: "Chapter 16", chapterId: 16, bookId: 44 },  // Acts
    { chapterName: "Chapter 16", chapterId: 16, bookId: 45 },  // Romans
    { chapterName: "Chapter 16", chapterId: 16, bookId: 46 },  // 1 Corinthians
    { chapterName: "Chapter 16", chapterId: 16, bookId: 66 },  // Revelation
    /* Chapter 17 */
    { chapterName: "Chapter 17", chapterId: 17, bookId: 1 },  // Genesis
    { chapterName: "Chapter 17", chapterId: 17, bookId: 2 },  // Exodus
    { chapterName: "Chapter 17", chapterId: 17, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 17", chapterId: 17, bookId: 4 },  // Numbers
    { chapterName: "Chapter 17", chapterId: 17, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 17", chapterId: 17, bookId: 6 },  // Joshua
    { chapterName: "Chapter 17", chapterId: 17, bookId: 7 },  // Judges
    { chapterName: "Chapter 17", chapterId: 17, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 17", chapterId: 17, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 17", chapterId: 17, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 17", chapterId: 17, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 17", chapterId: 17, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 17", chapterId: 17, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 17", chapterId: 17, bookId: 18 },  // Job
    { chapterName: "Chapter 17", chapterId: 17, bookId: 19 },  // Psalms
    { chapterName: "Chapter 17", chapterId: 17, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 17", chapterId: 17, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 17", chapterId: 17, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 17", chapterId: 17, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 17", chapterId: 17, bookId: 40 },  // Matthew
    { chapterName: "Chapter 17", chapterId: 17, bookId: 42 },  // Luke
    { chapterName: "Chapter 17", chapterId: 17, bookId: 43 },  // John
    { chapterName: "Chapter 17", chapterId: 17, bookId: 44 },  // Acts
    { chapterName: "Chapter 17", chapterId: 17, bookId: 66 },  // Revelation
    /* Chapter 18 */
    { chapterName: "Chapter 18", chapterId: 18, bookId: 1 },  // Genesis
    { chapterName: "Chapter 18", chapterId: 18, bookId: 2 },  // Exodus
    { chapterName: "Chapter 18", chapterId: 18, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 18", chapterId: 18, bookId: 4 },  // Numbers
    { chapterName: "Chapter 18", chapterId: 18, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 18", chapterId: 18, bookId: 6 },  // Joshua
    { chapterName: "Chapter 18", chapterId: 18, bookId: 7 },  // Judges
    { chapterName: "Chapter 18", chapterId: 18, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 18", chapterId: 18, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 18", chapterId: 18, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 18", chapterId: 18, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 18", chapterId: 18, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 18", chapterId: 18, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 18", chapterId: 18, bookId: 18 },  // Job
    { chapterName: "Chapter 18", chapterId: 18, bookId: 19 },  // Psalms
    { chapterName: "Chapter 18", chapterId: 18, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 18", chapterId: 18, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 18", chapterId: 18, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 18", chapterId: 18, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 18", chapterId: 18, bookId: 40 },  // Matthew
    { chapterName: "Chapter 18", chapterId: 18, bookId: 42 },  // Luke
    { chapterName: "Chapter 18", chapterId: 18, bookId: 43 },  // John
    { chapterName: "Chapter 18", chapterId: 18, bookId: 44 },  // Acts
    { chapterName: "Chapter 18", chapterId: 18, bookId: 66 },  // Revelation
    /* Chapter 19 */
    { chapterName: "Chapter 19", chapterId: 19, bookId: 1 },  // Genesis
    { chapterName: "Chapter 19", chapterId: 19, bookId: 2 },  // Exodus
    { chapterName: "Chapter 19", chapterId: 19, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 19", chapterId: 19, bookId: 4 },  // Numbers
    { chapterName: "Chapter 19", chapterId: 19, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 19", chapterId: 19, bookId: 6 },  // Joshua
    { chapterName: "Chapter 19", chapterId: 19, bookId: 7 },  // Judges
    { chapterName: "Chapter 19", chapterId: 19, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 19", chapterId: 19, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 19", chapterId: 19, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 19", chapterId: 19, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 19", chapterId: 19, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 19", chapterId: 19, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 19", chapterId: 19, bookId: 18 },  // Job
    { chapterName: "Chapter 19", chapterId: 19, bookId: 19 },  // Psalms
    { chapterName: "Chapter 19", chapterId: 19, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 19", chapterId: 19, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 19", chapterId: 19, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 19", chapterId: 19, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 19", chapterId: 19, bookId: 40 },  // Matthew
    { chapterName: "Chapter 19", chapterId: 19, bookId: 42 },  // Luke
    { chapterName: "Chapter 19", chapterId: 19, bookId: 43 },  // John
    { chapterName: "Chapter 19", chapterId: 19, bookId: 44 },  // Acts
    { chapterName: "Chapter 19", chapterId: 19, bookId: 66 },  // Revelation
    /* Chapter 20 */
    { chapterName: "Chapter 20", chapterId: 20, bookId: 1 },  // Genesis
    { chapterName: "Chapter 20", chapterId: 20, bookId: 2 },  // Exodus
    { chapterName: "Chapter 20", chapterId: 20, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 20", chapterId: 20, bookId: 4 },  // Numbers
    { chapterName: "Chapter 20", chapterId: 20, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 20", chapterId: 20, bookId: 6 },  // Joshua
    { chapterName: "Chapter 20", chapterId: 20, bookId: 7 },  // Judges
    { chapterName: "Chapter 20", chapterId: 20, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 20", chapterId: 20, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 20", chapterId: 20, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 20", chapterId: 20, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 20", chapterId: 20, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 20", chapterId: 20, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 20", chapterId: 20, bookId: 18 },  // Job
    { chapterName: "Chapter 20", chapterId: 20, bookId: 19 },  // Psalms
    { chapterName: "Chapter 20", chapterId: 20, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 20", chapterId: 20, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 20", chapterId: 20, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 20", chapterId: 20, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 20", chapterId: 20, bookId: 40 },  // Matthew
    { chapterName: "Chapter 20", chapterId: 20, bookId: 42 },  // Luke
    { chapterName: "Chapter 20", chapterId: 20, bookId: 43 },  // John
    { chapterName: "Chapter 20", chapterId: 20, bookId: 44 },  // Acts
    { chapterName: "Chapter 20", chapterId: 20, bookId: 66 },  // Revelation
    /* Chapter 21 */
    { chapterName: "Chapter 21", chapterId: 21, bookId: 1 },  // Genesis
    { chapterName: "Chapter 21", chapterId: 21, bookId: 2 },  // Exodus
    { chapterName: "Chapter 21", chapterId: 21, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 21", chapterId: 21, bookId: 4 },  // Numbers
    { chapterName: "Chapter 21", chapterId: 21, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 21", chapterId: 21, bookId: 6 },  // Joshua
    { chapterName: "Chapter 21", chapterId: 21, bookId: 7 },  // Judges
    { chapterName: "Chapter 21", chapterId: 21, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 21", chapterId: 21, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 21", chapterId: 21, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 21", chapterId: 21, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 21", chapterId: 21, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 21", chapterId: 21, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 21", chapterId: 21, bookId: 18 },  // Job
    { chapterName: "Chapter 21", chapterId: 21, bookId: 19 },  // Psalms
    { chapterName: "Chapter 21", chapterId: 21, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 21", chapterId: 21, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 21", chapterId: 21, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 21", chapterId: 21, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 21", chapterId: 21, bookId: 40 },  // Matthew
    { chapterName: "Chapter 21", chapterId: 21, bookId: 42 },  // Luke
    { chapterName: "Chapter 21", chapterId: 21, bookId: 43 },  // John
    { chapterName: "Chapter 21", chapterId: 21, bookId: 44 },  // Acts
    { chapterName: "Chapter 21", chapterId: 21, bookId: 66 },  // Revelation
    /* Chapter 22 */
    { chapterName: "Chapter 22", chapterId: 22, bookId: 1 },  // Genesis
    { chapterName: "Chapter 22", chapterId: 22, bookId: 2 },  // Exodus
    { chapterName: "Chapter 22", chapterId: 22, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 22", chapterId: 22, bookId: 4 },  // Numbers
    { chapterName: "Chapter 22", chapterId: 22, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 22", chapterId: 22, bookId: 6 },  // Joshua
    { chapterName: "Chapter 22", chapterId: 22, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 22", chapterId: 22, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 22", chapterId: 22, bookId: 11 },  // 1 Kings
    { chapterName: "Chapter 22", chapterId: 22, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 22", chapterId: 22, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 22", chapterId: 22, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 22", chapterId: 22, bookId: 18 },  // Job
    { chapterName: "Chapter 22", chapterId: 22, bookId: 19 },  // Psalms
    { chapterName: "Chapter 22", chapterId: 22, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 22", chapterId: 22, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 22", chapterId: 22, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 22", chapterId: 22, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 22", chapterId: 22, bookId: 40 },  // Matthew
    { chapterName: "Chapter 22", chapterId: 22, bookId: 42 },  // Luke
    { chapterName: "Chapter 22", chapterId: 22, bookId: 44 },  // Acts
    { chapterName: "Chapter 22", chapterId: 22, bookId: 66 },  // Revelation
    /* Chapter 23 */
    { chapterName: "Chapter 23", chapterId: 23, bookId: 1 },  // Genesis
    { chapterName: "Chapter 23", chapterId: 23, bookId: 2 },  // Exodus
    { chapterName: "Chapter 23", chapterId: 23, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 23", chapterId: 23, bookId: 4 },  // Numbers
    { chapterName: "Chapter 23", chapterId: 23, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 23", chapterId: 23, bookId: 6 },  // Joshua
    { chapterName: "Chapter 23", chapterId: 23, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 23", chapterId: 23, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 23", chapterId: 23, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 23", chapterId: 23, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 23", chapterId: 23, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 23", chapterId: 23, bookId: 18 },  // Job
    { chapterName: "Chapter 23", chapterId: 23, bookId: 19 },  // Psalms
    { chapterName: "Chapter 23", chapterId: 23, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 23", chapterId: 23, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 23", chapterId: 23, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 23", chapterId: 23, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 23", chapterId: 23, bookId: 40 },  // Matthew
    { chapterName: "Chapter 23", chapterId: 23, bookId: 42 },  // Luke
    { chapterName: "Chapter 23", chapterId: 23, bookId: 44 },  // Acts
    /* Chapter 24 */
    { chapterName: "Chapter 24", chapterId: 24, bookId: 1 },  // Genesis
    { chapterName: "Chapter 24", chapterId: 24, bookId: 2 },  // Exodus
    { chapterName: "Chapter 24", chapterId: 24, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 24", chapterId: 24, bookId: 4 },  // Numbers
    { chapterName: "Chapter 24", chapterId: 24, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 24", chapterId: 24, bookId: 6 },  // Joshua
    { chapterName: "Chapter 24", chapterId: 24, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 24", chapterId: 24, bookId: 10 },  // 2 Samuel
    { chapterName: "Chapter 24", chapterId: 24, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 24", chapterId: 24, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 24", chapterId: 24, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 24", chapterId: 24, bookId: 18 },  // Job
    { chapterName: "Chapter 24", chapterId: 24, bookId: 19 },  // Psalms
    { chapterName: "Chapter 24", chapterId: 24, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 24", chapterId: 24, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 24", chapterId: 24, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 24", chapterId: 24, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 24", chapterId: 24, bookId: 40 },  // Matthew
    { chapterName: "Chapter 24", chapterId: 24, bookId: 42 },  // Luke
    { chapterName: "Chapter 24", chapterId: 24, bookId: 44 },  // Acts
    /* Chapter 25 */
    { chapterName: "Chapter 25", chapterId: 25, bookId: 1 },  // Genesis
    { chapterName: "Chapter 25", chapterId: 25, bookId: 2 },  // Exodus
    { chapterName: "Chapter 25", chapterId: 25, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 25", chapterId: 25, bookId: 4 },  // Numbers
    { chapterName: "Chapter 25", chapterId: 25, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 25", chapterId: 25, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 25", chapterId: 25, bookId: 12 },  // 2 Kings
    { chapterName: "Chapter 25", chapterId: 25, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 25", chapterId: 25, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 25", chapterId: 25, bookId: 18 },  // Job
    { chapterName: "Chapter 25", chapterId: 25, bookId: 19 },  // Psalms
    { chapterName: "Chapter 25", chapterId: 25, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 25", chapterId: 25, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 25", chapterId: 25, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 25", chapterId: 25, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 25", chapterId: 25, bookId: 40 },  // Matthew
    { chapterName: "Chapter 25", chapterId: 25, bookId: 44 },  // Acts
    /* Chapter 26 */
    { chapterName: "Chapter 26", chapterId: 26, bookId: 1 },  // Genesis
    { chapterName: "Chapter 26", chapterId: 26, bookId: 2 },  // Exodus
    { chapterName: "Chapter 26", chapterId: 26, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 26", chapterId: 26, bookId: 4 },  // Numbers
    { chapterName: "Chapter 26", chapterId: 26, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 26", chapterId: 26, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 26", chapterId: 26, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 26", chapterId: 26, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 26", chapterId: 26, bookId: 18 },  // Job
    { chapterName: "Chapter 26", chapterId: 26, bookId: 19 },  // Psalms
    { chapterName: "Chapter 26", chapterId: 26, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 26", chapterId: 26, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 26", chapterId: 26, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 26", chapterId: 26, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 26", chapterId: 26, bookId: 40 },  // Matthew
    { chapterName: "Chapter 26", chapterId: 26, bookId: 44 },  // Acts
    /* Chapter 27 */
    { chapterName: "Chapter 27", chapterId: 27, bookId: 1 },  // Genesis
    { chapterName: "Chapter 27", chapterId: 27, bookId: 2 },  // Exodus
    { chapterName: "Chapter 27", chapterId: 27, bookId: 3 },  // Leviticus
    { chapterName: "Chapter 27", chapterId: 27, bookId: 4 },  // Numbers
    { chapterName: "Chapter 27", chapterId: 27, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 27", chapterId: 27, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 27", chapterId: 27, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 27", chapterId: 27, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 27", chapterId: 27, bookId: 18 },  // Job
    { chapterName: "Chapter 27", chapterId: 27, bookId: 19 },  // Psalms
    { chapterName: "Chapter 27", chapterId: 27, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 27", chapterId: 27, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 27", chapterId: 27, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 27", chapterId: 27, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 27", chapterId: 27, bookId: 40 },  // Matthew
    { chapterName: "Chapter 27", chapterId: 27, bookId: 44 },  // Acts
    /* Chapter 28 */
    { chapterName: "Chapter 28", chapterId: 28, bookId: 1 },  // Genesis
    { chapterName: "Chapter 28", chapterId: 28, bookId: 2 },  // Exodus
    { chapterName: "Chapter 28", chapterId: 28, bookId: 4 },  // Numbers
    { chapterName: "Chapter 28", chapterId: 28, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 28", chapterId: 28, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 28", chapterId: 28, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 28", chapterId: 28, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 28", chapterId: 28, bookId: 18 },  // Job
    { chapterName: "Chapter 28", chapterId: 28, bookId: 19 },  // Psalms
    { chapterName: "Chapter 28", chapterId: 28, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 28", chapterId: 28, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 28", chapterId: 28, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 28", chapterId: 28, bookId: 26 },  // Ezekiel
    { chapterName: "Chapter 28", chapterId: 28, bookId: 40 },  // Matthew
    { chapterName: "Chapter 28", chapterId: 28, bookId: 44 },  // Acts
    /* Chapter 29 */
    { chapterName: "Chapter 29", chapterId: 29, bookId: 1 },  // Genesis
    { chapterName: "Chapter 29", chapterId: 29, bookId: 2 },  // Exodus
    { chapterName: "Chapter 29", chapterId: 29, bookId: 4 },  // Numbers
    { chapterName: "Chapter 29", chapterId: 29, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 29", chapterId: 29, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 29", chapterId: 29, bookId: 13 },  // 1 Chronicles
    { chapterName: "Chapter 29", chapterId: 29, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 29", chapterId: 29, bookId: 18 },  // Job
    { chapterName: "Chapter 29", chapterId: 29, bookId: 19 },  // Psalms
    { chapterName: "Chapter 29", chapterId: 29, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 29", chapterId: 29, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 29", chapterId: 29, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 29", chapterId: 29, bookId: 26 },  // Ezekiel
    /* Chapter 30 */
    { chapterName: "Chapter 30", chapterId: 30, bookId: 1 },  // Genesis
    { chapterName: "Chapter 30", chapterId: 30, bookId: 2 },  // Exodus
    { chapterName: "Chapter 30", chapterId: 30, bookId: 4 },  // Numbers
    { chapterName: "Chapter 30", chapterId: 30, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 30", chapterId: 30, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 30", chapterId: 30, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 30", chapterId: 30, bookId: 18 },  // Job
    { chapterName: "Chapter 30", chapterId: 30, bookId: 19 },  // Psalms
    { chapterName: "Chapter 30", chapterId: 30, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 30", chapterId: 30, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 30", chapterId: 30, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 30", chapterId: 30, bookId: 26 },  // Ezekiel
    /* Chapter 31 */
    { chapterName: "Chapter 31", chapterId: 31, bookId: 1 },  // Genesis
    { chapterName: "Chapter 31", chapterId: 31, bookId: 2 },  // Exodus
    { chapterName: "Chapter 31", chapterId: 31, bookId: 4 },  // Numbers
    { chapterName: "Chapter 31", chapterId: 31, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 31", chapterId: 31, bookId: 9 },  // 1 Samuel
    { chapterName: "Chapter 31", chapterId: 31, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 31", chapterId: 31, bookId: 18 },  // Job
    { chapterName: "Chapter 31", chapterId: 31, bookId: 19 },  // Psalms
    { chapterName: "Chapter 31", chapterId: 31, bookId: 20 },  // Proverbs
    { chapterName: "Chapter 31", chapterId: 31, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 31", chapterId: 31, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 31", chapterId: 31, bookId: 26 },  // Ezekiel
    /* Chapter 32 */
    { chapterName: "Chapter 32", chapterId: 32, bookId: 1 },  // Genesis
    { chapterName: "Chapter 32", chapterId: 32, bookId: 2 },  // Exodus
    { chapterName: "Chapter 32", chapterId: 32, bookId: 4 },  // Numbers
    { chapterName: "Chapter 32", chapterId: 32, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 32", chapterId: 32, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 32", chapterId: 32, bookId: 18 },  // Job
    { chapterName: "Chapter 32", chapterId: 32, bookId: 19 },  // Psalms
    { chapterName: "Chapter 32", chapterId: 32, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 32", chapterId: 32, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 32", chapterId: 32, bookId: 26 },  // Ezekiel
    /* Chapter 33 */
    { chapterName: "Chapter 33", chapterId: 33, bookId: 1 },  // Genesis
    { chapterName: "Chapter 33", chapterId: 33, bookId: 2 },  // Exodus
    { chapterName: "Chapter 33", chapterId: 33, bookId: 4 },  // Numbers
    { chapterName: "Chapter 33", chapterId: 33, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 33", chapterId: 33, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 33", chapterId: 33, bookId: 18 },  // Job
    { chapterName: "Chapter 33", chapterId: 33, bookId: 19 },  // Psalms
    { chapterName: "Chapter 33", chapterId: 33, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 33", chapterId: 33, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 33", chapterId: 33, bookId: 26 },  // Ezekiel
    /* Chapter 34 */
    { chapterName: "Chapter 34", chapterId: 34, bookId: 1 },  // Genesis
    { chapterName: "Chapter 34", chapterId: 34, bookId: 2 },  // Exodus
    { chapterName: "Chapter 34", chapterId: 34, bookId: 4 },  // Numbers
    { chapterName: "Chapter 34", chapterId: 34, bookId: 5 },  // Deuteronomy
    { chapterName: "Chapter 34", chapterId: 34, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 34", chapterId: 34, bookId: 18 },  // Job
    { chapterName: "Chapter 34", chapterId: 34, bookId: 19 },  // Psalms
    { chapterName: "Chapter 34", chapterId: 34, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 34", chapterId: 34, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 34", chapterId: 34, bookId: 26 },  // Ezekiel
    /* Chapter 35 */
    { chapterName: "Chapter 35", chapterId: 35, bookId: 1 },  // Genesis
    { chapterName: "Chapter 35", chapterId: 35, bookId: 2 },  // Exodus
    { chapterName: "Chapter 35", chapterId: 35, bookId: 4 },  // Numbers
    { chapterName: "Chapter 35", chapterId: 35, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 35", chapterId: 35, bookId: 18 },  // Job
    { chapterName: "Chapter 35", chapterId: 35, bookId: 19 },  // Psalms
    { chapterName: "Chapter 35", chapterId: 35, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 35", chapterId: 35, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 35", chapterId: 35, bookId: 26 },  // Ezekiel
    /* Chapter 36 */
    { chapterName: "Chapter 36", chapterId: 36, bookId: 1 },  // Genesis
    { chapterName: "Chapter 36", chapterId: 36, bookId: 2 },  // Exodus
    { chapterName: "Chapter 36", chapterId: 36, bookId: 4 },  // Numbers
    { chapterName: "Chapter 36", chapterId: 36, bookId: 14 },  // 2 Chronicles
    { chapterName: "Chapter 36", chapterId: 36, bookId: 18 },  // Job
    { chapterName: "Chapter 36", chapterId: 36, bookId: 19 },  // Psalms
    { chapterName: "Chapter 36", chapterId: 36, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 36", chapterId: 36, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 36", chapterId: 36, bookId: 26 },  // Ezekiel
    /* Chapter 37 */
    { chapterName: "Chapter 37", chapterId: 37, bookId: 1 },  // Genesis
    { chapterName: "Chapter 37", chapterId: 37, bookId: 2 },  // Exodus
    { chapterName: "Chapter 37", chapterId: 37, bookId: 18 },  // Job
    { chapterName: "Chapter 37", chapterId: 37, bookId: 19 },  // Psalms
    { chapterName: "Chapter 37", chapterId: 37, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 37", chapterId: 37, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 37", chapterId: 37, bookId: 26 },  // Ezekiel
    /* Chapter 38 */
    { chapterName: "Chapter 38", chapterId: 38, bookId: 1 },  // Genesis
    { chapterName: "Chapter 38", chapterId: 38, bookId: 2 },  // Exodus
    { chapterName: "Chapter 38", chapterId: 38, bookId: 18 },  // Job
    { chapterName: "Chapter 38", chapterId: 38, bookId: 19 },  // Psalms
    { chapterName: "Chapter 38", chapterId: 38, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 38", chapterId: 38, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 38", chapterId: 38, bookId: 26 },  // Ezekiel
    /* Chapter 39 */
    { chapterName: "Chapter 39", chapterId: 39, bookId: 1 },  // Genesis
    { chapterName: "Chapter 39", chapterId: 39, bookId: 2 },  // Exodus
    { chapterName: "Chapter 39", chapterId: 39, bookId: 18 },  // Job
    { chapterName: "Chapter 39", chapterId: 39, bookId: 19 },  // Psalms
    { chapterName: "Chapter 39", chapterId: 39, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 39", chapterId: 39, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 39", chapterId: 39, bookId: 26 },  // Ezekiel
    /* Chapter 40 */
    { chapterName: "Chapter 40", chapterId: 40, bookId: 1 },  // Genesis
    { chapterName: "Chapter 40", chapterId: 40, bookId: 2 },  // Exodus
    { chapterName: "Chapter 40", chapterId: 40, bookId: 18 },  // Job
    { chapterName: "Chapter 40", chapterId: 40, bookId: 19 },  // Psalms
    { chapterName: "Chapter 40", chapterId: 40, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 40", chapterId: 40, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 40", chapterId: 40, bookId: 26 },  // Ezekiel
    /* Chapter 41 */
    { chapterName: "Chapter 41", chapterId: 41, bookId: 1 },  // Genesis
    { chapterName: "Chapter 41", chapterId: 41, bookId: 18 },  // Job
    { chapterName: "Chapter 41", chapterId: 41, bookId: 19 },  // Psalms
    { chapterName: "Chapter 41", chapterId: 41, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 41", chapterId: 41, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 41", chapterId: 41, bookId: 26 },  // Ezekiel
    /* Chapter 42 */
    { chapterName: "Chapter 42", chapterId: 42, bookId: 1 },  // Genesis
    { chapterName: "Chapter 42", chapterId: 42, bookId: 18 },  // Job
    { chapterName: "Chapter 42", chapterId: 42, bookId: 19 },  // Psalms
    { chapterName: "Chapter 42", chapterId: 42, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 42", chapterId: 42, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 42", chapterId: 42, bookId: 26 },  // Ezekiel
    /* Chapter 43 */
    { chapterName: "Chapter 43", chapterId: 43, bookId: 1 },  // Genesis
    { chapterName: "Chapter 43", chapterId: 43, bookId: 19 },  // Psalms
    { chapterName: "Chapter 43", chapterId: 43, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 43", chapterId: 43, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 43", chapterId: 43, bookId: 26 },  // Ezekiel
    /* Chapter 44 */
    { chapterName: "Chapter 44", chapterId: 44, bookId: 1 },  // Genesis
    { chapterName: "Chapter 44", chapterId: 44, bookId: 19 },  // Psalms
    { chapterName: "Chapter 44", chapterId: 44, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 44", chapterId: 44, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 44", chapterId: 44, bookId: 26 },  // Ezekiel
    /* Chapter 45 */
    { chapterName: "Chapter 45", chapterId: 45, bookId: 1 },  // Genesis
    { chapterName: "Chapter 45", chapterId: 45, bookId: 19 },  // Psalms
    { chapterName: "Chapter 45", chapterId: 45, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 45", chapterId: 45, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 45", chapterId: 45, bookId: 26 },  // Ezekiel
    /* Chapter 46 */
    { chapterName: "Chapter 46", chapterId: 46, bookId: 1 },  // Genesis
    { chapterName: "Chapter 46", chapterId: 46, bookId: 19 },  // Psalms
    { chapterName: "Chapter 46", chapterId: 46, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 46", chapterId: 46, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 46", chapterId: 46, bookId: 26 },  // Ezekiel
    /* Chapter 47 */
    { chapterName: "Chapter 47", chapterId: 47, bookId: 1 },  // Genesis
    { chapterName: "Chapter 47", chapterId: 47, bookId: 19 },  // Psalms
    { chapterName: "Chapter 47", chapterId: 47, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 47", chapterId: 47, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 47", chapterId: 47, bookId: 26 },  // Ezekiel
    /* Chapter 48 */
    { chapterName: "Chapter 48", chapterId: 48, bookId: 1 },  // Genesis
    { chapterName: "Chapter 48", chapterId: 48, bookId: 19 },  // Psalms
    { chapterName: "Chapter 48", chapterId: 48, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 48", chapterId: 48, bookId: 24 },  // Jeremiah
    { chapterName: "Chapter 48", chapterId: 48, bookId: 26 },  // Ezekiel
    /* Chapter 49 */
    { chapterName: "Chapter 49", chapterId: 49, bookId: 1 },  // Genesis
    { chapterName: "Chapter 49", chapterId: 49, bookId: 19 },  // Psalms
    { chapterName: "Chapter 49", chapterId: 49, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 49", chapterId: 49, bookId: 24 },  // Jeremiah
    /* Chapter 50 */
    { chapterName: "Chapter 50", chapterId: 50, bookId: 1 },  // Genesis
    { chapterName: "Chapter 50", chapterId: 50, bookId: 19 },  // Psalms
    { chapterName: "Chapter 50", chapterId: 50, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 50", chapterId: 50, bookId: 24 },  // Jeremiah
    /* Chapter 51 */
    { chapterName: "Chapter 51", chapterId: 51, bookId: 19 },  // Psalms
    { chapterName: "Chapter 51", chapterId: 51, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 51", chapterId: 51, bookId: 24 },  // Jeremiah
    /* Chapter 52 */
    { chapterName: "Chapter 52", chapterId: 52, bookId: 19 },  // Psalms
    { chapterName: "Chapter 52", chapterId: 52, bookId: 23 },  // Isaiah
    { chapterName: "Chapter 52", chapterId: 52, bookId: 24 },  // Jeremiah
    /* Chapter 53 */
    { chapterName: "Chapter 53", chapterId: 53, bookId: 19 },  // Psalms
    { chapterName: "Chapter 53", chapterId: 53, bookId: 23 },  // Isaiah
    /* Chapter 54 */
    { chapterName: "Chapter 54", chapterId: 54, bookId: 19 },  // Psalms
    { chapterName: "Chapter 54", chapterId: 54, bookId: 23 },  // Isaiah
    /* Chapter 55 */
    { chapterName: "Chapter 55", chapterId: 55, bookId: 19 },  // Psalms
    { chapterName: "Chapter 55", chapterId: 55, bookId: 23 },  // Isaiah
    /* Chapter 56 */
    { chapterName: "Chapter 56", chapterId: 56, bookId: 19 },  // Psalms
    { chapterName: "Chapter 56", chapterId: 56, bookId: 23 },  // Isaiah
    /* Chapter 57 */
    { chapterName: "Chapter 57", chapterId: 57, bookId: 19 },  // Psalms
    { chapterName: "Chapter 57", chapterId: 57, bookId: 23 },  // Isaiah
    /* Chapter 58 */
    { chapterName: "Chapter 58", chapterId: 58, bookId: 19 },  // Psalms
    { chapterName: "Chapter 58", chapterId: 58, bookId: 23 },  // Isaiah
    /* Chapter 59 */
    { chapterName: "Chapter 59", chapterId: 59, bookId: 19 },  // Psalms
    { chapterName: "Chapter 59", chapterId: 59, bookId: 23 },  // Isaiah
    /* Chapter 60 */
    { chapterName: "Chapter 60", chapterId: 60, bookId: 19 },  // Psalms
    { chapterName: "Chapter 60", chapterId: 60, bookId: 23 },  // Isaiah
    /* Chapter 61 */
    { chapterName: "Chapter 61", chapterId: 61, bookId: 19 },  // Psalms
    { chapterName: "Chapter 61", chapterId: 61, bookId: 23 },  // Isaiah
    /* Chapter 62 */
    { chapterName: "Chapter 62", chapterId: 62, bookId: 19 },  // Psalms
    { chapterName: "Chapter 62", chapterId: 62, bookId: 23 },  // Isaiah
    /* Chapter 63 */
    { chapterName: "Chapter 63", chapterId: 63, bookId: 19 },  // Psalms
    { chapterName: "Chapter 63", chapterId: 63, bookId: 23 },  // Isaiah
    /* Chapter 64 */
    { chapterName: "Chapter 64", chapterId: 64, bookId: 19 },  // Psalms
    { chapterName: "Chapter 64", chapterId: 64, bookId: 23 },  // Isaiah
    /* Chapter 65 */
    { chapterName: "Chapter 65", chapterId: 65, bookId: 19 },  // Psalms
    { chapterName: "Chapter 65", chapterId: 65, bookId: 23 },  // Isaiah
    /* Chapter 66 */
    { chapterName: "Chapter 66", chapterId: 66, bookId: 19 },  // Psalms
    { chapterName: "Chapter 66", chapterId: 66, bookId: 23 },  // Isaiah
    /* Chapters 67-150 */
    { chapterName: "Chapter 67", chapterId: 67, bookId: 19 },  // Psalms
    { chapterName: "Chapter 68", chapterId: 68, bookId: 19 },  // Psalms
    { chapterName: "Chapter 69", chapterId: 69, bookId: 19 },  // Psalms
    { chapterName: "Chapter 70", chapterId: 70, bookId: 19 },  // Psalms
    { chapterName: "Chapter 71", chapterId: 71, bookId: 19 },  // Psalms
    { chapterName: "Chapter 72", chapterId: 72, bookId: 19 },  // Psalms
    { chapterName: "Chapter 73", chapterId: 73, bookId: 19 },  // Psalms
    { chapterName: "Chapter 74", chapterId: 74, bookId: 19 },  // Psalms
    { chapterName: "Chapter 75", chapterId: 75, bookId: 19 },  // Psalms
    { chapterName: "Chapter 76", chapterId: 76, bookId: 19 },  // Psalms
    { chapterName: "Chapter 77", chapterId: 77, bookId: 19 },  // Psalms
    { chapterName: "Chapter 78", chapterId: 78, bookId: 19 },  // Psalms
    { chapterName: "Chapter 79", chapterId: 79, bookId: 19 },  // Psalms
    { chapterName: "Chapter 80", chapterId: 80, bookId: 19 },  // Psalms
    { chapterName: "Chapter 81", chapterId: 81, bookId: 19 },  // Psalms
    { chapterName: "Chapter 82", chapterId: 82, bookId: 19 },  // Psalms
    { chapterName: "Chapter 83", chapterId: 83, bookId: 19 },  // Psalms
    { chapterName: "Chapter 84", chapterId: 84, bookId: 19 },  // Psalms
    { chapterName: "Chapter 85", chapterId: 85, bookId: 19 },  // Psalms
    { chapterName: "Chapter 86", chapterId: 86, bookId: 19 },  // Psalms
    { chapterName: "Chapter 87", chapterId: 87, bookId: 19 },  // Psalms
    { chapterName: "Chapter 88", chapterId: 88, bookId: 19 },  // Psalms
    { chapterName: "Chapter 89", chapterId: 89, bookId: 19 },  // Psalms
    { chapterName: "Chapter 90", chapterId: 90, bookId: 19 },  // Psalms
    { chapterName: "Chapter 91", chapterId: 91, bookId: 19 },  // Psalms
    { chapterName: "Chapter 92", chapterId: 92, bookId: 19 },  // Psalms
    { chapterName: "Chapter 93", chapterId: 93, bookId: 19 },  // Psalms
    { chapterName: "Chapter 94", chapterId: 94, bookId: 19 },  // Psalms
    { chapterName: "Chapter 95", chapterId: 95, bookId: 19 },  // Psalms
    { chapterName: "Chapter 96", chapterId: 96, bookId: 19 },  // Psalms
    { chapterName: "Chapter 97", chapterId: 97, bookId: 19 },  // Psalms
    { chapterName: "Chapter 98", chapterId: 98, bookId: 19 },  // Psalms
    { chapterName: "Chapter 99", chapterId: 99, bookId: 19 },  // Psalms
    { chapterName: "Chapter 100", chapterId: 100, bookId: 19 },  // Psalms
    { chapterName: "Chapter 101", chapterId: 101, bookId: 19 },  // Psalms
    { chapterName: "Chapter 102", chapterId: 102, bookId: 19 },  // Psalms
    { chapterName: "Chapter 103", chapterId: 103, bookId: 19 },  // Psalms
    { chapterName: "Chapter 104", chapterId: 104, bookId: 19 },  // Psalms
    { chapterName: "Chapter 105", chapterId: 105, bookId: 19 },  // Psalms
    { chapterName: "Chapter 106", chapterId: 106, bookId: 19 },  // Psalms
    { chapterName: "Chapter 107", chapterId: 107, bookId: 19 },  // Psalms
    { chapterName: "Chapter 108", chapterId: 108, bookId: 19 },  // Psalms
    { chapterName: "Chapter 109", chapterId: 109, bookId: 19 },  // Psalms
    { chapterName: "Chapter 110", chapterId: 110, bookId: 19 },  // Psalms
    { chapterName: "Chapter 111", chapterId: 111, bookId: 19 },  // Psalms
    { chapterName: "Chapter 112", chapterId: 112, bookId: 19 },  // Psalms
    { chapterName: "Chapter 113", chapterId: 113, bookId: 19 },  // Psalms
    { chapterName: "Chapter 114", chapterId: 114, bookId: 19 },  // Psalms
    { chapterName: "Chapter 115", chapterId: 115, bookId: 19 },  // Psalms
    { chapterName: "Chapter 116", chapterId: 116, bookId: 19 },  // Psalms
    { chapterName: "Chapter 117", chapterId: 117, bookId: 19 },  // Psalms
    { chapterName: "Chapter 118", chapterId: 118, bookId: 19 },  // Psalms
    { chapterName: "Chapter 119", chapterId: 119, bookId: 19 },  // Psalms
    { chapterName: "Chapter 120", chapterId: 120, bookId: 19 },  // Psalms
    { chapterName: "Chapter 121", chapterId: 121, bookId: 19 },  // Psalms
    { chapterName: "Chapter 122", chapterId: 122, bookId: 19 },  // Psalms
    { chapterName: "Chapter 123", chapterId: 123, bookId: 19 },  // Psalms
    { chapterName: "Chapter 124", chapterId: 124, bookId: 19 },  // Psalms
    { chapterName: "Chapter 125", chapterId: 125, bookId: 19 },  // Psalms
    { chapterName: "Chapter 126", chapterId: 126, bookId: 19 },  // Psalms
    { chapterName: "Chapter 127", chapterId: 127, bookId: 19 },  // Psalms
    { chapterName: "Chapter 128", chapterId: 128, bookId: 19 },  // Psalms
    { chapterName: "Chapter 129", chapterId: 129, bookId: 19 },  // Psalms
    { chapterName: "Chapter 130", chapterId: 130, bookId: 19 },  // Psalms
    { chapterName: "Chapter 131", chapterId: 131, bookId: 19 },  // Psalms
    { chapterName: "Chapter 132", chapterId: 132, bookId: 19 },  // Psalms
    { chapterName: "Chapter 133", chapterId: 133, bookId: 19 },  // Psalms
    { chapterName: "Chapter 134", chapterId: 134, bookId: 19 },  // Psalms
    { chapterName: "Chapter 135", chapterId: 135, bookId: 19 },  // Psalms
    { chapterName: "Chapter 136", chapterId: 136, bookId: 19 },  // Psalms
    { chapterName: "Chapter 137", chapterId: 137, bookId: 19 },  // Psalms
    { chapterName: "Chapter 138", chapterId: 138, bookId: 19 },  // Psalms
    { chapterName: "Chapter 139", chapterId: 139, bookId: 19 },  // Psalms
    { chapterName: "Chapter 140", chapterId: 140, bookId: 19 },  // Psalms
    { chapterName: "Chapter 141", chapterId: 141, bookId: 19 },  // Psalms
    { chapterName: "Chapter 142", chapterId: 142, bookId: 19 },  // Psalms
    { chapterName: "Chapter 143", chapterId: 143, bookId: 19 },  // Psalms
    { chapterName: "Chapter 144", chapterId: 144, bookId: 19 },  // Psalms
    { chapterName: "Chapter 145", chapterId: 145, bookId: 19 },  // Psalms
    { chapterName: "Chapter 146", chapterId: 146, bookId: 19 },  // Psalms
    { chapterName: "Chapter 147", chapterId: 147, bookId: 19 },  // Psalms
    { chapterName: "Chapter 148", chapterId: 148, bookId: 19 },  // Psalms
    { chapterName: "Chapter 149", chapterId: 149, bookId: 19 },  // Psalms
    { chapterName: "Chapter 150", chapterId: 150, bookId: 19 },  // Psalms
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
    { verseName: "Verse 1", verseId: 1, chapterId: 16 },
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
