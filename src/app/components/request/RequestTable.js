import React from 'react';

import RequestTableHeader from './RequestTableHeader';
import RequestItem from './RequestItem';
import RequestTablePager from './RequestTablePager';
import RequestItemModal from './RequestItemModal';

export default class RequestTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentOrderColumn: 'requestReference',
      currentOrderBy: 'asc',
      currentPage: 1,
      totalPage: 1,
      pageItems:10,
      requests:[],
      showModal:false
    }

    this.pagination = this.pagination.bind(this);
    this.setPage = this.setPage.bind(this);
    this.sorting = this.sorting.bind(this);
    this.orderRequest = this.orderRequest.bind(this);
    this.requestFilter = this.requestFilter.bind(this);
    this.viewDetail = this.viewDetail.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }//end constructor

  componentWillReceiveProps(nextProps) {
    let filter = nextProps.filter;
    let searchedResults = this.requestFilter(nextProps.requests, filter)
    let totalPage = parseInt(searchedResults.length / this.state.pageItems) + 1;

    console.log('request table fitler',filter);

    this.setState({
        totalPage:totalPage,
        requests: this.pagination(this.sorting(searchedResults, this.state.currentOrderColumn, this.state.currentOrderBy), 1)
    }, function(){
      //console.log(this.state.requests)
    })
  }

  requestFilter(requests, filter) {

      let searched = requests.filter( x=> {
        let result = true;
        if (result && filter.type === 'my') {
          console.log('userName', this.props.userName);
          result = (x.addedBy === this.props.userName)
        }
        if (result && filter.requestType !== '') {
          result = (x.requestType === filter.requestType)
        }
        if (result && filter.status !== '') {
          result = (x.status === filter.status)
        }
        if (result && filter.reference !== '') {
          result = (x.requestReference.indexOf(filter.reference) > -1)
        }
        return result;
      })

      return searched;

  }

  orderRequest(column, orderby, pageno, items){

    pageno = pageno || this.state.currentPage;
    orderby = orderby || "asc";
    items = items || this.props.requests;

    if (this.state.currentOrderColumn === column && this.state.currentPage === pageno && this.state.currentOrderBy === "desc"){
      orderby = "asc"
    } else if (this.state.currentOrderColumn === column && this.state.currentPage === pageno && this.state.currentOrderBy === "asc"){
      orderby = "desc"
    }

    this.setState({
      currentOrderBy:orderby,
      currentPage:pageno,
      currentOrderColumn: column,
      requests: this.pagination(this.sorting(items, column, orderby), pageno)
    })

  }

  sorting(items, column, orderby) {
    let objArray = Object.assign([], items);
    if (orderby == "asc") {
      objArray.sort(function(a,b) {return (a[column] > b[column]) ? 1 : ((b[column] > a[column]) ? -1 : 0);} )
    }
    if (orderby == "desc") {
      objArray.sort(function(a,b) {return (a[column] < b[column]) ? 1 : ((b[column] < a[column]) ? -1 : 0);} )
    }
    return objArray;
  }

  pagination(items, pageno) {
    //console.log(items, pageno);

    let itemlen = this.state.pageItems;
    let pagedArray = items.slice((pageno-1) * itemlen, pageno * itemlen);

    this.setState({
      currentPage:pageno
    })

    return pagedArray;
  }

  setPage(pageno) {
    this.orderRequest(this.state.currentOrderColumn, this.state.currentOrderBy, pageno);
  }

  viewDetail(item) {
    console.log('item', item);
    this.setState({
      item: item,
      showModal: true
    })
  }

  closeModal() {
    this.setState({
      item:{},
      showModal: false
    })
  }

  render(){
    return(
      <div>
      <table className="table table-striped">
          <thead>
              <tr>
                  <td>
                      <RequestTableHeader
                        headerTitle="Reference"
                        headerName="requestReference"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("requestReference", this.state.currentOrderBy)} />
                  </td>
                  <td>
                      <RequestTableHeader
                        headerTitle="Request Type"
                        headerName="requestType"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("requestType")} />
                  </td>
                  <td>
                      <RequestTableHeader
                        headerTitle="Client Code"
                        headerName="clientCode"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("clientCode")} />
                  </td>
                  <td>
                      <RequestTableHeader
                        headerTitle="AddedBy"
                        headerName="addedBy"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("addedBy")} />
                  </td>
                  <td>
                      <RequestTableHeader
                        headerTitle="DateTime Added"
                        headerName="dateTimeAdded"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("dateTimeAdded")} />
                  </td>
                  <td>
                      <RequestTableHeader
                        headerTitle="Status"
                        headerName="status"
                        orderColumn={this.state.currentOrderColumn}
                        orderBy={this.state.currentOrderBy}
                        orderRequest={()=>this.orderRequest("status")} />
                  </td>
                  <td></td>
              </tr>
          </thead>
          <tbody>
          {this.state.requests && this.state.requests.map(x => {
            return (
              <RequestItem key={x.requestId} r={x} viewDetail={this.viewDetail} />
            )
          })}
          </tbody>
          <tfoot>
              <tr>
                  <td colSpan="6">
                      <RequestTablePager
                        currentPage={this.state.currentPage}
                        totalPage={this.state.totalPage}
                        pageNavigation={this.setPage}
                        />
                  </td>
              </tr>
          </tfoot>
      </table>
      <RequestItemModal item={this.state.item} showModal={this.state.showModal} closeModal={this.closeModal} />
      </div>
    )
  }

}

RequestTable.defaultProps  = {
}
