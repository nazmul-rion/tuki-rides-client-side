import React from 'react'
import { Card } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import swal from 'sweetalert';
import OrdersApi from '../../../hooks/OrdersApi';

const ManageAllOrders = () => {
    const [ord, setord] = OrdersApi();

    const handleDeleteOrder = id => {
        const url = `https://tuki-rides-nazmul-rion.onrender.com/allorders/${id}`;

        swal("Are you sure you want Delete this Order?", {
            buttons: ["No", "Yes"],
        })
            .then((value) => {
                if (value) {
                    fetch(url, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                swal("Deleted Successfull...", {
                                    icon: "success",
                                });
                                const remainingOrder = ord.filter(myOrder => myOrder._id !== id);
                                setord(remainingOrder);
                            }
                        });
                }
            });

    }

    const handleUpdateOrder = id => {
        const url = `https://tuki-rides-nazmul-rion.onrender.com/allorders/${id}`;

        swal("Are you sure you want Confirm this Order?", {
            buttons: ["No", "Yes"],
        })
            .then((value) => {
                if (value) {
                    fetch(url, {
                        method: "PUT"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                swal("Order Confirmed...", {
                                    icon: "success",
                                });
                            }
                        });
                }
            });
    }
    if (ord.length === 0) {
        return <div className="d-flex justify-content-center">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={300}
                width={300}

            />
        </div>
    }
    return (
        <div>
            <h1 className="text-center mb-5">Manage All ORders</h1>

            <div className="container mb-5">
                <div className="table-responsive">

                    {
                        ord.map(myOrder => (
                            <Card className="mx-2 my-3">
                                <Card.Header as="h5">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img
                                                width="40px"
                                                className="img-fluid rounded-circle me-2" src={myOrder.userPhoto ? myOrder.userPhoto : "https://i.ibb.co/L9TLhbm/Avater.jpg"} alt="UserPhoto" />

                                            {myOrder.userName}

                                        </div>


                                    </div></Card.Header>
                                <Card.Body>
                                    <Card.Title style={{ color: "#210036" }}> <b>{myOrder.CarName}</b>  </Card.Title>
                                    <Card.Text>
                                        <div className="d-flex flex-column flex-md-row">
                                            <span className="text-success fs-4 fw-bold me-md-5 me-0">${myOrder.Price}</span>
                                            <div className=" fs-4"><b>Status: </b>{myOrder.Status}</div>

                                        </div>
                                        <div className="d-flex flex-column flex-md-row mt-3">
                                            <button onClick={() => handleUpdateOrder(myOrder._id)} className="btn btn-success me-0 me-md-5">Click here to Approve Order</button>
                                            <button onClick={() => handleDeleteOrder(myOrder._id)} className="btn btn-danger">Delete</button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>


                        ))
                    }

                </div>

            </div>

        </div >
    )
}

export default ManageAllOrders
