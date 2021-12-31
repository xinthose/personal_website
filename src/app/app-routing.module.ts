import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { BibleComponent }   from './bible/bible.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // Bible paths
  { path: 'bible', component: BibleComponent },
  { path: 'bible/:bookId', component: BibleComponent },
  { path: 'bible/:bookId/:chapterId', component: BibleComponent },
  { path: 'bible/:bookId/:chapterId/:verseIdStart', component: BibleComponent },
  { path: 'bible/:bookId/:chapterId/:verseIdStart/:verseIdEnd', component: BibleComponent },
  // other
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
