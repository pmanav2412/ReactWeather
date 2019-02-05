var React = require('react');
var ReactDom = require('react-dom');
var ReactDomServer = require('react-dom/server');



var ErrorModal = React.createClass({

    getDefaultProps: function(){
        return{
            title: 'Error',
            message: 'City not Found'
        };
    },

    // propTypes: {
    //     title: React.PropTypes.string,
    //     message: React.propTypes.string.isRequired
    // },



/////////
    componentDidMount: function () {
        var {title,message} = this.props;
        var modelMarkup =(
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
               <h4>{title}</h4>
               <p>{message}</p>
               <p>
                   <button className="button hollow" data-close="">
                   okey
                   </button>
               </p>
               </div>
        );


     var $Modal = $(ReactDomServer.renderToString(modelMarkup));
        $(ReactDom.findDOMNode(this)).html($Modal);

      var modal = new Foundation.Reveal($('#error-modal'));
      modal.open();
    },


/////////
    render: function(){
            
        return (
            <div>

            </div>
               
            );
        },

});


module.exports = ErrorModal;

