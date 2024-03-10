import React, { useEffect, useLayoutEffect } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../images/clothe.png";

import { useDispatch, useSelector } from 'react-redux';
import getAllCategory from '../../redux/actions/categoryAction';
const HomeCategory = () => {
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getAllCategory())
    },[dispatch])
// Extract category data and loading state from Redux store
    const category=useSelector(state=>state.allCategory.category)
    const loading=useSelector(state=>state.allCategory.loading)
 
    return (
        <Container className='bg-gray'>
            <SubTiltle title="CATEGORIES" btntitle="MORE" pathText="/allcategory" />
            <Row  style={{ backgroundColor: '#f0f0f0' }} className='my-2 d-flex justify-content-between'>
            {
                loading===false?(
                category.data? (category.data.slice(0,6).map((e,index)=>(
                     <CategoryCard key={index} title={e.name}img={e.image} background="" />
                ))
                   ): <h>no categories</h>):<Spinner animation="grow" />
            }
            </Row>
        </Container>
    )
}

export default HomeCategory
