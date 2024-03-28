import CartItem from "./CartItem";
import useSound from "use-sound";

import purchaseSoundDown from "../assets/btn_sound_purchase.wav";

function Cart({ cartItems, allItems, dispatch, totalCost }) {
  const [purchaseBtnSoundDown] = useSound(purchaseSoundDown, { volume: 0.1 });

  return (
    <div className="cart contaier">
      <div className="category-title">
        <h2>Корзина</h2>
      </div>

      <div className="cart-container container">
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
        <div className="shoppingCart-info">
          <div className="total-price">
            <span>ИТОГО</span>
            <span>₽ {totalCost}</span>
          </div>
          <div
            className="purchase-container"
            onMouseDown={purchaseBtnSoundDown}
          >
            <p>Перейти к оформлению</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
