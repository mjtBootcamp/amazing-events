function RegisterEvent() {
    return (
        <>
            <section className="mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Event</label>
                                        <input type="text" className="form-control" id="name" placeholder="name"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="category">Category</label>
                                        <input type="text" className="form-control" id="category" placeholder="name"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="description">Description</label>
                                        <input type="text" className="form-control" id="description" placeholder="Rol"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="place">Place</label>
                                        <input type="text" className="form-control" id="place" placeholder="Email"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="image">Image</label>
                                        <input type="text" className="form-control" id="image" placeholder="Email"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="price">Price</label>
                                        <input type="number" className="form-control" id="price" placeholder="Price"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="assistance">Assistance</label>
                                        <input type="number" className="form-control" id="assistance" placeholder="Assistance"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="capacity">Capacity</label>
                                        <input type="number" className="form-control" id="capacity" placeholder="Capacity"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="estimate">Estimate</label>
                                        <input type="number" className="form-control" id="estimate" placeholder="Estimate"/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Register event</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default RegisterEvent