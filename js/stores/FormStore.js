var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

// Define initial data points
 _formVisible = true;


// Set cart visibility
function setFormVisible(formVisible) {
  _formVisible = false; //formVisible;
}

// Extend Cart Store with EventEmitter to add eventing capabilities
var FormStore = _.extend({}, EventEmitter.prototype, {

  // Return cart visibility state
  getFormVisible: function () {
    console.log('FormStore - getFormVisible: ' + _formVisible);
    return _formVisible;
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
  console.log('Form AppDispatcher - payload: ', payload.action.actionType );
  var action = payload.action.actionType;
  var text;
  switch (action.actionType) {
    // Respond to SHOW_FORM action
    case 'SHOW_FORM':
      setFormVisible(_formVisible);
      break;
  }
  // If action was responded to, emit change event
  FormStore.emitChange();
  return true;
});

module.exports =FormStore;
