import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
import CategoryHeader from './CategoryHeader';
const CategoryContainer = () => {
    return (
        <Container >
        <div className="admin-content-text mt-2 "> All Categories</div>
        <CategoryHeader/>
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCard title="electronics" img={clothe} background="gray" />
                <CategoryCard title="electronics" img={cat2} background="gray" />
                <CategoryCard title="electronics" img={labtop} background="red" />
                <CategoryCard title="electronics" img={sale} background="gray" />
                <CategoryCard title="electronics" img={clothe} background="#red" />
                <CategoryCard title="electronics" img={pic} background="gray" />
                <CategoryCard title="electronics" img={clothe} background="gray" />
                <CategoryCard title="electronics" img={cat2} background="gray" />
                <CategoryCard title="electronics" img={labtop} background="red" />
                <CategoryCard title="electronics" img={sale} background="gray" />
                <CategoryCard title="electronics" img={clothe} background="#red" />
                <CategoryCard title="electronics" img={pic} background="gray" />
                <CategoryCard title="electronics" img={clothe} background="gray" />
                <CategoryCard title="electronics" img={cat2} background="gray" />
                <CategoryCard title="electronics" img={labtop} background="red" />
                <CategoryCard title="electronics" img={sale} background="gray" />
                <CategoryCard title="electronics" img={clothe} background="#red" />
                <CategoryCard title="electronics" img={pic} background="gray" />
            </Row>
        </Container>
    )
}

export default CategoryContainer
