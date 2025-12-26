import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare global {
  interface Window { gtag?: (...args: any[]) => void; }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private router = inject(Router);

  initPageViewTracking(measurementId: string) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        const page_location = window.location.href;
        const page_title = document.title;

        window.gtag?.('event', 'page_view', { page_title, page_location });
      });
  }
}
