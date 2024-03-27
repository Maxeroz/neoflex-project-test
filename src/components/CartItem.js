import Delete from "../icons/delete_icon.svg";

function CartItem(props) {
  const { img, rate, price, title, id } = props.data;
  const cartItems = props.cartItems;
  const dispatch = props.dispatch;

  return (
    <div className="goods-item-frame">
      <div className="goods">
        <div className="cart-image-container">
          <img src={img} className="cart-image" />
          <div className="btns-container-cart">
            <div
              className="btn-round"
              onClick={() =>
                dispatch({
                  type: "removeFromCart",
                  payload: { price: +price, id: id },
                })
              }
            >
              <p className="minus-btn">_</p>
            </div>
            <div className="amount-items-cart">{cartItems[id]}</div>
            <div
              className="btn-round"
              onClick={() =>
                dispatch({
                  type: "addToCart",
                  payload: { price: +price, id: id },
                })
              }
            >
              +
            </div>
          </div>
        </div>
        <div className="titles-image-container">
          <p className="product-title">{title}</p>
          <p className="price-cart-gray">{price} ₽</p>
        </div>
        <div className="btns-right-container">
          <img
            src={Delete}
            className="delete-cart-icon"
            onClick={() =>
              dispatch({
                type: "deleteItemCompletely",
                payload: { price: +price, id: id },
              })
            }
          />
          <p className="price-cart-black">{price} ₽</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
