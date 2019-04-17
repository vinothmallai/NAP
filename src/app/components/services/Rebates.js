import React, {PropTypes} from 'react';
import APIRView from './APIRView';
import OverviewPieChart from './OverviewPieChart';

class Rebates extends React.Component {

  render(){
    return(
      <div id="content">
        <div className="row bottom10">
          Rebates Service Performance
        </div>
        <div className="row bottom10">
          <APIRView />
        </div>
        <div className="row bottom10">
          <OverviewPieChart serviceName='Rebate'/>
        </div>
      </div>
    )
  }

}

export default Rebates;
