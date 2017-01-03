var React = require('react');
var CartStore = require('../stores/CartStore');
var ProductStore = require('../stores/ProductStore');
//cooper s - adding working input form
var FormStore = require('../stores/FormStore');
var FluxForm = require('./FluxForm.react.js');

var FluxProduct = require('./FluxProduct.react.js');
var FluxCart = require('./FluxCart.react.js');

// Method to retrieve state from Stores
function getCartState() {
  return {
    product: ProductStore.getProduct(),
    selectedProduct: ProductStore.getSelected(),
    cartItems: CartStore.getCartItems(),
    cartCount: CartStore.getCartCount(),
    cartTotal: CartStore.getCartTotal(),
    cartVisible: CartStore.getCartVisible(),
    formIsVisible: FormStore.getFormVisible()
  };
}

// Define main Controller View
var FluxCartApp = React.createClass({

  // Get initial state from stores
  getInitialState: function () {
    return getCartState();
  },

  // Add change listeners to stores
  componentDidMount: function () {
    ProductStore.addChangeListener(this._onChange);
    CartStore.addChangeListener(this._onChange);
    FormStore.addChangeListener(this._onChange);
  },

  // Remove change listeners from stores
  componentWillUnmount: function () {
    ProductStore.removeChangeListener(this._onChange);
    CartStore.removeChangeListener(this._onChange);
  },

  appear: function(visible) {
    this.setState({formIsVisible: visible}); 
  },
  // Render our child components, passing state via props
  render: function () {
    return (
      <div className="flux-cart-app">
        <FluxForm visible={this.state.formIsVisible} className="input-form"/>
        <FluxCart products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal}
                  visible={this.state.cartVisible}/>
        <FluxProduct product={this.state.product} cartitems={this.state.cartItems}
                     selected={this.state.selectedProduct}/>
      </div>
    );
  },

  // Method to setState based upon Store changes
  _onChange: function () {
    this.setState(getCartState());
  }

});

module.exports = FluxCartApp;
