var React = require('react');
var {Link, IndexLink}= require('react-router');

//<---------------------------------------------------------------->


var Navigation = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <div className="menu">
                    <ul>
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>WeatherApp </IndexLink></li>
                    </ul>
                    <ul>
                        <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About </Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/exam" activeClassName="active" activeStyle={{fontWeight:'bold'}}> EXAMPLE</Link></li>
                    </ul>
                
                </div>
            </div>
        </div>
       

    );
}

//<---------------------------------------------------------------->
module.exports=Navigation;
