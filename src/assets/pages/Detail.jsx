import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import StateContext from "../store/StateContext"

function Detail() {
    let params = useParams()
  let {events} = useContext(StateContext)
    
    const URL = "https://mindhub-xj03.onrender.com/api/amazing"
    
    let id = events.filter(event => event._id == params.id)
    let event = id[0];

    return (
            <div className="container">
                <div className="row">
                    <div className='col'></div>
                    <div className="col-6">
                        <div className="card" style={{width: "38rem"}}>
                            <img className="card-img-top" src={event?.image} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{event?.name}</h5>
                                <p className="card-text">{event?.description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Estimate/Assistance: {event?.assistance} {event?.estimate}</li>
                                <li className="list-group-item">Capacity: {event?.capacity}</li>
                                <li className="list-group-item">Date: {event?.date}</li>
                                <li className="list-group-item">Place: {event?.place}</li>
                            </ul>
                            <div className="card-body">
                                <h5 className="card-link">$ {event?.price}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col'></div>
                </div>
                {/* <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-6">

                        <div className="card bg-dark text-white">
                            <img className="card-img" src="" alt="Card image" style={{ height: "auto" }} />
                            <div className="card-img-overlay">
                                <h5 className="card-title"> </h5>
                                <p className="card-text"></p>
                                <p className="card-text"></p>
                                <p className="card-text"></p>
                                <p className="card-text"></p>
                                <p className="card-text"></p>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    </div>
                </div> */}
            </div>
    )
}
export default Detail