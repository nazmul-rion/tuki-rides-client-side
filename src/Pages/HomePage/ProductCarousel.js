import React from 'react'
import Slider from 'react-slick';
import CarsListApi from '../../hooks/CarsListApi';
import ProductCard from './ProductCard';

const ProductCarousel = () => {

    const [cars, setCars] = CarsListApi();

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        initialSlide: 0,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div>


            <div className="container">

                <Slider {...settings}>
                    {
                        cars.map(car => (
                            <ProductCard
                                cars={car}
                                key={car._id}>
                            </ProductCard>
                        ))
                    }
                </Slider>

            </div>


        </div >
    )
}

export default ProductCarousel
