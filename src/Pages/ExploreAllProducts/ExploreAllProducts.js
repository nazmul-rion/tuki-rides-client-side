import React from 'react'
import { Container } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import CarsListApi from '../../hooks/CarsListApi';
import ProductCardRow from './ProductCardRow';


const ExploreAllProducts = () => {
    const [cars] = CarsListApi();
    if (cars.length === 0) {
        return <div className="d-flex justify-content-center">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={300}
                width={300}

            />
        </div>
    }
    return (
        <div>
            <h1 className="my-3 text-center">Our Car List</h1>
            <hr />
            <Container>
                {
                    cars.map(car => (
                        <ProductCardRow
                            cars={car}
                            key={car._id}>
                        </ProductCardRow>
                    ))
                }
            </Container>
        </div>
    )
}

export default ExploreAllProducts
