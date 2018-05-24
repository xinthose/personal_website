import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Kendo
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

// Bootstrap
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

// Components
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BibleComponent } from './bible/bible.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BibleComponent,
    ],
    imports: [
        // General
        MDBBootstrapModulesPro.forRoot(),
        BrowserModule.withServerTransition({ appId: 'MyPersonalWebsite' }),
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,

        // Kendo
        ButtonsModule,
        DropDownsModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [
        MDBSpinningPreloader,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
