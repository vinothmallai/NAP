import React from 'react'

import Header from './Header'
import Navigation from '../navigation/components/Navigation'
import Ribbon from '../ribbon/Ribbon'
import Footer from './Footer'
import Shortcut from '../navigation/components/Shortcut'

import LayoutSwitcher from '../layout/components/LayoutSwitcher'

import {connect} from 'react-redux';
// require('../../smartadmin/components/less/components.less');

class SingleLayout extends React.Component {
  componentWillMount() {    
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default SingleLayout
