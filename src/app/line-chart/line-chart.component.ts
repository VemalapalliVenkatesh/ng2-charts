import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent {
  // lineChart
  public lineChartData: Array<any> = [
    { data: [5962, 5900, 2954, 8100, 5600, 5500, 4000], label: 'Venkatesh' },
    { data: [2800, 2875, 4000, 1900, 8600, 1700, 5000], label: 'Vinay' },
    { data: [1800, 4800, 4852, 9000, 8000, 2700, 4000], label: 'Jaskaran' }
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  // data colors
  public lineChartColors: Array<any> = [
  ];
  public lineChartLegend = true;
  // indicates the type of charts, it can be: line, bar, radar, pie, polarArea, doughnut
  private _lineChartType = 'line';
  public get lineChartType(): string {
    return this._lineChartType;
  }
  public set lineChartType(value: string) {
    this._lineChartType = value;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
