import React from "react";
import productTile from "../components/productTile";
import { Link } from "react-router-dom";

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }

    componentDidMount() {
        this.initCart()
    }

    initCart() {
        let myCart = localStorage.getItem('cart')
        myCart = JSON.parse(myCart)

        this.setState({
            cart: myCart || []
        })
    }

    clearCart() {
        localStorage.setItem('cart', JSON.stringify([]))
        this.setState({
            cart: []
        })
    }

    removeFromCart(product) {
        const myCart = this.state.cart.slice();
        
        const removeProductIndex = myCart.findIndex((cartItem) => product.id === cartItem.id)

        myCart.splice(removeProductIndex, 1)

        localStorage.setItem('cart', JSON.stringify(myCart))

        this.setState({
            cart: myCart
        })
    }

    render() {
        const productsList = this.state.cart.map((product) => {
            return productTile(null, product, this.removeFromCart.bind(this))
        })

        const cartTotal = this.state.cart.reduce((val, item) => val + item.price, 0);

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                    <Link to="/">
                        <a className="navbar-brand" href="/">My Cart</a>

                    </Link>

                    <button className="right" type="button" onClick={() => {
                        this.clearCart();
                    }}>
                        Clear Cart
            </button>
                </nav>
                <div className="container">
                    <div className="row">
                        <h2>Cart Items</h2>
                    </div>
                    <div className="row">
                        {productsList}
                    </div>
                    <div className="row d-flex justify-content-end">
                        Total amount: &nbsp; {cartTotal}
                    </div>
                    <div className="row d-flex justify-content-end">
                        <button className="btn btn-primary" id="checkout-btn" onClick={() => {
                            alert('Successfully checked out')
                            this.clearCart()
                        }}>Checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}