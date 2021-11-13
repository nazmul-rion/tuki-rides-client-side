import React from 'react'
import Message from '../../Components/Message/Message'
import Banner from './Banner'
import PopularCarSection from './PopularCarSection/PopularCarSection'
import ReviewSection from './ReviewSection/ReviewSection'

const Homepage = () => {
    return (
        <div className="mb-5">
            <Banner></Banner>
            <PopularCarSection></PopularCarSection>
            <ReviewSection></ReviewSection>
            <Message></Message>

        </div>
    )
}

export default Homepage
