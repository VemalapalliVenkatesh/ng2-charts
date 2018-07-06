import { Component, OnInit } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material';

export interface ChartType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {
  // Chart
  public chartData: Array<any> = [
    { data: [5962, 5900, 2954, 8100, 5600, 5500, 4000], label: 'Venkatesh' },
    { data: [2800, 2875, 4000, 1900, 8600, 1700, 5000], label: 'Vinay' },
    { data: [1800, 4800, 4852, 9000, 8000, 2700, 4000], label: 'Jaskaran' }
  ];
  // chart lables for data
  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public chartOptions: any = {
    responsive: true
  };

  chartTypes: ChartType[] = [
    { value: 'line', viewValue: 'Line' },
    { value: 'bar', viewValue: 'Bar' },
    { value: 'radar', viewValue: 'Radar' },
    { value: 'polarArea', viewValue: 'PolarArea' },
    { value: 'pie', viewValue: 'Pie' },
    { value: 'doughnut', viewValue: 'Doughnut' }
  ];
  selectedChartType: string;
  // data colors
  public lineChartColors: Array<any> = [
  ];
  public lineChartLegend = true;
  // indicates the type of charts, it can be: line, bar, radar, pie, polarArea, doughnut
  private _lineChartType = 'doughnut';
  public get chartType(): string {
    return this._lineChartType;
  }
  // We can switch to any other chart type by manipulating the value of _lineChartType
  public set chartType(value: string) {
    this._lineChartType = value;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  constructor() { }
  ngOnInit() {
    this.selectedChartType = 'line';
  }
  changeChartType(event: MatOptionSelectionChange, chart: any) {
    if (event.source.selected) {
      this._lineChartType = chart.value;
    }
  }

}
