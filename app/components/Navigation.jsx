var React = require('react');
var {Link, IndexLink}= require('react-router');

//<---------------------------------------------------------------->


var Navigation = React.createClass({
    //////////
    onSearch : function (e) {
        e.preventDefault();
        alert("not now");
        this.refs.L.value ='';
    },

    //////////
    render: function(){

    return (
        <div className="top-bar">
            <div className="top-bar-left">
            
                <ul className="menu">
                    <li className="menu-text">React Weather Application! </li>
                    <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>WeatherApp </IndexLink></li>
                    <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About </Link></li>
                    <li><Link to="/exam" activeClassName="active" activeStyle={{fontWeight:'bold'}}> EXAMPLE</Link></li>
                 </ul>
            </div>
            <div className="top-bar-right">
                <form onSubmit={this.onSearch}>
                <ul className="menu">
                <li><input type="text" placeholder="Type City" ref="L"/></li>
                 <li><input type="submit" className="button"/></li>
                </ul>
                 

                </form>
            </div>
        </div>
       

    );
 }
});

//<---------------------------------------------------------------->
module.exports=Navigation;
