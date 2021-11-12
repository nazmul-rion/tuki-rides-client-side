import { useEffect } from "react";
import { useState } from "react"

const ReviewApi = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://tuki-rides-nazmul-rion.herokuapp.com/allreviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [reviews]);
    return [reviews, setReviews];
}

export default ReviewApi;