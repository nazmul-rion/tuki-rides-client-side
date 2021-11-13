import React from 'react'
import Loader from 'react-loader-spinner';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';
import OrdersApi from '../../../hooks/OrdersApi';


const MyOrder = () => {
    const { user } = useAuth();
    const [ord, setord] = OrdersApi();

    const handleDeleteOrder = id => {
        const url = `https://tuki-rides-nazmul-rion.herokuapp.com/allorders/${id}`;

        swal("Are you sure you want Cancel this Order?", {
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
            <h1 className="text-center">MY Orders</h1>
            <hr className="mb-5" />
            <div className="container mb-5">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover border-dark">
                        <thead>
                            <tr className="text-center">
                                <th scope="col">Car Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                ord.filter(order => order.UserId.includes(user.uid)).map(myOrder => (

                                    < tr key={myOrder._id} className="text-center" >
                                        <td>{myOrder.CarName}</td>
                                        <td>{myOrder.Price}</td>
                                        <td>{myOrder.Status}</td>
                                        <td><button onClick={() => handleDeleteOrder(myOrder._id)} className="btn btn-danger">Cancel</button></td>
                                    </tr>


                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </div >
    )
}

export default MyOrder
