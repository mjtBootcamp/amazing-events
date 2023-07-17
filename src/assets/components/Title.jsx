import { useContext } from "react";
import { useEffect } from "react";
import StateContext from "../store/StateContext"


function Title(props) {
  let {title}=useContext(StateContext)
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4" id="all">{title}</h1>
        </div>
    </div>
    </>
  );
}

export default Title;