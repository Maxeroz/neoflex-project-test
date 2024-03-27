// import Ellipse from "../icons/Ellipse.svg";

function Icon({ imageUrl, styling, amount }) {
  return (
    <div className="btn btn-icon">
      <img className={styling} src={imageUrl}></img>

      <div className="ellipse_icon">
        <p className="badge">{amount}</p>
      </div>
    </div>
  );
}

export default Icon;
