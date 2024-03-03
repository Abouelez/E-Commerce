import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";

const HomeCategory = () => {
    return (
        <Container className='bg-gray'>
            <SubTiltle title="CATEGORIES" btntitle="MORE" pathText="/allcategory" />
            <Row  style={{ backgroundColor: '#f0f0f0' }} className='my-2 d-flex justify-content-between'>
                <CategoryCard title="ELECTRONICS" img={clothe} background="gray" />
                <CategoryCard title="ELECTRONICS" img={cat2} background=" gray" />
                <CategoryCard title="ELECTRONICS" img={labtop} background="#0034FF" />
                <CategoryCard title="ELECTRONICS" img={sale} background="gray" />
                <CategoryCard title="ELECTRONICS" img={clothe} background="red" />
                <CategoryCard title="ELECTRONICS" img={pic} background=" gray" />
            </Row>
        </Container>
    )
}

export default HomeCategory
