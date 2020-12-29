import React, { useState } from "react";

const Contact = () => {

    const [data, setdata] = useState({
        Fullname: "",
        phone: "",
        email: "",
        msg: ""
    })
    const inputs = (event) => {
        const { value, name } = event.target;
        setdata((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const subfrm = (e) => {
        e.preventDefault()
        alert(`Name: ${data.Fullname}  Email: ${data.email}`)
    }


    return (
        <>
            <div className="text-center my-5">
                <h1>Contact</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 m-auto">

                        <form onSubmit={subfrm}>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" onChange={inputs} value={data.Fullname} name="Fullname"
                                    class="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="number" onChange={inputs} value={data.phone} name="phone"
                                    class="form-control" id="exampleFormControlInput1" placeholder="Mobile" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" onChange={inputs} value={data.email} name="email"
                                    class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea onChange={inputs} value={data.msg} name="msg"
                                    class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Submit form</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Contact;