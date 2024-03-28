import Delete from "../icons/delete_icon.svg";
import vector from "../icons/vector_minus.svg";

import useSound from "use-sound";

import deleteSound from "../assets/btn_sound_delete.wav";
import btnCount from "../assets/btn_sound_counter.wav";

const volume = { volume: 0.25 };

function CartItem(props) {
  const [deleteBtnSound] = useSound(deleteSound, volume);
  const [btnCountSound] = useSound(btnCount, volume);

  const { img, price, title, id } = props.data;
  const cartItems = props.cartItems;
  const dispatch = props.dispatch;

  return (
    <div className="goods-item-frame">
      <>
        <div className="cart-image-container">
          <img src={img} className="cart-image" alt={title} />
          <div className="btns-container-cart">
            <button
              className="btn-round"
              onMouseDown={cartItems[id] === 1 ? deleteBtnSound : btnCountSound}
              onClick={() =>
                dispatch({
                  type: "removeFromCart",
                  payload: { price: +price, id: id },
                })
              }
            >
              <img src={vector} alt="minus-btn" />
            </button>
            <div className="amount-items-cart">{cartItems[id]}</div>
            <button
              className="btn-round"
              onMouseDown={btnCountSound}
              onClick={() =>
                dispatch({
                  type: "addToCart",
                  payload: { price: +price, id: id },
                })
              }
            >
              +
            </button>
          </div>
        </div>
        <div className="titles-image-container">
          <p className="product-title">{title}</p>
          <p className="price-cart-gray">{price} ₽</p>
        </div>
        <div className="btns-right-container">
          <button className="btn">
            <img
              src={Delete}
              className="delete-cart-icon"
              onClick={() =>
                dispatch({
                  type: "deleteItemCompletely",
                  payload: { price: +price, id: id },
                })
              }
              alt="delete-btn"
              onMouseDown={deleteBtnSound}
            />
          </button>
          <p className="price-cart-black">{price} ₽</p>
        </div>
      </>
    </div>
  );
}

export default CartItem;
