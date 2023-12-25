import { Component, OnInit } from '@angular/core';

// Services
import { BibleService } from "src/app/bible.service";

// Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMonument } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// other
import myPackage from "../../../package.json";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    FontAwesomeModule,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public logID: string = "AboutComponent.";
  public websiteVersion: string = "";
  // icons
  public faMonument = faMonument;
  public faGithub = faGithub;

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
