import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// interfaces
import { BookIntf } from "./interfaces/bible/BookIntf";
import { ChapterIntf } from "./interfaces/bible/ChapterIntf";
import { VerseIntf } from "./interfaces/bible/VerseIntf";

@Injectable({
  providedIn: 'root'
})
export class BibleService {

  constructor(
    private http: HttpClient
  ) { }

  fetch(file: string): Promise<any> {
    return this.http.get(file).toPromise();
  }

  fetchBooks(): Promise<Array<BookIntf>> {
    return this.http.get<Array<BookIntf>>('./assets/bible/books.json').toPromise();
  }

  fetchChapters(): Promise<Array<ChapterIntf>> {
    return this.http.get<Array<ChapterIntf>>('./assets/bible/chapters.json').toPromise();
  }

  fetchVerses(): Promise<Array<VerseIntf>> {
    return this.http.get<Array<VerseIntf>>('./assets/bible/verses.json').toPromise();
  }
}
