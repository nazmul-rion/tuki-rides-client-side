import React from 'react'
import Rating from 'react-rating';
import swal from 'sweetalert';
import CarsListApi from '../../../hooks/CarsListApi';

function ManageProductCard(props) {
    const { _id, Name, Price, Color, Description, Transmission, Year, Make, Doors, Condition, img, FuelType, rating, raters } = props.cars;
    const [cars, setcars] = CarsListApi();
    const handleDeleteCar = id => {
        const url = `https://tuki-rides-nazmul-rion.herokuapp.com/allcars/${id}`;

        swal("Are you sure you want Delete this Car?", {
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
                                const remainingCar = cars.filter(car => car._id !== id);
                                setcars(remainingCar);
                            }
                        });
                }
            });

    }

    return (
        <div class="card hover mb-3" >
            <div class="row g-0 p-2 align-items-center">
                <div class="col-md-4">
                    <img src={img} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 className="card-title  overflow-hidden" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}><i class="fas fa-car"></i> {Name}</h5>
                        <h5 className="fw-bold  overflow-hidden" style={{ color: "#330063", whiteSpace: "nowrap", textOverflow: "ellipsis" }}><i class="fas fa-copyright"></i> {Make}</h5>
                        <div className="card-text" >

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="price">
                                    <span className="text-success fs-4 fw-bold">${Price}</span>
                                </div>

                                <div className="rating">
                                    <Rating
                                        initialRating={rating}
                                        emptySymbol="far fa-star text-danger fs-5"
                                        fullSymbol="fa fa-star text-info fs-5"
                                        readonly
                                    />({raters})
                                </div>

                            </div>
                        </div>

                        <div>
                            <p className="overflow-hidden" style={{ height: "50px", textOverflow: "ellipsis" }}>{Description}</p>
                        </div>
                        <hr />
                        <div className="d-flex flex-wrap justify-content-around align-items-center">
                            <p className="border-2 border p-2" style={{ borderRadius: "10px", backgroundColor: "#d9feff" }}>{Transmission}</p>
                            <p className="border-2 border text-white px-3 py-2" style={{ borderRadius: "10px", backgroundColor: "#af8cff" }}>{Condition}</p>

                            <p className="border   border-2 py-2 px-3" style={{ borderRadius: "10px", backgroundColor: "#fa9852" }}>{FuelType}</p>
                            <p className="border   border-2 py-2 px-3" style={{ borderRadius: "10px", backgroundColor: "#dbdbdb" }}>{Color}</p>
                            <p className="border  border-2 py-2 px-3" style={{ borderRadius: "10px", backgroundColor: "#cdffba" }}>{Doors} Doors</p>
                            <p className="border  border-2 py-2 px-3" style={{ borderRadius: "10px", backgroundColor: "#baffdf" }}>{Year}</p>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-end mt-3">
                            <button onClick={() => handleDeleteCar(_id)} className="btn-danger btn">Delete Car  <i class="fas fa-minus-circle"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageProductCard
