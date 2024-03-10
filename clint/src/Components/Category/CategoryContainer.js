import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';
import { useDispatch, useSelector } from 'react-redux';
import getAllCategory from '../../redux/actions/categoryAction';
import CategoryHeader from './CategoryHeader';
const CategoryContainer = ( ) => {
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getAllCategory())
    },[dispatch])

    const data=useSelector(state=>state.allCategory.category)
    const loading=useSelector(state=>state.allCategory.loading)
     
    return (
        <Container >
        <div className="admin-content-text mt-2 "> All Categories</div>
        <CategoryHeader/>
            <Row className='my-2 d-flex justify-content-between'>
            {
                data.data? (data.data.map((e,index)=>(
                     <CategoryCard key={index} title={e.name}img={e.image} background="gray" />
                ))
                   ): null
            }
            </Row>
        </Container>
    )
}

export default CategoryContainer
