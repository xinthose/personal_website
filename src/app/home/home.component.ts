import { Component, OnInit } from '@angular/core';

// Services
import { BibleService } from "src/app/bible.service";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private bibleService: BibleService,
  ) { }

  ngOnInit() {
    // set active class in navbar
    setTimeout(() => {
      this.bibleService.homeSelected$.emit(true);
    });
  }

}
