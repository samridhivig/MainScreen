import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import VennModule from "highcharts/modules/venn.js"
import "./weekly-overview.scss";

VennModule(Highcharts);

export default function HighchartsVennOverview() {
  const chartSeries = [{
    type: 'venn',
    name: 'Monthly Overview',
    data: [{
        sets: ['Positive'],
        value: 13,
        name: 'Positive 13',
        label: 'Postive',
        color: 'green',
        opacity: 0.4
    }, {
        sets: ['Negative'],
        value: 14,
        name: 'Negative14',
        color: 'red',
        opacity: 0.4
    }, {
        sets: ['Pain'],
        value: 10,
        name: 'Pain 10',
        color: '#800080',
        opacity: 0.4
    }, {
        sets: ['Fatigue'],
        value: 15,
        name: 'Fatigue 15',
        color: '#d5b60a',
        opacity: 0.4
    },
    {
        sets: ['Positive', 'Pain'],
        value: 3,
        name: '3',
        color: '#404040',
        opacity: 0.4
    }, {
        sets: ['Positive', 'Fatigue'],
        value: 4,
        name: '4',
        color: '#6b9b05',
        opacity: 0.4
    }, {
        sets: ['Negative', 'Pain'],
        value: 7,
        name: '7',
        color: '#c00040',
        opacity: 0.4
    }, {
        sets: ['Negative', 'Fatigue'],
        value: 11,
        name: '11',
        color: '#ea5b05',
        opacity: 0.4
    },
    {
        sets: ['Pain', 'Fatigue'],
        value: 7,
        name: '7',
        color: '#ab5b45',
        opacity: 0.4
    },
    {
        sets: ['Positive', 'Pain', 'Fatigue'],
        value: 1,
        name: '1',
        color: '#72672e',
        opacity: 0.4
    },
    {
        sets: ['Negative', 'Pain', 'Fatigue'],
        value: 14,
        name: '14',
        color: '#c73d2e',
        opacity: 0.4
    }]
  }];

  const chartOptions = {
    chart: {
      width: 350,
      height: 250,
      reflow: true
    },
    title: {
        text: ''
    },
    series: chartSeries,
    credits: false,
    accessibility: {
      point: {
          descriptionFormatter: function (point) {
              var intersection = point.sets.join(', '),
                  name = point.name,
                  ix = point.index + 1,
                  val = point.value;
              return ix + '. Intersection: ' + intersection + '. ' +
                  (point.sets.length > 1 ? name + '. ' : '') + 'Value ' + val + '.';
          }
      }
    }
  };

  return (
    <div className='App'>
      <div className="App-header">
        <p>Highcharts Venn Monthly Overview</p>
      </div>
      <div className="weekly-overview-container">
        <div className='highcharts-wrapper'>
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
