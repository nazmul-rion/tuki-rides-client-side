import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        swal("Are you sure you want to add a review?", {
            buttons: ["No", "Yes"],
        })
            .then((value) => {
                if (value) {
                    axios.post('https://tuki-rides-nazmul-rion.herokuapp.com/addreview', data)
                        .then(res => {
                            if (res.data.insertedId) {
                                swal({
                                    title: "Wow",
                                    text: "Review added successful",
                                    icon: "success",
                                    button: "Done",
                                });
                                reset();
                            }
                            else {
                                swal("Sorry!", "Some Error occure", "error");
                            }
                        });
                }
            });
    }
    return (
        <div>
            <div className="container card my-5">
                <h1 className="text-center text-highlighted fw-bold my-5">Add Review</h1>
                <div className="container">
                    {
                        user?.email ? (
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input hidden value={user.uid || ' '}  {...register("UserId", { required: true })} />
                                <input hidden value={user.photoURL || ' '}  {...register("userPhoto", { required: true })} />
                                <input hidden value={user.displayName || ' '}  {...register("name", { required: true })} />
                                <label>Write Something for review</label>
                                <textarea className="form-control"  {...register("text", { required: true })} />

                                <label>Add Rating</label>
                                <input step="0.01" className="form-control" type="number"  {...register("rating", { required: true })} />
                                <input value="Add Review" className="btn text-dark fw-bold custom-button my-3" type="submit" />
                            </form>
                        )
                            : (
                                <>
                                </>
                            )

                    }
                </div>
            </div>


        </div>
    )
}

export default Review
