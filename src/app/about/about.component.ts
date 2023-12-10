import { Component, OnInit } from '@angular/core';

// Services
import { BibleService } from "src/app/bible.service";

// other
import myPackage from "../../../package.json";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public logID: string = "AboutComponent.";
  public websiteVersion: string = "";

  constructor(
    private bibleService: BibleService,
  ) {
    this.websiteVersion = myPackage.version;
  }

  ngOnInit() {
    // set active class in navbar
    setTimeout(() => {
      this.bibleService.aboutSelected$.emit(true);
    });
  }

}
