import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [cars, setCars] = useState([]);
    const [singleCar, setSingleCar] = useState({});
    useEffect(() => {
        fetch('https://tuki-rides-nazmul-rion.onrender.com/allcars')
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);
    useEffect(() => {
        const found = cars.find(car => car._id === id)
        setSingleCar(found)
    }, [cars, id]);
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        swal("Are you sure you want buy this Car?", {
            buttons: ["No", "Yes"],
        })
            .then((value) => {
                if (value) {
                    axios.post('https://tuki-rides-nazmul-rion.onrender.com/addorder', data)
                        .then(res => {
                            if (res.data.insertedId) {
                                swal({
                                    title: "Thank You",
                                    text: "Your order is submitted",
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
        <div className="container-fluid">
            <div className="d-flex text-muted overflow-hidden" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                <h5 className="mx-2 my-3"><Link className="text-muted text-decoration-none" to="/home">Homepage</Link></h5>
                <h5 className="mx-2 my-3">-</h5>
                <h5 className="mx-2 my-3">Search</h5>
                <h5 className="mx-2 my-3">-</h5>
                <h5 className="mx-2 my-3">{singleCar?.Make}</h5>
                <h5 className="mx-2 my-3">-</h5>
                <h5 className="mx-2 my-3">{singleCar?.Model}</h5>
                <h5 className="mx-2 my-3">-</h5>
                <h5 className="mx-2 my-3" style={{ color: "#50008a" }}>{singleCar?.Name}</h5>
            </div>
            <hr />


            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-7">
                        <img className="img-fluid" src={singleCar?.img} alt="car_photo" style={{ borderRadius: "30px" }} />
                        <div className="row">
                            <h1 className="mt-5">{singleCar?.Name}</h1>
                            <div className="d-flex align-items-center">
                                <div className="price">
                                    <span className="text-success fs-3 fw-bold me-5">${singleCar?.Price}</span>
                                </div>

                                <div className="rating">
                                    <Rating
                                        initialRating={singleCar?.rating}
                                        emptySymbol="far fa-star text-danger fs-5"
                                        fullSymbol="fa fa-star text-info fs-5"
                                        readonly
                                    />({singleCar?.raters})
                                </div>
                            </div>
                            <div>


                                {
                                    singleCar?._id ? (
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input hidden value={singleCar?._id || ' '} {...register("CarID", { required: true })} />
                                            <input hidden value={singleCar?.email || ' '} {...register("UserEmail", { required: true })} />
                                            <input hidden value={singleCar?.Name || ' '} {...register("CarName", { required: true })} />
                                            <input hidden value={singleCar?.Price || ' '} {...register("Price", { required: true })} />
                                            <input hidden value="Pending" {...register("Status", { required: true })} />
                                            <input hidden value={user.uid || ' '}  {...register("UserId", { required: true })} />
                                            {
                                                user.photoURL ? (
                                                    <input hidden value={user.photoURL || ' '}  {...register("userPhoto", { required: true })} />)
                                                    : <>
                                                    </>

                                            }

                                            <input hidden value={user.displayName || ' '}  {...register("userName", { required: true })} />
                                            <input value="Buy Now" className="btn text-dark fw-bold custom-button mt-3" type="submit" />
                                        </form>
                                    )
                                        : (
                                            <>
                                            </>
                                        )

                                }



                            </div>
                            <h3 className="my-5">Description</h3>
                            <p>
                                {singleCar?.Description}
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <h2 className="text-center mb-3">Specification</h2>
                        <div className="d-flex flex-wrap justify-content-around align-items-center">
                            <p className="border-2 border-bottom border-dark">{singleCar?.Transmission}</p>
                            <p className="border-2 border-bottom border-dark">{singleCar?.Condition}</p>
                            <p className="border-2 border-bottom border-dark">{singleCar?.FuelType}</p>
                            <p className="border-2 border-bottom border-dark">{singleCar?.Color}</p>
                            <p className="border-2 border-bottom border-dark">{singleCar?.Doors} Doors</p>
                            <p className="border-2 border-bottom border-dark">{singleCar?.Year}</p>
                        </div>

                        <p className="fs-5"><i className="fab fa-gratipay text-danger"></i> Add to favourites</p>

                        <div className="px-3 px-md-5 py-4" style={{ backgroundColor: "#e3eeff", borderRadius: "30px" }}>
                            <Table >
                                <tbody>
                                    <tr>
                                        <td><b>Make:</b></td>
                                        <td>{singleCar?.Make}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Model:</b></td>
                                        <td>{singleCar?.Model}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Color:</b></td>
                                        <td>{singleCar?.Color}</td>
                                    </tr>
                                    <tr>
                                        <td><b>DriveType:</b></td>
                                        <td>{singleCar?.DriveType}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Transmission:</b></td>
                                        <td>{singleCar?.Transmission}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Condition:</b></td>
                                        <td>{singleCar?.Condition}</td>
                                    </tr>
                                    <tr>
                                        <td><b>FuelType:</b></td>
                                        <td>{singleCar?.FuelType}</td>
                                    </tr>
                                    <tr>
                                        <td><b>EngineSize:</b></td>
                                        <td>{singleCar?.EngineSize}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Doors:</b></td>
                                        <td>{singleCar?.Doors}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Cylinders:</b></td>
                                        <td>{singleCar?.Cylinders}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Year:</b></td>
                                        <td>{singleCar?.Year}</td>
                                    </tr>


                                </tbody>
                            </Table>
                        </div>

                    </div>


                </div>
            </div>
        </div >
    )
}

export default ProductDetailsPage
