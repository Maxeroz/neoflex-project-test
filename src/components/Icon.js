import Ellipse from "../icons/Ellipse.svg";

function Icon({ imageUrl, styling, amount }) {
  return (
    <div className="btn btn-icon">
      <img className={styling} src={imageUrl}></img>
      <img className="ellipse_icon" src={Ellipse}></img>
      <p className="badge">{amount}</p>
    </div>
  );
}

export default Icon;
