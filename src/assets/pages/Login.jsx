import axios from "axios"
import { useRef } from "react"
function Login() {
    let passwordRef = useRef()
    let emailRef = useRef()
    //const navigate = useNavigate()
    const login = () => {
        axios.defaults.withCredentials = true;
        console.log("login");
        axios.post(`http://localhost:3000/api/auth/login?password=${passwordRef.current.value}&email=${emailRef.current.value}`)
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
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail">Email address</label>
                                <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword">Password</label>
                                <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
                            </div>
                            <button onClick={() => login()} className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login