import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-display',
  templateUrl: './balance-display.component.html',
  styleUrls: ['./balance-display.component.css']
})
export class BalanceDisplayComponent implements OnInit {
<<<<<<< HEAD
  currentBal: string = "100000";
=======
  currentBal: string = "10000";
>>>>>>> a413fc750bd018fd09fb12ca18e1cbebdd28d36f


  constructor() { }

  ngOnInit(): void {
  }

}
