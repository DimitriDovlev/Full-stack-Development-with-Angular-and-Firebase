import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewListComponent,
    ReviewDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
