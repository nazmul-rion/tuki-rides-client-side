import React from 'react'
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const ProductCard = (props) => {

    const { _id, Name, Price, Color, Transmission, Year, img, FuelType, rating, raters } = props.cars;



    return (
        <div className="mx-2">
            <div className="card " style={{ minHeight: "520px" }}>
                <img className="card-img-top" height="250px" src={img ? img : logo} alt="Card image cap" />
                <div className="card-body">
                    <div >
                        <h5 className="card-title  overflow-hidden" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}><i class="fas fa-car"></i> {Name}</h5>
                    </div>
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
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="border-2 border p-2" style={{ borderRadius: "10px", backgroundColor: "#d9feff" }}>{Transmission}</p>
                        <p>{FuelType}</p>
                        <p>{Color}</p>
                        <p>{Year}</p>
                    </div>

                </div>
                <div className="d-flex justify-content-center mb-3">
                    <Link to={`/productDetails/${_id}`} className="custom-button btn">Procced to Buy <i class="fas fa-arrow-right"></i></Link>
                </div>
            </div>
        </div >
    )
}

export default ProductCard
