var React = require('react');
var {Link} = require('react-router')

//<---------------------------------------------------------------->



var Example = () => {
    return(
        <div>
            <h2 className="text-center page-title">Example!</h2>
            <p>Here are Some Of The Examples To Try Out.</p>
            <ol>
                <li><Link to='/?location=miami'>Miami, FL</Link></li>
                <li><Link to='/?location=Albany'>New York</Link></li>

            </ol>
        </div>
        
    );
}
//<---------------------------------------------------------------->
module.exports= Example;