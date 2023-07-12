import { useRef } from "react";

function Checkbox_Group(props) {
    //console.log("props en check group", props);
    let inputRef = useRef()
    //Se puede usar un solo useRef para todos los checkboxs?????
    let inputFood = useRef()
    let inputMuseum = useRef()
    let inputConcert = useRef()
    let inputRace = useRef()
    let inputBook = useRef()
    let inputCinema = useRef()
    let inputParty = useRef()
    return (
        <>
            <div className="container">
                <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" value="Food" ref={inputFood} onChange={() => props.filtrarEventos()} />
                            </div>
                        </div>
                        <p className="mb-0 px-1 pt-1 pt-1">Food</p>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" value="Museum" ref={inputMuseum} onChange={() => props.filtrarEventos()} />
                            </div>
                        </div>
                        <p className="mb-0 px-1 pt-1 pt-1">Museum</p>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" value="Concert" ref={inputConcert} onChange={() => props.filtrarEventos()} />
                            </div>
                        </div>
                        <p className="mb-0 px-1 pt-1 pt-1">Concert</p>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" value="Race" ref={inputRace} onChange={() => props.filtrarEventos()} />
                            </div>
                        </div>
                        <p className="mb-0 px-1 pt-1 pt-1">Race</p>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" value="Book" ref={inputBook} onChange={() => props.filtrarEventos()} />
                            </div>
                        </div>
                        <p className="mb-0 px-1 pt-1 pt-1">Book</p>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" value="Cinema" ref={inputCinema} onChange={() => props.filtrarEventos()} />
                            </div>
                        </div>
                        <p className="mb-0 px-1 pt-1 pt-1">Cinema</p>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" value="Party" ref={inputParty} onChange={() => props.filtrarEventos()} />
                            </div>
                        </div>
                        <p className="mb-0 px-1 pt-1 pt-1">Party</p>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" id="textsearch" ref={inputRef} />
                        <div className="input-group-append">
                            <button onClick={() => props.filtrarEventos()} className="btn btn-outline-secondary" type="button">Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkbox_Group;