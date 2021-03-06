import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// General
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';

// Forms
import { FormsModule } from '@angular/forms';

// Progress
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';

// Bootstrap
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

// Components
import { HomeComponent } from './home/home.component';
import { BibleComponent } from './bible/bible.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GridModule } from '@progress/kendo-angular-grid';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BibleComponent,
        AboutComponent,
        PageNotFoundComponent,
    ],
    imports: [
        // General
        HttpClientModule,
        MDBBootstrapModulesPro.forRoot(),
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,

        // Progress
        ButtonsModule,
        DropDownsModule,
        GridModule,
        InputsModule,
    ],
    providers: [
        MDBSpinningPreloader,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
