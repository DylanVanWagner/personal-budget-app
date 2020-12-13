import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { ExpenseService } from '../services/expense.service';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'pb-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {

  lineChartOptions: ChartOptions = {
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
    },
  ];

  colors = [
    {
      backgroundColor: 'black',
      fill: false,
      borderColor: "orange"
    },
    {
      backgroundColor: 'black',
      fill: false,
      borderColor: "darkgreen"
    }
  ];

  lineChartType: ChartType = 'line';
  lineChartLegend = true;
  lineChartPlugins = [];

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
