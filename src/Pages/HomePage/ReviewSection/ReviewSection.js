import React from 'react'
import Loader from 'react-loader-spinner';
import Slider from 'react-slick'
import ReviewApi from '../../../hooks/ReviewApi';
import ReviewCard from './ReviewCard';

function ReviewSection() {
    const [reviews] = ReviewApi();
    if (reviews.length === 0) {
        return <div className="d-flex justify-content-center">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={300}
                width={300}

            />
        </div>
    }
    var settings = {
        dots: true,
        infinite: true,
        rows: 2,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        initialSlide: 0,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
        <div className="my-5">
            <div className="container">
                <h1>Customer Reviews</h1>
                <Slider {...settings}>
                    {
                        reviews.map(review => (
                            <ReviewCard
                                review={review}
                                key={review._id}>
                            </ReviewCard>
                        ))
                    }
                </Slider>

            </div>
        </div>
    )
}

export default ReviewSection
