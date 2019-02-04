var React = require('react');
var ReactDOM = require('react-dom');

//<---------------------------------------------------------------->
var Main= require('Main');
var Weather=require('Weather');
var About=require('About');
var Example=require('Example');

require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!applicationStyles');
$(document).foundation();

var {Route,Router,IndexRoute,hashHistory} = require('react-router');
//<---------------------------------------------------------------->

ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={Main}>
     <Route path="/about" component={About}/>
     <Route path="/exam" component={Example}/>
    <IndexRoute component={Weather}/>
   
  </Route>
  </Router>
    //<h1>Hello Setup</h1>
    ,
    document.getElementById('app')
  );
//<---------------------------------------------------------------->