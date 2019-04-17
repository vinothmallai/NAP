import React, {PropTypes} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accountActions from './accountActions';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      account:{}
    }

    this.login = this.login.bind(this);
    this.updateLoginData = this.updateLoginData.bind(this);
  }

  static contextTypes = {
      router: PropTypes.object
  };

  login() {
    this.props.actions.loginUser(this.state.account);
  }

  updateLoginData(event) {
      const field = event.target.name;
      const acct = this.state.account;
      acct[field] = event.target.value;

      return this.setState({account: acct});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userName !== '') {
        this.context.router.push('/home');
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row top30">
          <div className="col-md-4 col-md-offset-4">
              <div className="login-panel panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Please Sign In</h3>
                  </div>
                  <div className="panel-body">
                      <span className="text-danger">{this.props.user.error}</span>
                      <form role="form" autoComplete="off">
                          <fieldset>
                              <div className="form-group">
                                  <input className="form-control" placeholder="Enter User Id" name="userid" type="text" autoFocus onChange={this.updateLoginData}/>
                              </div>

                              <div className="form-group">
                                  <input className="form-control" placeholder="Password" name="password" type="password" onChange={this.updateLoginData}/>
                              </div>

                              <div className="form-group">
                                  {false &&
                                  <label className="checkbox-inline">
                                      <input name="remember" type="checkbox" value="Remember Me" onChange={this.updateLoginData} />Remember Me
                                  </label>
                                }
                                  <a className="pull-right">Reset Password</a><br />
                              </div>

                              <div className="form-group">
                                  <button type="button" className="btn btn-lg btn-success btn-block" onClick={this.login}>Login</button>
                              </div>

                          </fieldset>
                      </form>
                  </div>
              </div>
          </div>
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( Login );
