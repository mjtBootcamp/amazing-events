import { Link } from "react-router-dom";
import Logo from "../img/logo.jpg"

function Navegation() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <img src={Logo} width="30" height="30" alt="Logo"/>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link className="btn btn-outline-secondary btn-sm nav-link" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
                <Link className="btn btn-outline-secondary btn-sm nav-link" to={"/upcoming"}>Upcoming Event</Link>
            </li>
            <li className="nav-item">
                <Link className="btn btn-outline-secondary btn-sm nav-link" to={"/past"}>Past Event</Link>
            </li>
            <li className="nav-item">
                <Link className="btn btn-outline-secondary btn-sm nav-link" to={"/contact"}>Contact</Link>
            </li>
            <li className="nav-item">
                <Link className="btn btn-outline-secondary btn-sm nav-link" to={"/stats"}>Stats</Link>
            </li>
        </ul>
    </nav>
      
    </> 
  );
}

export default Navegation;