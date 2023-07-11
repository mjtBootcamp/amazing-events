function Contact() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <form>
                                <div className="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label for="message">Message</label>
                                    <textarea className="form-control" id="message" rows="3"></textarea>
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

export default Contact