import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-display',
  templateUrl: './balance-display.component.html',
  styleUrls: ['./balance-display.component.css']
})
export class BalanceDisplayComponent implements OnInit {
  currentBal:string = "500";


  constructor() { }

  ngOnInit(): void {
  }

}
