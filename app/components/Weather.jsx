var React = require('react');

//<---------------------------------------------------------------->
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var WeatherAPI = require('WeatherAPI');
var ErrorModal = require('ErrorModal');


//<---------------------------------------------------------------->

var Weather = React.createClass({

    ////////
        getInitialState: function(){
            return{
               isLoading :false,
              
            }  
        },


    ////////
        handleLocation : function(location){
            var that=this;

            this.setState({
                errorMessage: undefined,
                isLoading:true,
                location:undefined,
                temp:undefined
            });


        WeatherAPI.gettemp(location).then(function(temp){
            that.setState({
            location:location,
            temp: temp,
            isLoading: false
                
            });
        },function(e){
           
            that.setState({
                isLoading:false,
                errorMessage : e.message,
               
            });
        });
        },


    /////////
    componentDidMount: function(){
    
        var location = this.props.location.query.location;
     
        if(location && location.length > 0){
            this.handleLocation(location);
            window.location.hash='#/';
        }
       },


    /////////
    componentWillReceiveProps: function(newProps){
        var location = newProps.location.query.location;
        
        if(location && location.length > 0){
            this.handleLocation(location);
            window.location.hash='#/';
        }
    },

    /////////
        render: function(){
            var {location,temp,isLoading,errorMessage} = this.state;
           
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
                else if(temp && location){
                return <WeatherMessage temp={temp} Location={location} /> 
                }
            }

            

            return(
                <div>
                     <h2 className="text-center page-title">Get Weather</h2>
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
