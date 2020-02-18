import React from 'react';
import './App.css';

import productTile from './components/productTile';

const products = [
  {
    "id": 1,
    "title": "Oneplus 7",
    "price": "Rs 30000",
    "image": "https://via.placeholder.com/150"
  },
  {
    "id": 2,
    "title": "Gopro Hero",
    "price": "Rs 23000",
    "image": "https://via.placeholder.com/150"
  },
  {
    "id": 3,
    "title": "MacBook",
    "price": "Rs 130000",
    "image": "https://via.placeholder.com/150"
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
      alertOnCartCount: 10,
      products: []
    }
  }

  addCount() {
    const newCount = this.state.cartCount + 1;
    this.setState({
      cartCount: newCount
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="right" type="button">
            Cart ({this.state.cartCount})
        </button>
        </nav>
        <div className="container">
          <div className="row">
            <h2>Products</h2>
          </div>
          <div className="row">
            {productTile(this.addCount.bind(this))}
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
