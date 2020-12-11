import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pb-pie-graph',
  templateUrl: './pie-graph.component.html',
  styleUrls: ['./pie-graph.component.scss']
})
export class PieGraphComponent implements OnInit {

  public dataSource = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          'yellow',
          'orange',
          'magenta',
          'red',
          'green',
          'blue',
          'purple',
        ],
      },
    ],
    labels: [],
    };

    constructor() {}

    ngOnInit(): void {
      // this.http.get('http://localhost:3000/budget').subscribe((res: any) => {
      //   for (var i = 0; i < res.myBudget.length; i++) {
      //     this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
      //     this.dataSource.labels[i] = res.myBudget[i].title;
      //     this.createChart();
      //   }
      // });
    }

    createChart() {
      var canvas = <HTMLCanvasElement>document.getElementById('pieChart');
      const ctx = canvas.getContext('2d');
      var pieGraph = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource,
      });
    }
  }
