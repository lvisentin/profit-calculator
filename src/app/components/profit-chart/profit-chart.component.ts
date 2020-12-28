import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profit-chart',
  templateUrl: './profit-chart.component.html',
  styleUrls: ['./profit-chart.component.css']
})
export class ProfitChartComponent implements OnInit {

  @Input('contribution') public contribution;
  @Input('yield') public yield;
  @Input('capital') public capital;
  @Input('months') public months;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = [];
    
  public barChartType = 'line';
  
  
  public barChartLegend = true;
  
  
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('contribution', this.contribution)
    console.log('yield', this.yield)
    console.log('capital', this.capital)
    console.log('months', this.months)
  }

  generateYears() {
    this.barChartLabels= Array.from(Array(this.months / 12 + 1).keys()).slice(1)
  }
}
