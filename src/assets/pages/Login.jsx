function Login() {
    return (
        <>
            <section className="mt-5 pt-5">
                <div className="container">
                    <div className="row">
                    <div className="col-sm">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck" />
                                <label className="form-check-label" htmlFor="exampleCheck">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login