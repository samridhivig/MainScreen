import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import "./weekly-overview.scss";


export default function WeeklyOverview() {

  const chartSeries =  [{
    name: 'Mood',
    data: [1, 2, 1, 0, 2, 2, 1],
    color: 'red'
  }, {
    name: 'Fatigue',
    data: [1, 0, 1, 0, 1, 0, 2],
    color: 'orange'

  }, {
    name: 'Pain',
    data: [1, 1, 0, 0, 1, 0, 0],
    color: 'purple'

  }];

  const chartOptions =  {
    chart: {
        type: 'column',
        width: 350,
        height: 250,
        reflow: true
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun'
        ],
        crosshair: true,
        labels: {
          formatter() {
            if (this.value === 'Sun') {
              return '<span style="font-weight: 900">'+this.value+'</span>';
            } else {
              return '<span>'+this.value+'</span>';
            }
          },
          style: {
            'font-size': '11px',
          }
        }
    },
    yAxis: {
        type: 'category',
        categories: ['none', 'medium', 'high'],
        min: 0,
        gridLineWidth: 0,
        title: '',
        labels: {
          style: {
            'font-size': '11px',
            'color' : 'black'
          }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px; font-weight:bold">{point.key}</span><table>',
        pointFormatter() {
          if (this.y === 0) {
            return `<tr><td style="color:${this.series.color};padding:0">${this.series.name}: </td>` +
            `<td style="padding:0"><b>none</b></td></tr>`
          } else if (this.y === 1) {
            return `<tr><td style="color:${this.series.color};padding:0">${this.series.name}: </td>` +
            `<td style="padding:0"><b>medium</b></td></tr>`
          } else if (this.y === 2) {
            return `<tr><td style="color:${this.color};padding:0">${this.series.name}: </td>` +
            `<td style="padding:0"><b>high</b></td></tr>`
          }
        },
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
      column: {
          pointPadding: 0.1,
          borderWidth: 0
      },
    },
    series: chartSeries,
    credits: false
  };

  return (
    <div className='App'>
       <div className="App-header">
         <p>Weekly Overview</p>
       </div>
      <div className="weekly-overview-container">
        <div className='highcharts-wrapper'>
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}