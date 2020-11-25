import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-display',
  templateUrl: './balance-display.component.html',
  styleUrls: ['./balance-display.component.css']
})
export class BalanceDisplayComponent implements OnInit {
  currentBal: string = "10000";


  constructor() { }

  ngOnInit(): void {
  }

}
