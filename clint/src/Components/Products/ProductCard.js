import React from 'react'
import { Card, Col, ListGroup } from 'react-bootstrap'
import prod1 from "../../images/prod1.png";
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
import { Link } from 'react-router-dom';
const ProductCard = () => {


    return (
        <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <img
                            src={favoff}
                            alt=""
                            className="text-center"
                            style={{
                                height: "24px",
                                width: "26px",
                            }}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item className='d-flex'>
                        <div className="card-price">880</div>
                        <div className="card-currency mx-1">$</div>
                    </ListGroup.Item>
                    <ListGroup.Item className='d-flex'>
                        <img
                            className=""
                            src={rate}
                            alt=""
                            height="16px"
                            width="16px"
                        /><div className="card-rate mx-2">4.5</div>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard
