import star from "../icons/star_icon.svg";

import useSound from "use-sound";

import btnCountAddToCart from "../assets/btn_sound_addToCart.wav";

const volume = { volume: 0.25 };

function Product(props) {
  const [btnCountAddToCartSound] = useSound(btnCountAddToCart, volume);

  const { img, rate, price, title, id, discount } = props.data;
  const dispatch = props.dispatch;

  return (
    <article className="product">
      <img src={img} className="product-img" alt={title} />
      <div className="description">
        <div className="description-container">
          <p className="product-title">{title}</p>
          <p className="ranking">
            <img src={star} alt="star-ranking" />
            {rate}
          </p>
        </div>
        <div className="description-container">
          <div className="description-price">
            <p className="price-color">{price} ₽</p>
            <p className="discount">
              {discount} {discount && "₽"}
            </p>
          </div>
          <button
            className="btn btn-purchase"
            onMouseDown={btnCountAddToCartSound}
            onClick={() =>
              dispatch({
                type: "addToCart",
                payload: { price: +price, id: id },
              })
            }
          >
            Купить
          </button>
        </div>
      </div>
    </article>
  );
}

export default Product;
