import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { PieGraphComponent } from './pie-graph/pie-graph.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    LoginComponent,
    AddBudgetComponent,
    LineGraphComponent,
    PieGraphComponent,
    BarGraphComponent
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