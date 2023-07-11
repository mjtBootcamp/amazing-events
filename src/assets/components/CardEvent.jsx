import { Link } from "react-router-dom";

function CardEvent(props) {
  //console.log(props) Hace el use effect
  return (
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={props.event.image} alt="Card image cap" style={{ height: "200px" }} />
        <div className="card-body">
          <h5 className="card-title">{props.event.name}</h5>
          <p className="card-text">{props.event.description}</p>
        </div>
        <div className="card-body">
          <span className="card-link">Price $<span>{props.event.price}</span></span>
          <Link to={`../detail/${props.event._id}`} className="card-link">More info...</Link>
        </div>
      </div>
  );
}

export default CardEvent;