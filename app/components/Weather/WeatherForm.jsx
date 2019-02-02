var React = require('react');
//<---------------------------------------------------------------->

var WeatherForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();
         var Location = this.refs.Location.value;
        if(Location.length>0){
            this.refs.Location.value='';
            
        }
        this.props.onLocation(Location);
    },


    render : function(){
        return (
            <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="Location"/>
            <input type="submit" className="button expanded hollow"/>
            </form>
        );
    }
});
//<---------------------------------------------------------------->

module.exports= WeatherForm;