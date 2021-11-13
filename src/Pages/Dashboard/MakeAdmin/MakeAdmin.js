
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleOnSubmit = e => {
        const user = { email };

        fetch('https://tuki-rides-nazmul-rion.herokuapp.com/allusers/makeadmin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    setSuccess(true)
                }
            })
        e.preventDefault();
    };
    return (
        <div style={{ height: "100%" }}>
            <h1 className="text-center">Make an Admin</h1>
            <form onSubmit={handleOnSubmit}>
                <div className="my-5 w-50 mx-auto text-start">
                    <label className="form-label">Email address</label>
                    <input onBlur={handleOnBlur} type="email" placeholder="Email Address" className="form-control mb-3" aria-describedby="emailHelp" />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>
            {success && <Alert className="my-4 w-50 mx-auto" variant="success">
                Made Admin successfully!
            </Alert>}
        </div>
    );
};

export default MakeAdmin;