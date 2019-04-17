window.jQuery = window.$ =  require("jquery");
window.moment = require('moment');
window._ = require('lodash');

//import 'core-js/es6/promise'

import 'jquery-ui-npm/jquery-ui.min.js'
import 'imports-loader?jQuery=jquery!jquery-color/jquery.color.js'

//work with IE based
import 'babel-polyfill'

//poly fill for IE of Fetch API
require('es6-promise').polyfill();
require('isomorphic-fetch');

require("bootstrap");

require.ensure([], ()=>{
  require('./app');
})
