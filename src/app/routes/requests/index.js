export default {
  path: 'requests',
  component: require('../../components/common/Layout').default,

  childRoutes: [
    {
      path: 'request-list',
      getComponent(nextState, cb){
        System.import('../../components/request/request-list').then((m)=> {
          cb(null, m.default)
        })
      }
    }
    ,
    {
      path: 'asset-management',
      getComponent(nextState, cb){
        System.import('../../components/request/asset-management').then((m)=> {
          cb(null, m.default)
        })
      }
    },
    {
      path: 'off-book-trade',
      getComponent(nextState, cb){
        System.import('../../components/request/off-book-trade').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
