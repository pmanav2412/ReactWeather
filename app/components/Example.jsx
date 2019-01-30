var React = require('react');
var {Link} = require('react-router')

//<---------------------------------------------------------------->



var Example = () => {
    return(
        <div>
            <h2 class="text-center">Example!</h2>
            <p>THIS IS EXAMPLE</p>
            <ol>
                <li><Link to="/">Miami, FL</Link></li>
                <li><Link to="/">New York</Link></li>

            </ol>
        </div>
        
    );
}
//<---------------------------------------------------------------->
module.exports= Example;