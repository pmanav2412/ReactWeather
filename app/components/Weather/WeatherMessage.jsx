var React = require('react');
//<---------------------------------------------------------------->


var WeatherMessage = ({Location,temp}) => {
    
        return (
            <div>
                <h3>It's {temp} in {Location}. </h3>
            </div>
        );
}
//<---------------------------------------------------------------->

module.exports= WeatherMessage;