import React from 'react'
import {connect} from 'react-redux';

class LoginInfo extends React.Component {

  componentWillMount() {
  }

  render() {
    return (

      <div className="login-info">
			    <span>
			        <img src="assets/img/avatars/male.png" alt="me" className="online"/>
              <span>{ this.props.userName && this.props.userName }</span>
			     </span>
      </div>
    )
  }
}

const mapStateToProps = (state)=>(state.account)

export default connect(mapStateToProps)(LoginInfo)
