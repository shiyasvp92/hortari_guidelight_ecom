import React from 'react';
import './App.css';

import productTile from './components/productTile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
      alertOnCartCount: 10,
      products: [],
      cart: []
    }
  }

  componentDidMount() {
    this.loadProducts();
    this.initCart();
  }

  initCart() {
    let myCart = localStorage.getItem('cart')
    myCart = JSON.parse(myCart)

    this.setState({
      cart: myCart || []
    })
  }

  addToCart(product) {
    const newCart = this.state.cart;
    newCart.push(product);

    localStorage.setItem('cart', JSON.stringify(newCart))
    this.setState({
      cart: newCart
    })
  }

  loadProducts() {
    fetch('https://my-json-server.typicode.com/shiyasvp92/sample_products/products', {
      method: 'GET'
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        products: data
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  viewCart() {
    console.log(this.state.cart)
  }

  render() {
    const productsList = this.state.products.map((product) => {
      return productTile(this.addToCart.bind(this), product)
    })

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="right" type="button" onClick={() => {
            this.viewCart();
          }}>
            Cart ({this.state.cart.length})
          </button>
        </nav>
        <div className="container">
          <div className="row">
            <h2>Products</h2>
          </div>
          <div className="row">
            {productsList}
          </div>
          <div className="row d-flex justify-content-end">
            <button className="btn btn-primary" id="checkout-btn" onClick={() => {
              this.setState({
                firstState: 'Hurray'
              })
            }}>Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
