import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
// required for Kendo UI <https://www.telerik.com/kendo-angular-ui/components/troubleshooting/general-issues#ng05105-unexpected-synthetic-property-state-found-error>
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync()   // required for Kendo UI
  ]
};
