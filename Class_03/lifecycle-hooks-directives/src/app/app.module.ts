import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketPanelComponent } from './components/ticket-panel/ticket-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
