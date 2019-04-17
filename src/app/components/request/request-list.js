import React, {PropTypes} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './requestActions'

import RequestListSearch from './RequestListSearch';
import RequestTable from './RequestTable';

import { Modal, Button } from 'react-bootstrap';

class RequestList extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      filter: {
        type:'',
        requestType:'',
        status:'',
        reference: ''
      }
    }

    this.props.actions.loadRequest();

    this.filterRequests = this.filterRequests.bind(this);
  }

  filterRequests(filter) {
    this.setState({
      filter:filter
    })
  }



  render(){
    return(
      <div id="content">
        <div className="row">
          <RequestListSearch filterRequests={this.filterRequests} refresh={() => this.props.actions.loadRequest()} />
        </div>
        <div className="row">
          <RequestTable requests={this.props.requests}
            filter={this.state.filter}
            userName={this.props.account.userName} />
        </div>
      </div>
    )
  }

}

function mapStateToProps(state, ownProps) {
  return {
    requests: state.requests,
    account: state.account
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

RequestList.defaultProps = {
  userName : ''
}

export default connect(mapStateToProps, mapDispatchToProps)( RequestList );
