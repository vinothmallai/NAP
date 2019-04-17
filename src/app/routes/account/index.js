import React from 'react';
import HtmlRender from '../../components/utils/HtmlRender'

export default {
  component: require('../../components/common/SingleLayout').default,

  childRoutes: [
    {
      path: 'login',
      getComponent(nextState, cb){
        System.import('../../components/account/Login').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]
};
