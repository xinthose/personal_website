import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// interfaces
import { BibleBookIntf } from "./interfaces/bible/BibleBookIntf";
import { BookIntf } from "./interfaces/bible/BookIntf";
import { ChapterIntf } from "./interfaces/bible/ChapterIntf";
import { VerseIntf } from "./interfaces/bible/VerseIntf";

// rxjs
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BibleService {

  constructor(
    private http: HttpClient
  ) { }

  fetchBibleBook(file: string): Promise<BibleBookIntf> {
    return firstValueFrom(this.http.get<BibleBookIntf>(file));
  }

  fetchBooks(): Promise<Array<BookIntf>> {
    return firstValueFrom(this.http.get<Array<BookIntf>>("./assets/bible/books.json"));
  }

  fetchChapters(): Promise<Array<ChapterIntf>> {
    return firstValueFrom(this.http.get<Array<ChapterIntf>>("./assets/bible/chapters.json"));
  }

  fetchVerses(): Promise<Array<VerseIntf>> {
    return firstValueFrom(this.http.get<Array<VerseIntf>>("./assets/bible/verses.json"));
  }
}
