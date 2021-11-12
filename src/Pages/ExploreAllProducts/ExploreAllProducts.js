import React from 'react'
import { Container } from 'react-bootstrap';
import CarsListApi from '../../hooks/CarsListApi';
import ProductCardRow from './ProductCardRow';


const ExploreAllProducts = () => {
    const [cars] = CarsListApi();
    return (
        <div>
            <h1 className="my-3 text-center">Our Car List</h1>
            <hr />
            <Container>
                {
                    cars.slice(0, 10).map(car => (
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
