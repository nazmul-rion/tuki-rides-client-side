import axios from 'axios';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const { reset } = useForm();
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleOnSubmit = e => {
        const user = { email };

        fetch('https://tuki-rides-nazmul-rion.herokuapp.com/addadmin', {
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
        <div>
            <form onSubmit={handleOnSubmit}>
                <div className="mb-3 w-50 mx-auto text-start">
                    <label className="form-label">Email address</label>
                    <input onBlur={handleOnBlur} type="email" placeholder="Email Address" className="form-control" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {success && <Alert className="my-4 w-50 mx-auto" variant="success">
                Made Admin successfully!
            </Alert>}
        </div>
    );
};

export default MakeAdmin;