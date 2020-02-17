import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    console.log('successfully mount')
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="right" type="button">
            Cart
        </button>
        </nav>
        <div className="container">
          <div className="row">
            <h2>Products</h2>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-3 col-sm-12">
              <div className="card mb-3" style={{"maxWidth": "540px", "color": "red"}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="https://via.placeholder.com/150" className="card-img" width="100%" height="100%" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title" id="#first-title">Product title</h5>
                      <div>
                        <button className="btn btn-primary add-btn">add</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-end">
            <button className="btn btn-primary" id="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
