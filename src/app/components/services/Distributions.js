import React, {PropTypes} from 'react';
import APIRView from './APIRView';
import OverviewPieChart from './OverviewPieChart';

class Distributions extends React.Component {

  render(){
    return(
      <div id="content">
        <div className="row bottom10">
          Distributions Service Performance
        </div>
        <div className="row bottom10">
          <APIRView />
        </div>
        <div className="row bottom10">
          <OverviewPieChart serviceName='Distribution' />
        </div>
      </div>
    )
  }

}

export default Distributions;
