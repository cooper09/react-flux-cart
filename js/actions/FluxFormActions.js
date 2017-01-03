
var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxFormConstants = require('../constants/FluxFormConstants');

// Define action methods
var FluxFormActions = {

  // Receive inital product data
  formVisible: function (data) {
    console.log('FluxFormActions - formVisible');
    AppDispatcher.handleAction({
      actionType: FluxFormConstants.SHOW_FORM,
      data: data
    })
  },

  // Update form visibility status
  notFormVisible: function ( inVisible) {
    console.log('FluxFormActions - notFormVisible');
    AppDispatcher.handleAction({
      actionType: FluxFormConstants.HIDE_FORM,
      data: inVisible
    })
  }

};

module.exports = FluxFormActions;
