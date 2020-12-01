import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  number = '';
  currentVal = 0;
  submitted = false;

  isCurrentEmpty = '';


  submittedtransactionButton = false;

  onSubmitTransaction() {
    this.submitted = true;
    this.currentVal = parseInt(this.number);
    console.log(this.currentVal + ' is  the added transaction');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
