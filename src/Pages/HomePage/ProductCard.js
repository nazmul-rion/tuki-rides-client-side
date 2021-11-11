import React from 'react'
import Rating from 'react-rating';

const ProductCard = (props) => {

    const { _id, category, Name, detail, quantity, Price, age, img, date, rating, raters } = props.cars;



    return (
        <div className="mx-2">
            <div className="card" >
                <img className="card-img-top p-3" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{Name}</h5>
                    <div className="card-text">
                        <div className="rating">
                            <Rating
                                initialRating={rating}
                                emptySymbol="far fa-star text-danger "
                                fullSymbol="fa fa-star text-warning "
                                readonly
                            />({raters})
                        </div>

                        <div className="price">
                            <b>Price: </b> <span className="text-danger">${Price}bdt</span>
                        </div>


                    </div>
                    <div className="d-flex justify-content-between">
                        <button href="#" className="btn rounded-circle text-custom"><i className="fas fa-cart-arrow-down  fs-3"></i></button>
                        <button href="#" className="btn rounded-circle text-custom">  <i class="fas fa-heart fs-3"></i></button>
                        <button href="#" className="btn  rounded-circle text-custom"> <i class="fas fa-chart-bar fs-3"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
