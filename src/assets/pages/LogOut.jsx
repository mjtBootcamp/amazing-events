const LogOut = () => {
    const logOut = () =>{

    }
    return (
        <>
            <section className="mt-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            {/* <div className="form-group">
                                <h2>LogOut</h2>
                            </div> */}
                            <button onClick={() => logOut()} className="btn btn-primary">LogOut</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LogOut