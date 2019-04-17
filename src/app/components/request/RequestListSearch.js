import React from 'react';

export default class RequestListSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        type:'',
        requestType:'',
        status:'',
        reference: ''
      }
    }

    this.updateFilterSelection = this.updateFilterSelection.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  clearFilter() {
    this.setState({
      filter: {
        type:'',
        requestType:'',
        status:'',
        reference: ''
      }
    }, function() {
      this.props.filterRequests(this.state.filter)
    })
  }

  typeRequests(t) {
    const filter = this.state.filter;
    filter.type = t;

    this.setState({
      filter: filter
    }, function() {
      this.props.filterRequests(this.state.filter)
    })
  }

  updateFilterSelection(e) {
    const field = e.target.name;
    const filter = this.state.filter;
    filter[field] = e.target.value;

    this.setState({
      filter : filter
    }, function() {
      this.props.filterRequests(this.state.filter)
    })

  }

  render(){
    return(
      <div className="row bottom7">
                    <div className="col-md-4">
                        <ul className="list-inline">
                            <li><a onClick={() => this.typeRequests('all')}>All Requests</a></li>
                            <li><a onClick={() => this.typeRequests('my')}>My Requests</a></li>
                            <li><a title="refresh" onClick={this.props.refresh}><i className=" fa fa-refresh"></i></a></li>
                            <li><a title="clear" onClick={this.clearFilter}><i className=" fa fa-filter"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline">
                            <li>
                                Request Type:
                                <select name="requestType" className="text-primary padding3"
                                  defaultValue=""
                                  value={this.state.filter.requestType}
                                  onChange={this.updateFilterSelection}>
                                    <option value="">All</option>
                                    {this.props.requestTypes.map( x => {
                                      return (
                                        <option key={x} value={x}>{x}</option>
                                      )
                                    })}
                                </select>

                                Status:
                                <select name="status" className="text-primary padding3" onChange={this.updateFilterSelection}
                                    defaultValue=""
                                    value={this.state.filter.status}>
                                    <option value="">All</option>
                                    {this.props.requestStatuses.map( x => {
                                      return (
                                        <option key={x} value={x}>{x}</option>
                                      )
                                    })}
                                </select>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-md-offset-1 pull-right">
                        <input type="text" name="reference"
                            className="form-control input-sm"
                            defaultValue=""
                            value={this.state.filter.reference}
                            placeholder="Search by request Reference..."
                            onChange={this.updateFilterSelection} />
                    </div>
                </div>
    )
  }

}

//temporary default props, will go to state store
RequestListSearch.defaultProps = {
  requestTypes: ['Asset Management', 'Off Book Trades', 'Hardship Withdrawal', 'Virtual Cash'],
  requestStatuses: ['Pending', 'Received', 'Accepted', 'Review', 'Error', 'Success', 'AwaitingAuthorisation']
}
