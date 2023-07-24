import { Link } from "react-router-dom";
import Logo from "../img/logo.png"

function Navegation() {
  return (
    <>
      <nav className="navbar navbar-light bg-dark px-5">
        <img src={Logo} width="30" height="30" alt="Logo" className="mr-5"/>
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
            </li><li className="nav-item">
                <Link className="btn btn-outline-secondary btn-sm nav-link" to={"/register"}>Sign In</Link>
            </li><li className="nav-item">
                <Link className="btn btn-outline-secondary btn-sm nav-link" to={"/login"}>Sign up</Link>
            </li>
            <li className="nav-item">
                <Link className="btn btn-outline-secondary btn-sm nav-link" to={"/stats"}>Log Out</Link>
            </li>
        </ul>
    </nav>
      
    </> 
  );
}

export default Navegation;