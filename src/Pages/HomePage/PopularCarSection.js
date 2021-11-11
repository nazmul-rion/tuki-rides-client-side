import React from 'react'
import { Container } from 'react-bootstrap'
import ProductCarousel from './ProductCarousel'

const PopularCarSection = () => {
    return (
        <Container fluid>
            <div className="d-flex flex-column flex-md-row justify-content-between my-5 ">
                <div>
                    <h1 className="fw-bold">Popular Cars</h1>
                </div>
                <div className="d-flex justify-content-between border border-3 px-5">
                    <button className="btn btn-outline-info m-3">NEW</button>
                    <button className="btn btn-outline-danger m-3">USED</button>
                </div>
            </div>
            <ProductCarousel></ProductCarousel>
        </Container>
    )
}

export default PopularCarSection
