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

  // Remove item from Form via Actions
  removeFromForm: function (sku) {
    FluxFormActions.removeFromForm(sku);
    FluxFormActions.updateFormVisible(false);
  },

  handleSubmit: function (e) {
   alert("The input form has been submitted..");
  },
  //cooper s - We are now buying. Place Payment code here
  buyMe: function() {
    alert('Payment Module is attached here...');
  },
  // Render Form view
  render: function () {
    var self = this, products = this.props.products;
    return (
      <div className={"flux-Form " + (this.props.visible ? 'active' : '')}>
       <p>The form goes here...</p>
       <form method="post" onSubmit={ this.handleSubmit.bind(this) }>
         <button type="submit">Lets Get on  With it!</button>
       </form>
      </div>
    );
  }

});

module.exports = FluxForm;