import { Component, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_ICONS } from "@progress/kendo-angular-icons";
import { KENDO_INDICATORS } from "@progress/kendo-angular-indicators";
import { KENDO_LAYOUT } from "@progress/kendo-angular-layout";
import { KENDO_NAVIGATION } from "@progress/kendo-angular-navigation";
import { bellIcon, menuIcon, SVGIcon } from "@progress/kendo-svg-icons";

// Services
import { BibleService } from "src/app/bible.service";

// icons
import { faBookBible, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

// rxjs
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  imports: [
    KENDO_LAYOUT,
    KENDO_INDICATORS,
    KENDO_ICONS,
    KENDO_NAVIGATION,
    KENDO_BUTTONS,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public logID: string = "AppComponent.";
  // navigation selected
  public bibleSelected: boolean = false;
  public aboutSelected: boolean = false;
  // icons
  public faBookBible = faBookBible;
  public faCircleInfo = faCircleInfo;
  // subscriptions
  private bibleSelected$!: Subscription;
  private aboutSelected$!: Subscription;

  constructor(
    public router: Router,
    private bibleService: BibleService,
  ) {
    // subscribe to navigation changes to color button
    this.bibleSelected$ = this.bibleService.bibleSelected$.subscribe((bibleSelected: boolean) => {
      this.resetSelection();
      this.bibleSelected = bibleSelected;
    });
    this.aboutSelected$ = this.bibleService.aboutSelected$.subscribe((aboutSelected: boolean) => {
      this.resetSelection();
      this.aboutSelected = aboutSelected;
    });
  }

  private resetSelection(): void {
    this.bibleSelected = false;
    this.aboutSelected = false;
  }

  ngOnDestroy() {
    this.bibleSelected$.unsubscribe();
    this.aboutSelected$.unsubscribe();
  }

}
