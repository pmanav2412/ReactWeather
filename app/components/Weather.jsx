var React = require('react');

//<---------------------------------------------------------------->
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var WeatherAPI = require('WeatherAPI');


//<---------------------------------------------------------------->

var Weather = React.createClass({


        getInitialState: function(){
            return{
               isLoading :false
            }  
        },



        handleLocation : function(Location){
            var that=this;
            this.setState({isLoading:false});
            
            WeatherAPI.gettemp(Location).then(function(temp){
                that.setState({
               
                Location:Location,
                temp: temp,
                isLoading: false
                
            });
            
            },function(errorMessage){
                alert(errorMessage);

            });
           
        },
        

        render: function(){
            var {Location,temp,isLoading} = this.state;
            
            function renderMessage() {
                if(isLoading){
                return <h3>Fetching Weather....</h3>
                }
                else if(temp && Location){
                return <WeatherMessage temp={temp} Location={Location} /> 
                }
            }

            return(
                <div>
                     <h2>I am Weather</h2>
                     <WeatherForm onLocation={this.handleLocation}/>
                     {renderMessage()}
                     {/* <WeatherMessage temp={temp} location={Location} />                      */}
                </div>
        
               
            );
        }
});

//<---------------------------------------------------------------->
module.exports= Weather;
