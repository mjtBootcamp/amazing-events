function Register() {
    return (
        <>
            <section className="mt-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="user">User</label>
                                        <input type="text" className="form-control" id="user" placeholder="User"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail">Email</label>
                                        <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="rol">Rol</label>
                                        <input type="text" className="form-control" id="rol" placeholder="Rol"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                Check me out
                                            </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Register