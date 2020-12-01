import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { BalanceDisplayComponent } from './balance-display/balance-display.component';
import { HistoryDisplayComponent } from './history-display/history-display.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTransactionComponent,
    BalanceDisplayComponent,
    HistoryDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
