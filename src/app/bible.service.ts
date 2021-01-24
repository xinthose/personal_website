import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// interfaces
import { Book } from "./shared/bible/Book";
import { Chapter } from "./shared/bible/Chapter";
import { Verse } from "./shared/bible/Verse";

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

  fetchBooks(): Promise<Array<Book>> {
    return this.http.get<Array<Book>>('./assets/bible/books.json').toPromise();
  }

  fetchChapters(): Promise<Array<Chapter>> {
    return this.http.get<Array<Chapter>>('./assets/bible/chapters.json').toPromise();
  }

  fetchVerses(): Promise<Array<Verse>> {
    return this.http.get<Array<Verse>>('./assets/bible/verses.json').toPromise();
  }
}
