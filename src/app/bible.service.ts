import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BibleService {

  constructor(private http: HttpClient) { }

  public fetch(file: string) {
    return this.http.get(file);
  }
}
