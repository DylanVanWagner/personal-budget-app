import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ExpenseService } from '../services/expense.service';
import ExpenseSchema from '../models/expense';

@Component({
  selector: 'pb-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {

  expense: ExpenseSchema = new ExpenseSchema();
  submitted = false;

  constructor(public authenticationService: AuthenticationService, private expenseService: ExpenseService) { }

  ngOnInit(): void {
  }

  addExpense(): void {
    this.expenseService.create(this.expense).then(() => {
      console.log('Added new item!');
      this.submitted = true;
      this.expense = new ExpenseSchema();
    });
  }

  removeAllExpense(): void {
    this.expenseService.deleteAll();
  }

  submit(): void {
    this.submitted = false;
  }

  logout() {
    this.authenticationService.logout();
  }
}
