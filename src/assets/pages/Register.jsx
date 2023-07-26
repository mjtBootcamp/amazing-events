import { useRef } from "react";
import axios from "axios";
function Register() {
    let user = useRef();
    let email = useRef();
    let password = useRef();
    let rol = useRef();

    const register = () => {
        axios.defaults.withCredentials = true;
        console.log("register");
        axios.post(`http://localhost:3000/api/user?user=${user.current.value}&email=${email.current.value}&password=${password.current.value}&rol=${rol.current.value}`)
            .then(response => {
                window.location.href="/"
            })//navigate
            .catch(err => console.log(err))
    }
    return (
        <>
            <section className="mt-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="user">User</label>
                                        <input ref={user} type="text" className="form-control" id="user" placeholder="User"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail">Email</label>
                                        <input ref={email} type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Password</label>
                                        <input ref={password} type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="rol">Rol</label>
                                        <input ref={rol} type="text" className="form-control" id="rol" placeholder="Rol"/>
                                    </div>
                                </div>
                                <button onClick={()=>register()} className="btn btn-primary">Sign in</button>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Register