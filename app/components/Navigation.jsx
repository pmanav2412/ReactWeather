var React = require('react');
var {Link, IndexLink}= require('react-router');

//<---------------------------------------------------------------->


var Navigation = () => {
    return (
        <div className="top-bar">
            <div className="menu">
                <div className="top-bar-left">
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

Copy

            
            <Link to="/exam" activeClassName="active" activeStyle={{fontWeight:'bold'}}> EXAMPLE</Link>


<div >
  <div class="top-bar-left">
    <ul class="dropdown menu" data-dropdown-menu>
      <li class="menu-text">Site Title</li>
      <li>
        <a href="#">One</a>
        <ul class="menu vertical">
          <li><a href="#">One</a></li>
          <li><a href="#">Two</a></li>
          <li><a href="#">Three</a></li>
        </ul>
      </li>
      <li><a href="#">Two</a></li>
      <li><a href="#">Three</a></li>
    </ul>
  </div>
  <div class="top-bar-right">
    <ul class="menu">
      <li><input type="search" placeholder="Search"></li>
      <li><button type="button" class="button">Search</button></li>
    </ul>
  </div>
</div>