import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// interfaces
import { Book } from "./shared/bible/Book";

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

  fetchBooks(): Promise<any> {
    return this.http.get<Book>('./assets/bible/books.json').toPromise();
  }

  fetchChapters(): Promise<any> {
    return this.http.get<Array<{ chapterName: string, chapterId: number, bookId: number }>>('./assets/bible/chapters.json').toPromise();
  }

  fetchVerses(): Promise<any> {
    return this.http.get<Array<{ verseName: string, verseId: number, chapterId: number, bookId: number }>>('./assets/bible/verses.json').toPromise();
  }
}
