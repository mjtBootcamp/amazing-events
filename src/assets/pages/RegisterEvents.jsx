import axios from "axios"
import { useRef } from "react"
function RegisterEvent() {
    let name = useRef()
    let category = useRef();
    let image = useRef();
    let place = useRef();
    let price = useRef();
    let assistance = useRef();
    let capacity = useRef();
    let description = useRef();
    let estimate = useRef();

    const registerEvent = () => {
        axios.defaults.withCredentials = true;
        console.log("creating Events")
        axios.post("http://localhost:3000/api/events", {
        name: name.current.value,
        category: category.current.value,
        image: image.current.value,
        place: place.current.value,
        price: price.current.value,
        assistance: assistance.current.value,
        capacity: capacity.current.value,
        description: description.current.value,
        estimate: estimate.current.value
    })
            .then(response => window.location.href = "/")
            .catch(error => console.log(error.response.data.error))
    }


    return (
        <>
            <section className="mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Event</label>
                                    <input ref={name} type="text" className="form-control" id="name" placeholder="Name" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="category">Category</label>
                                    <input ref={category} type="text" className="form-control" id="category" placeholder="Category" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="description">Description</label>
                                    <input ref={description} type="text" className="form-control" id="description" placeholder="Description" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="place">Place</label>
                                    <input ref={place} type="text" className="form-control" id="place" placeholder="Email" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="image">Image</label>
                                    <input ref={image} type="text" className="form-control" id="image" placeholder="Photo" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="price">Price</label>
                                    <input ref={price} type="number" className="form-control" id="price" placeholder="Price" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="assistance">Assistance</label>
                                    <input ref={assistance} type="number" className="form-control" id="assistance" placeholder="Assistance" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="capacity">Capacity</label>
                                    <input ref={capacity} type="number" className="form-control" id="capacity" placeholder="Capacity" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="estimate">Estimate</label>
                                    <input ref={estimate} type="number" className="form-control" id="estimate" placeholder="Estimate" />
                                </div>
                            </div>
                            <button onClick={() => registerEvent()} className="btn btn-primary">Register event</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default RegisterEvent