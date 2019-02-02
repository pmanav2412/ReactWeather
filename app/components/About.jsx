var React = require('react');

//<---------------------------------------------------------------->


var About = () => {
    return(
        <div>
             <h1 className="text-center">About</h1>
        <p>This is Weather Application Build In React. You Can Type any city name to get Weather information of the City. </p>
        <p>Here are some of the Tools i have used:</p>
        <a href="https://reactjs.org/">React: -  </a> This JavaScript frameWork i have Used.<br/>
        <a href="https://openweathermap.org/">My Weather Map: -  </a> I ahve used open weather map API to search weather data of the city.
        </div>
       
    );
}
//<---------------------------------------------------------------->
module.exports= About;