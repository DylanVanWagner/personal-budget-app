import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';

const routes: Routes = [
  {
    path: '',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LoginComponent
  },
  {
    path: 'addBudget',
    component: AddBudgetComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'addExpense',
    component: AddExpenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
