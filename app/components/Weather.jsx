var React = require('react');

//<---------------------------------------------------------------->
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var WeatherAPI = require('WeatherAPI');
var ErrorModal = require('ErrorModal');


//<---------------------------------------------------------------->

var Weather = React.createClass({


        getInitialState: function(){
            return{
               isLoading :false,
              
            }  
        },



        handleLocation : function(Location){
            var that=this;
            this.setState({isLoading:false});
            this.setState({
                errorMessage: undefined,
                isLoading:true
            });
            WeatherAPI.gettemp(Location).then(function(temp){
                that.setState({
               
                Location:Location,
                temp: temp,
                isLoading: false
                
            });
        },function(e){
            debugger;
            that.setState({
                isLoading:false,
                errorMessage : e.message,
               
            });
           
          
        });
           
        },
        

        render: function(){
            var {Location,temp,isLoading,errorMessage} = this.state;
           
            console.log(this.state.errorMessage);
            
                function renderError(){
                    if(typeof errorMessage ==='string'){
                            return(
                                <ErrorModal/>
                            )
                    }

                }

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
                     <h2 className="text-center">Get Weather</h2>
                     <WeatherForm onLocation={this.handleLocation}/>
                     {renderMessage()}
                     {renderError()}
                     {/* <WeatherMessage temp={temp} location={Location} />                      */}
                </div>
        
               
            );
        }
});

//<---------------------------------------------------------------->
module.exports= Weather;
