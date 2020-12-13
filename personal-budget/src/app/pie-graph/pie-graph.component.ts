import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { ExpenseService } from '../services/expense.service';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'pb-pie-graph',
  templateUrl: './pie-graph.component.html',
  styleUrls: ['./pie-graph.component.scss']
})
export class PieGraphComponent implements OnInit {

  pieChartOptions: ChartOptions = {
    responsive: true
  }

  labels = [];

  chartData = [
    {
    label: 'Budget',
    data: []
    },
    {
      label: 'Expense',
      data: []
    },
  ];

  colors = [
    {
      backgroundColor: ['black', 'Red', 'Green', 'blue', 'purple', 'yellow', 'lightblue', 'grey', 'white'],
      borderColor: "white"
    },
    {
      backgroundColor: ['black', 'Red', 'Green', 'blue', 'purple', 'yellow', 'lightblue', 'grey', 'white'],
      borderColor: "white"
    }
  ];

  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];

  onChartClick(event){
    console.log(event);
  }

  constructor(private budgetService: BudgetService, private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.budgetService.getBudget().valueChanges()
    .subscribe((res:any)=>{
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        this.chartData[0].data[i] = res[i].budget;
        this.labels[i] = res[i].title;
    }
  });
  this.expenseService.getAll().valueChanges()
  .subscribe((res:any)=>{
    console.log(res);
    for (let i = 0; i < res.length; i++) {
      this.chartData[1].data[i] = res[i].expense;
      this.labels[i] = res[i].title;
    }
  });
}
}
