import React, {PropTypes} from 'react';

class APIRView extends React.Component {
  constructor(props) {
    super(props);

    this.viewDetailAPIR = this.viewDetailAPIR.bind(this);
  }

  viewDetailAPIR() {    
  }

  render(){
    return(
      <div className="row bottom10">
        <div className="col-md-4">
            <input type="text" style={{marginLeft:'10px'}} className="form-control input-sm" placeholder="Enter APIR code to see the details ..." />
        </div>
        <div className="col-md-8">
            <a onClick={this.viewDetailAPIR} title="View" data-action="refresh" className="btn btn-default">
                <i className="fa fa-pencil"></i> View
            </a>
        </div>
    </div>
    )
  }

}

export default APIRView;
