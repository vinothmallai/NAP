/**
 * Created by griga on 11/30/15.
 */

import React, {PropTypes} from 'react'
import {connect} from 'react-redux';

import WidgetGrid from '../../../components/widgets/WidgetGrid'
import JarvisWidget  from '../../../components/widgets/JarvisWidget'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'
import { getAuthData } from '../../../components/utils/fetchUtil'
import axios from 'axios'


class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {name:'',industry:'',id:'',spoc:'',from:'',to:'',projectId:'',isActive:false,items:[],isLoaded:false};
      
    var objectA={
        name:'',
        isEdit:''
    }
  
    this.updateChange = this.updateChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.idChange = this.idChange.bind(this);
    this.industryChange = this.industryChange.bind(this);
    this.spocChange = this.spocChange.bind(this);
    this.fromdateChange = this.fromdateChange.bind(this);
    this.todateChange = this.todateChange.bind(this);
    this.projectIdChange = this.projectIdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRow = this.updateRow.bind(this);
    this.getData = this.getData.bind(this);
    
  }

  updateRow(event)
  {
      editRecord=true;
  }
  updateChange(event)
  {
      this.setState({isActive: event.target.value});
  }
  nameChange(event)
  {
      this.setState({name: event.target.value});
  }

  industryChange(event)
  {
      this.setState({industry: event.target.value});
  }
  idChange(event)
  {
      this.setState({id: event.target.value});
  }

  spocChange(event)
  {
      this.setState({spoc: event.target.value});
  }

  fromdateChange(event)
  {
      this.setState({from: event.target.value});
  }

  todateChange(event)
  {
      this.setState({to: event.target.value});
  }

  projectIdChange(event)
  {
      this.setState({projectId: event.target.value});
  }

    componentDidMount()
  {
    fetch("http://35.244.39.95:1234/customerProfile/getAll")
      .then(
        res=> res.json())
      .then(json=> {
        this.setState({        
          isLoaded:true,
          items:json,
        })
      });
  }

  getData(event)
  {
    fetch("http://35.244.39.95:1234/customerProfile/getAll")
      .then(
        res=> res.json())
      .then(json=> {
        this.setState({        
          isLoaded:true,
          items:json,
        })
      });
  }

  handleSubmit(event)
  {
      event.preventDefault();
      //Post data
      var data = new FormData();
      const payload = {
        customerName: this.state.name,
        industry: this.state.industry,
        customerId: this.state.id,
        sowNo: this.state.projectId,
        sowStartDate: this.state.from,
        sowEndDate: this.state.to,
        spocEmail: this.state.spoc,
        isActive: this.state.isActive
      
      };

      const head  = new Headers();
      head.append('Content-type','application/x-www-form-urlencoded');
      const options = {method:'POST',
      body:JSON.stringify(payload)
      };
      const request = new Request('http://35.244.39.95:1234/customerProfile/create',payload);
 
      axios.post("http://35.244.39.95:1234/customerProfile/create",payload).then(d=>{
        console.log(d)
        //this.getData();
      })
      
      //get data
      var text=[];
      var table= document.getElementById("tblService");
      // var rows = document.getElementById("tblService").getElementsByTagName("tr").length;
      var i=[];
      // var count=1;
      // for(var j = table.rows.length - 1; j > 0; j--)
      // {
      //     table.deleteRow(j);
      // }
           
      
      if(this.state.isLoaded)
      {
          for (i in this.state.items)
          {            
            
            var row = table.insertRow(1);       
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            var cell8 = row.insertCell(7);
            
            var k = this.state.items[i];
            var startdate = k.sowStartDate.substr(0,10);
            var enddate = k.sowEndDate.substr(0,10);

            //console.log(startdate,enddate);
                     
            cell1.innerHTML = k.customerName;
            cell2.innerHTML = k.industry;
            cell3.innerHTML = k.customerId;
            cell4.innerHTML = k.spocEmail;
            cell5.innerHTML = startdate;
            cell6.innerHTML = enddate;
            cell7.innerHTML = k.sowNo;
            cell8.innerHTML = k.isActive; 
          
        }
      }
    
  document.getElementById("myText").value = ""; 
  document.getElementById("myIndustry").value = ""; 
    document.getElementById("myId").value = ""; 
    document.getElementById("mySPOC").value = ""; 
    document.getElementById("dtFromDate").value = ""; 
    document.getElementById("dtToDate").value = ""; 
    document.getElementById("txtProjectId").value = ""; 
    document.getElementById("selectActive").value = "";  
      
  }

  resetState()
  {
    //document.getElementById("myText").value = ""; 
    
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillMount() {
    if (this.props.user.userName == '') {
      this.context.router.push('/login');
    }
  }

  render() {
    return (
      <div id="content">
        <WidgetGrid>
          <div className="row">
            <article className="col-sm-6">
            </article>            
          </div>
        </WidgetGrid>
        
        <div>
          
          <form id="myForm" onSubmit={this.handleSubmit}>
              <div>
                <table className="Service">
                  <tr>
                      {/* <td><label>Customer Name</label></td> */}
                      <td> Customer Name <br/>
                        <input type = "text"
                      id = "myText"  value={this.state.name} onChange={this.nameChange}
                        /></td>
                      
                      <td> Industry/Vertical <br/>
                      <input type = "text"
                      id = "myIndustry" value={this.state.industry} onChange={this.industryChange}
                        /></td>
                      
                      <td> Customer Id  <br/> 
                      <input type = "text"
                      id = "myId" value={this.state.id} onChange={this.idChange}
                        /></td>
                      
                      <td> SPOC Email Id <br/>
                      <input type = "text"
                      id = "mySPOC" value={this.state.spoc} onChange={this.spocChange}
                        /></td>
                  </tr>
                  
                  <tr>
                      
                      <td> SOW From Date <br/>
                      <input type="date" id="dtFromDate" name="fromDate" value={this.state.from} onChange={this.fromdateChange}></input>
                      {/* <input type = "text"
                      id = "myFromDate" value={this.state.from} onChange={this.fromdateChange}
                        /> */}
                        </td>
                      
                      <td> SOW To Date <br/>
                      <input type="date" id="dtToDate" name="fromDate" value={this.state.to} onChange={this.todateChange}></input>
                        </td>
                      
                      <td> Project Id <br/>
                      <input type = "text"
                      id = "txtProjectId"  value={this.state.projectId} onChange={this.projectIdChange}
                        /></td>
                      
                      <td> Is Active? <br/>
                      <select id="selectActive" value={this.state.isActive} onChange={this.updateChange} >                    
                              <option value='true'>Yes</option>
                              <option value='false'>No</option>
                          </select></td>
                      
                      
                  </tr>
                  <tr>
                      <td colspan="4" align="center"><input type="submit" value="Submit" ></input></td>
                      {/* <td><button onClick={this.resetState.bind(this)}>Reset</button></td> */}
                  </tr>
              </table>
              </div>
              <div>
                <table className="ServicesGrid" id="tblService">            
                    <tr >
                        <th >Customer Name</th>
                        <th >Industry</th>
                        <th >Customer Id</th>
                        <th >SPOC Id</th>
                        <th >From</th>
                        <th >To</th>
                        <th >Project Id</th>
                        <th >IsActive</th>
                    </tr>  
                    <tr>
                        <td > </td>
                        <td > </td>
                        <td >  </td>
                        <td > </td>
                        <td > </td>
                        <td > </td>
                        <td > </td>
                        <td ></td>
                      </tr>     
                              
                </table>
            </div>
          </form>    
            
        
        </div>
    </div>
      
    )
  }

}

function mapStateToProps(state, ownProps) {
  return {
    user: state.account
  }
}

export default connect(mapStateToProps)(Home);
