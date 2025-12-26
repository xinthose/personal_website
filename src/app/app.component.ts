import { Component, OnDestroy, inject } from '@angular/core';
import { RouterModule, Router } from "@angular/router";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_ICONS } from "@progress/kendo-angular-icons";
import { KENDO_INDICATORS } from "@progress/kendo-angular-indicators";
import { KENDO_LAYOUT } from "@progress/kendo-angular-layout";
import { KENDO_NAVIGATION } from "@progress/kendo-angular-navigation";
import { bellIcon, menuIcon, SVGIcon } from "@progress/kendo-svg-icons";

// Services
import { BibleService } from "src/app/bible.service";
import { AnalyticsService } from './analytics.service';

// icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBookBible, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

// rxjs
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    FontAwesomeModule,
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
  public homeSelected: boolean = false;
  public bibleSelected: boolean = false;
  public aboutSelected: boolean = false;
  // icons
  public faBookBible = faBookBible;
  public faCircleInfo = faCircleInfo;
  // subscriptions
  private homeSelected$!: Subscription;
  private bibleSelected$!: Subscription;
  private aboutSelected$!: Subscription;
  // analytics
  private analytics = inject(AnalyticsService);

  constructor(
    public router: Router,
    private bibleService: BibleService,
  ) {
    // subscribe to navigation changes to color button
    this.homeSelected$ = this.bibleService.homeSelected$.subscribe((homeSelected: boolean) => {
      this.resetSelection();
      this.homeSelected = homeSelected;
    });
    this.bibleSelected$ = this.bibleService.bibleSelected$.subscribe((bibleSelected: boolean) => {
      this.resetSelection();
      this.bibleSelected = bibleSelected;
    });
    this.aboutSelected$ = this.bibleService.aboutSelected$.subscribe((aboutSelected: boolean) => {
      this.resetSelection();
      this.aboutSelected = aboutSelected;
    });

    // analytics
    this.analytics.initPageViewTracking('G-SD2BG9TGQP');
  }

  private resetSelection(): void {
    this.homeSelected = false;
    this.bibleSelected = false;
    this.aboutSelected = false;
  }

  ngOnDestroy() {
    this.homeSelected$.unsubscribe();
    this.bibleSelected$.unsubscribe();
    this.aboutSelected$.unsubscribe();
  }

}
