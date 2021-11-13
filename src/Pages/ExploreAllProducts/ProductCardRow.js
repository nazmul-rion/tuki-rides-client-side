import React from 'react'
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

function ProductCardRow(props) {
    const { _id, Name, Price, Color, Description, Transmission, Year, Make, Doors, Condition, img, FuelType, rating, raters } = props.cars;
    return (
        <div className="card hover mb-3" >
            <div className="row g-0 p-2 align-items-center">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title  overflow-hidden" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}><i className="fas fa-car"></i> {Name}</h5>
                        <h5 className="fw-bold  overflow-hidden" style={{ color: "#330063", whiteSpace: "nowrap", textOverflow: "ellipsis" }}><i className="fas fa-copyright"></i> {Make}</h5>
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
                            <Link className="custom-button btn" to={`/productDetails/${_id}`}>Procced to Buy <i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCardRow
