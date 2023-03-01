import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddProducts = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        swal("Are you sure you want to insert this Car?", {
            buttons: ["No", "Yes"],
        })
            .then((value) => {
                if (value) {
                    axios.post('https://tuki-rides-nazmul-rion.onrender.com/addcars', data)
                        .then(res => {
                            if (res.data.insertedId) {
                                swal({
                                    title: "Wow",
                                    text: "Cars inserted successful",
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
                <h1 className="text-center text-highlighted fw-bold my-5">Add a New Package</h1>
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label>Car Title</label>
                            <input type="text" className="form-control " placeholder="Enter Car Title" {...register("Name", { required: true })} />
                            {errors.Name && <span className="text-danger">This field is required!</span>}
                        </div>

                        <div className="mb-3">
                            <label>Maker</label>
                            <input type="text" className="form-control " placeholder="Enter Maker" {...register("Make", { required: true })} />
                            {errors.Make && <span className="text-danger">This field is required!</span>}
                        </div>

                        <div className="mb-3">
                            <label >Car Cost</label>
                            <input type="number" className="form-control " placeholder="Enter Car Cost" {...register("Price", { required: true })} />
                            {errors.Price && <span className="text-danger">This field is required!</span>}
                        </div>

                        <div className="mb-3">
                            <label >Total Reviews</label>
                            <input readOnly value="0" type="number" className="form-control " {...register("raters", { required: true })} />
                            {errors.raters && <span className="text-danger">This field is required!</span>}
                        </div>

                        <div className="mb-3">
                            <label >Rating</label>
                            <input readOnly value="0" type="number" className="form-control" {...register("rating", { required: true })} />
                            {errors.rating && <span className="text-danger">This field is required!</span>}
                        </div>

                        <div className="mb-3">
                            <label>Model</label>
                            <input type="text" className="form-control " placeholder="Enter Model" {...register("Model", { required: true })} />
                            {errors.Model && <span className="text-danger">This field is required!</span>}
                        </div>
                        <div className="mb-3">
                            <label>Color</label>
                            <input type="text" className="form-control " placeholder="Enter Color" {...register("Color", { required: true })} />
                            {errors.Color && <span className="text-danger">This field is required!</span>}
                        </div>
                        <div className="mb-3">
                            <label>DriveType</label>
                            <input type="text" className="form-control " placeholder="Enter DriveType" {...register("DriveType", { required: true })} />
                            {errors.DriveType && <span className="text-danger">This field is required!</span>}
                        </div>
                        <div className="mb-3">
                            <label>Transmission</label>
                            <input type="text" className="form-control " placeholder="Enter Transmission" {...register("Transmission", { required: true })} />
                            {errors.Transmission && <span className="text-danger">This field is required!</span>}
                        </div>
                        <div className="mb-3">
                            <label>Condition</label>
                            <input type="text" className="form-control " placeholder="Enter Condition" {...register("Condition", { required: true })} />
                            {errors.Condition && <span className="text-danger">This field is required!</span>}
                        </div>
                        <div className="mb-3">
                            <label>Year</label>
                            <input type="text" className="form-control " placeholder="Enter Year" {...register("Year", { required: true })} />
                            {errors.Year && <span className="text-danger">This field is required!</span>}
                        </div>
                        <div className="mb-3">
                            <label>FuelType</label>
                            <input type="text" className="form-control " placeholder="Enter FuelType" {...register("FuelType", { required: true })} />
                            {errors.FuelType && <span className="text-danger">This field is required!</span>}
                        </div>
                        <div className="mb-3">
                            <label>EngineSize</label>
                            <input type="text" className="form-control " placeholder="Enter EngineSize" {...register("EngineSize", { required: true })} />
                            {errors.EngineSize && <span className="text-danger">This field is required!</span>}
                        </div>
                        <div className="mb-3">
                            <label>Doors</label>
                            <input type="text" className="form-control " placeholder="Enter Doors" {...register("Doors", { required: true })} />
                            {errors.Doors && <span className="text-danger">This field is required!</span>}
                        </div>
                        <div className="mb-3">
                            <label>Cylinders</label>
                            <input type="text" className="form-control " placeholder="Enter Cylinders" {...register("Cylinders", { required: true })} />
                            {errors.Cylinders && <span className="text-danger">This field is required!</span>}
                        </div>
                        <div className="mb-3">
                            <label>Description</label>
                            <textarea type="text" className="form-control " placeholder="Enter Description" {...register("Description", { required: true })} />
                            {errors.Description && <span className="text-danger">This field is required!</span>}
                        </div>
                        <div className="mb-3">
                            <label>img</label>
                            <input type="text" className="form-control " placeholder="Enter img link" {...register("img", { required: true })} />
                            {errors.img && <span className="text-danger">This field is required!</span>}
                        </div>


                        <input className="btn custom-button mb-5" type="submit" />
                    </form>
                </div>
            </div>


        </div>
    )
}

export default AddProducts
