import React from 'react';

export default class RequestTablePager extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="pagination">
          Page {this.props.currentPage} of {this.props.totalPage}

          {this.props.currentPage === 1 &&
            <i className="fa fa-chevron-left fa-fw"></i>
          }
          {this.props.currentPage > 1 &&
          <a onClick={()=>this.props.pageNavigation(this.props.currentPage-1)}>
              <i className="fa fa-chevron-left fa-fw"></i>
          </a>}

          {this.props.currentPage === this.props.totalPage &&
            <i className="fa fa-chevron-right fa-fw"></i>
          }
          {this.props.currentPage < this.props.totalPage &&
          <a onClick={()=>this.props.pageNavigation(this.props.currentPage+1)}>
              <i className="fa fa-chevron-right fa-fw"></i>
          </a>}
      </div>
    )
  }

}
