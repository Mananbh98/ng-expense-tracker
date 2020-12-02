import { Component, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  number :number = 0;
  currentVal = 0;
  submitted = false;
  balanceValue : number = 0 ;
  outputVal:string;

  isCurrentEmpty = '';


  submittedtransactionButton = false;

  addNewItem() {
    this.messageEvent.emit(this.message)
  }
  onSubmitTransaction() {
    this.submitted = true;
    this.currentVal = this.number;
    console.log(this.currentVal + ' is  the added transaction');

    if (this.currentVal === 0  ){
      this.balanceValue += this.currentVal;
      console.log(' The balance value is:' + this.balanceValue);
      this.outputVal= this.balanceValue.toString();
      }
    else {
      this.balanceValue = this.balanceValue + this.currentVal;
      console.log(' The balance value is:' + this.balanceValue);
      this.outputVal = this.balanceValue.toString();
      }
    }
    @Output () messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
