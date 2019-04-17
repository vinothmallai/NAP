import React from 'react'

import Header from './Header'
import Navigation from '../navigation/components/Navigation'
import Ribbon from '../ribbon/Ribbon'
import Footer from './Footer'
import Shortcut from '../navigation/components/Shortcut'

import LayoutSwitcher from '../layout/components/LayoutSwitcher'

import {connect} from 'react-redux';
// require('../../smartadmin/components/less/components.less');

class Layout extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <div id="main" role="main">
          <LayoutSwitcher />
          <Ribbon />
          {this.props.children}
        </div>

        <Footer />
        <Shortcut />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user : state.user
  }
}

export default connect(mapStateToProps)(Layout);
