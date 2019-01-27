var React = require('react');
var {Link, IndexLink}= require('react-router');

//<---------------------------------------------------------------->


var Navigation = () => {
    return (
        <div>
            <h2>This IS Navigation !</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>WeatherApp</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
            <Link to="/exam" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examination</Link>
        </div>
       

    );
}

//<---------------------------------------------------------------->
module.exports=Navigation;