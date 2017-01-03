var React = require('react');
var FluxFormActions = require('../actions/FluxFormActions');

// Flux Form view
var FluxForm = React.createClass({

  // Hide Form via Actions
  closeForm: function () {
    FluxFormActions.updateFormVisible(false);
  },

  // Show Form via Actions
  openForm: function () {
    FluxFormActions.updateFormVisible(true);
  },
  handleSubmit: function (e) {
   alert("The input form has been submitted..");
  }, 
  //cooper s - We are now buying. Place Payment code here
 /* buyMe: function() {
    alert('Payment Module is attached here...');
  }, */
  // Render Form view
  render: function () {
    console.log("FluxForm - visible: " + this.props.visible );
  if (!this.props.visible){
      return false
    } 

    var self = this, products = this.props.products;
    return (
      <div className={"flux-form " + (this.props.visible ? 'active' : '')}>
       <p>What is your Info:</p>
       <form method="post" onSubmit={ this.handleSubmit.bind(this) }>
         First Name: <input type='text' id='fname'></input><br/>
         Last Name: <input type='text' id='lname'></input><br/>
         Address1: <input type='text' id='addr1'></input><br/>
         Address2: <input type='text' id='addr2'></input><br/>
         City: <input type='text' id='city'></input><br/>
         State: <input type='text' id='state'></input><br/>
         Zip: <input type='text' id='zip'></input><br/><br/>
         <input type="text" size="20" data-stripe="number" placeholder="card number"/>
         <input type="text" size="4" data-stripe="cvc" placeholder="cvc" />
         <input type="text" size="2" data-stripe="exp-month" placeholder="exp-month" />
         <input type="text" size="4" data-stripe="exp-year" placeholder="exp-year" />
         <button type="submit">Lets Get on  With it!</button>
       </form>
      </div>
    );
  }

});

module.exports = FluxForm;