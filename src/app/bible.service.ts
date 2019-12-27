import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

// Progress
import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BibleService {

  constructor(private http: HttpClient) { }

  public fetch(file: string) {
    return this.http.get(file);
  }
  public fetchBooks() {
    return this.http.get<Array<any>>('./assets/bible/books.json');
  }
  public fetchChapters() {
    return this.http.get<Array<{ chapterName: string, chapterId: number, bookId: number }>>('./assets/bible/chapters.json');
  }
  public fetchVerses() {
    return this.http.get<Array<{ verseName: string, verseId: number, chapterId: number, bookId: number }>>('./assets/bible/verses.json');
  }
}

export abstract class BibleServiceGrid extends BehaviorSubject<GridDataResult> {
  public loading: boolean;

  private BASE_URL = './assets/bible/verses.json';

  constructor(
    private http: HttpClient,
    protected tableName: string
  ) {
    super(null);
  }

  public query(state: any): void {
    this.fetch(this.tableName, state)
      .subscribe(x => super.next(x));
  }

  protected fetch(tableName: string, state: any): Observable<GridDataResult> {
    this.loading = true;

    return this.http
      .get(this.BASE_URL)
      .pipe(
        map(response => (<GridDataResult>{
          data: response['value'],
          total: parseInt(response['@odata.count'], 10)
        })),
        tap(() => this.loading = false)
      );
  }
}

@Injectable({
  providedIn: 'root'
})
export class BibleServiceGrid1 extends BibleServiceGrid {
  constructor(http: HttpClient) { super(http, 'Categories'); }

  queryAll(st?: any): Observable<GridDataResult> {
    const state = Object.assign({}, st);
    delete state.skip;
    delete state.take;

    return this.fetch(this.tableName, state);
  }
}