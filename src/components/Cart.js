import CartItem from "./CartItem";

function Cart({ cartItems, allItems, dispatch }) {
  return (
    <div className="cart contaier">
      <div className="category-title">
        <h2>Корзина</h2>
      </div>
      <div className="cart-container">
        <div className="cartItems container">
          {allItems.map((product) => {
            if (cartItems[product.id] !== 0) {
              return (
                <CartItem
                  data={product}
                  key={product.id}
                  cartItems={cartItems}
                  dispatch={dispatch}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
