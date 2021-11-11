import React from 'react'
import { Col, Container, Row, Button, Card, Nav } from 'react-bootstrap'
import bannerPhoto from '../../images/banner.jpg'
import bannerCar from '../../images/bannerCar.png'

const Banner = () => {
    return (
        <div>
            <Container fluid >
                <Row className="align-items-center justify-content-center text-light"
                    style={{ backgroundImage: `url("${bannerPhoto}")`, backgroundSize: "100% 90%", minHeight: "500px", backgroundRepeat: "no-repeat" }}
                >
                    <Col xs={12} md={8} className="ps-5 py-5">
                        <h1 className="display-1 fw-bold"> Find your <br />
                            dream car</h1>
                        <Row>
                            <Col xs={12} md={6}>
                                <p>We can help you find the best car.Check our reviews, compare models and find cars for sale.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Button className="custom-button fs-3">Explore All <i className="fas fa-car "></i></Button>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={12} md={4} className="px-5">
                        <Card>
                            <Card.Header>
                                <Nav variant="tabs" defaultActiveKey="#all" className="justify-content-center">
                                    <Nav.Item>
                                        <Nav.Link href="#all">All</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#new">New</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#used">Used</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <select className="form-control mb-3" name="car-model" id="">
                                        <option value="Audi">Select Car Model</option>
                                        <option value="Audi">Audi</option>
                                        <option value="Ferrari">Ferrari</option>
                                        <option value="BMW">BMW</option>
                                    </select>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <select className="form-control mb-3" name="car-model" id="">
                                            <option value="">Min Car Price</option>
                                            <option value="$20000">$20000</option>
                                            <option value="$30000">$30000</option>
                                            <option value="$40000">$40000</option>
                                            <option value="$50000">$50000</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select className="form-control mb-3" name="car-model" id="">
                                            <option value="">Max Car Price</option>
                                            <option value="$20000">$20000</option>
                                            <option value="$30000">$30000</option>
                                            <option value="$40000">$40000</option>
                                            <option value="$50000">$50000</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Button className="custom-button ">Search <i className="fas fa-search"></i></Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <p className="text-center my-2 fw-bold myText">
                            Search your Dream Car
                        </p>
                    </Col>
                    <Row>
                        <Col className="d-flex justify-content-center" xs={12} style={{ marginBottom: "0%" }} >
                            <img src={bannerCar} alt=""

                                width="500"
                                className="img-fluid d-inline-block align-top" />
                        </Col>
                    </Row>
                </Row>

            </Container>

        </div >
    )
}

export default Banner
