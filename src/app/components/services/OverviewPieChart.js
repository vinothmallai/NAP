import React, {PropTypes} from 'react';
import ReactHighcharts from 'react-highcharts';


import { getServiceOverview } from './DistributionApi';

const showDistributionOverviewPieChart = (serviceName, datasource) => {

    const calendarMonth = moment().format('MMMM YYYY');
    return {
          chart: {
              backgroundColor: null,
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          title: {
              text: serviceName + ' Processing Overview ' + calendarMonth,
              style: {
                  color: '#000',
                  fontWeight: 'bold'
              }
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.y}</b>',
              percentageDecimals: 0
          },
          plotOptions: {
              pie: {
                  //size: '60%',
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      //distance: 5,
                      enabled: true,
                      format: '{point.name}'
                  },
                  showInLegend: true
              }
          },
          credits: {
              enabled: false
          },
          legend: {
              labelFormat: '{name}: <b>{y}</b>',
              itemStyle: {
                  color: '#000'
              },
              itemHoverStyle: {
                  color: '#FFF'
              },
              itemHiddenStyle: {
                  color: '#333'
              }
          },
          series: [{
              type: 'pie',
              name: 'Test',
              //data: [{"name":"Total overdue","y":0},{"name":"Total completed","y":0},{"name":"Total outstanding to be received","y":0}],
              data: datasource,
              events: {
                  click: function (event) { }
              },
          }]
    }
};


class OverviewPieChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      datasource: []
    }
  }

  componentDidMount() {
    //let chart = this.refs.chart.getChart();
    //chart.series[0].data = this.state.datasource;
    const serviceName = this.props.serviceName;
    getServiceOverview(serviceName).then(data => {
        console.log('componentDidMount', data);
        this.setState({
          datasource: data
        })
    });

  }

  render(){
    return(
      <div className="col-md-4">
        <ReactHighcharts config={showDistributionOverviewPieChart(this.props.serviceName, this.state.datasource)} ref="chart"></ReactHighcharts>
      </div>
    )
  }

}

export default OverviewPieChart;
