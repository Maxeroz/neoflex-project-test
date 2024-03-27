import star from "../icons/star_icon.svg";

function Product(props) {
  const { img, rate, price, title, id } = props.data;
  const dispatch = props.dispatch;

  return (
    <div className="product">
      <img src={img} className="product-img" />
      <div className="description">
        <div className="description-container">
          <p className="product-title">{title}</p>
          <p className="ranking">
            <img src={star} />
            {rate}
          </p>
        </div>
        <div className="description-container">
          <p className="price-color">{price} ₽</p>
          <button
            className="btn-purchase"
            onClick={() =>
              dispatch({
                type: "purchase",
                payload: { price: +price, id: id },
              })
            }
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
