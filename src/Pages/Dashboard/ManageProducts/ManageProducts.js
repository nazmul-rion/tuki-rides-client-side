import React from 'react'
import { Container } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import CarsListApi from '../../../hooks/CarsListApi';
import ManageProductCard from './ManageProductCard';

const ManageProducts = () => {
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
            <h1 className="text-center mb-5">Manage All Products</h1>
            <Container>
                {
                    cars.map(car => (
                        <ManageProductCard
                            cars={car}
                            key={car._id}>
                        </ManageProductCard>
                    ))
                }
            </Container>

        </div >
    )
}

export default ManageProducts
