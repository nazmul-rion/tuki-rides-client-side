import React from 'react'
import Banner from './Banner'
import PopularCarSection from './PopularCarSection'
import ProductCarousel from './ProductCarousel'

const Homepage = () => {
    return (
        <div className="mb-5">
            <Banner></Banner>
            <PopularCarSection></PopularCarSection>

        </div>
    )
}

export default Homepage
