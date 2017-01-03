
var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxFormConstants = require('../constants/FluxFormConstants');

// Define action methods
var FluxFormActions = {

  // Receive inital product data
  formVisible: function (data) {
    AppDispatcher.handleAction({
      actionType: FluxFormConstants.SHOW_FORM,
      data: data
    })
  },

  // Update form visibility status
  notFormVisible: function ( inVisible) {
    AppDispatcher.handleAction({
      actionType: FluxFormConstants.HIDE_FORM,
      datae: data
    })
  }

};

module.exports = FluxFormActions;
