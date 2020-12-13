import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { BudgetService } from '../services/budget.service';
import BudgetSchema from '../models/budget';

@Component({
  selector: 'pb-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.scss']
})
export class AddBudgetComponent implements OnInit {

  budget: BudgetSchema = new BudgetSchema();
  submitted = false;

  constructor(public authenticationService: AuthenticationService, private budgetService: BudgetService) { }

  ngOnInit(): void {
  }

  addBudget(): void {
    this.budgetService.create(this.budget).then(() => {
      console.log('Added new item!');
      this.submitted = true;
      this.budget = new BudgetSchema();
    });
  }

  removeAllBudget(): void {
    this.budgetService.deleteAll();
  }

  submit(): void {
    this.submitted = false;
  }

  logout() {
    this.authenticationService.logout();
  }
}
