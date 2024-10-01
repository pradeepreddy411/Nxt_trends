import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import Header from '../Header'
import CartListView from '../CartListView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const showEmptyCartList = cartList.length === 0
      return (
        <>
          <Header />
          {showEmptyCartList ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <CartListView />
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
