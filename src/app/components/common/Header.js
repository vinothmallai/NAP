/**
 * Created by griga on 11/17/15.
 */

import React, {PropTypes} from 'react'
import {Link} from 'react-router';

import FullScreen from './FullScreen'
import ToggleMenu from './ToggleMenu'
import SpeechButton from '../voice-control/components/SpeechButton'
import SearchMobile from './SearchMobile'

import Activities from '../activities/components/Activities'
import LanguageSelector from '../i18n/LanguageSelector'

import RecentProjects from './RecentProjects'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accountActions from '../account/accountActions';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.logout = this.logout.bind(this);
  }

  static contextTypes = {
      router: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    //console.log('header componentWillReceiveProps', nextProps);
  }

  componentWillMount() {
  }

  logout() {
    this.props.actions.logoutUser();
    this.context.router.push('/login');
  }

  render() {
    return <header id="header">
      <div id="logo-group" align="center">
                <span  id="logo">
                <h1> Microland</h1>
                </span>
      </div>
      <div className="AppHeader">
                <span>
                <h1> Network Assurance Portal</h1>
                </span>
      </div>
      <div className="pull-right"  /*pulled right: nav area*/ >


        <ToggleMenu className="btn-header pull-right"  /* collapse menu button */ />

        {/* logout button */}
        {this.props.user.userName &&
        <div id="logout" className="btn-header transparent pull-right">
                    <span> <a href="#" onClick={this.logout} title="Sign Out"
                              data-logout-msg="You can improve your security further after logging out by closing this opened browser"><i
                      className="fa fa-sign-out"/></a> </span>
        </div>
        }

        {/* input: search field */}
        {this.props.user.userName &&
        <form action="#/misc/search.html" className="header-search pull-right">
          <input id="search-fld" type="text" name="param" placeholder="Find reports and more"
                 data-autocomplete='[]' />
          <button type="submit">
            <i className="fa fa-search"/>
          </button>
          <a href="$" id="cancel-search-js" title="Cancel Search"><i className="fa fa-times"/></a>
        </form>
        }

        <FullScreen className="btn-header transparent pull-right"/>

        <div id="eprospect" className="btn-header transparent pull-right">
            <span>
                <a href="http://eprospectus.ausmaq.com.au/" target="_blank" title="eProspectus">
                    <i className="fa fa-life-ring"></i>
                </a>
            </span>
        </div>

      </div>
      {/* end pulled right: nav area */}

    </header>
  }
}

// const mapStateToProps = (state) => (state.user)

function mapStateToProps(state) {
  return {
    user: state.account
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
