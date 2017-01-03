var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/FluxCartConstants');

// Define action methods
var FluxFormActions = {
  // Update cart visibility status
  formVisible: function(data) {
  console.log("FormActions - formVisible: "+ data );

  AppDispatcher.handleViewAction({
      actionType:AppConstants.SHOW_FORM,
      data: data
    }) 
  }//end FluxFormActions

};

module.exports = FluxFormActions;
