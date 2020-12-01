import { AddTransactionComponent } from './../add-transaction/add-transaction.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-display',
  templateUrl: './balance-display.component.html',
  styleUrls: ['./balance-display.component.css']
})
export class BalanceDisplayComponent implements OnInit {
  currentVal: number;
  balanceVal: number ;

  constructor() { }

  ngOnInit(): void {
  }

}
