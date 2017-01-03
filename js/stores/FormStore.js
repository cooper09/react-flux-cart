var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

// Define initial data points
 _formVisible = false;


// Set cart visibility
function setFormVisible(formVisible) {
  console.log("Set the form visible: " + formVisible );
  _formVisible = true; //formVisible;
}

// Extend Cart Store with EventEmitter to add eventing capabilities
var FormStore = _.extend({}, EventEmitter.prototype, {

  // Return cart visibility state
  getFormVisible: function () {
    console.log('FormStore - getFormVisible: ' + _formVisible);
    return _formVisible;
//   return false;
  },
  // Emit Change event
  emitChange: function () {
    this.emit('change');
  },
  // Add change listener
  addChangeListener: function (callback) {
    this.on('change', callback);
  },
  // Remove change listener
  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }
});

// Register callback with AppDispatcher
AppDispatcher.register(function (payload) {
  console.log('FormStore AppDispatcher - payload: ', payload.action.actionType );
  var action = payload.action.actionType;
  var text;
  switch (payload.action.actionType) {
    // Respond to SHOW_FORM action
    case 'SHOW_FORM':
      console.log('FormStore AppDispatcher - Case SHOW_FORM: ' + _formVisible );
      setFormVisible(_formVisible);
      break;
  }
  // If action was responded to, emit change event
  FormStore.emitChange();
  return true;
});

module.exports =FormStore;
