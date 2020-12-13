import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { ExpenseService } from '../services/expense.service';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'pb-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{ticks: {
      beginAtZero: true
    }}] },
  };

  labels = [];

  chartData = [
    {
    label: 'Budget',
    data: []
    },
    {
      label: 'Expense',
      data: []
    }
  ];

  colors = [
    {
      backgroundColor: 'rgb(125,239,255)'
    },
    {
      backgroundColor: 'rgb(199,71,71)'
    }
  ];

  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

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
