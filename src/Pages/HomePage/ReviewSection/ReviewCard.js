import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from 'react-rating';

function ReviewCard(props) {
    const { name, rating, text, userPhoto } = props.review;

    return (
        <Card className="mx-2 my-3">
            <Card.Header as="h5">
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <img
                            width="40px"
                            className="img-fluid rounded-circle me-2" src={userPhoto ? userPhoto : "https://i.ibb.co/L9TLhbm/Avater.jpg"} alt="UserPhoto" />

                        {name}

                    </div>

                    <div>
                        <Rating
                            initialRating={rating}
                            emptySymbol="fa fa-star text-danger "
                            fullSymbol="fa fa-star text-info "
                            readonly
                        />
                    </div>
                </div></Card.Header>
            <Card.Body>

                <Card.Text className=" overflow-hidden" style={{ height: "100px", whiteSpace: "", textOverflow: "ellipsis" }}>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ReviewCard
