import React, { useLayoutEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import getAllCategory from '../../redux/actions/categoryAction'

const AllCategoryPage = () => {
    const dispatch=useDispatch()

    useLayoutEffect(()=>{
        dispatch(getAllCategory())
    },[dispatch])

    const data=useSelector(state=>state.allCategory.category)
    const loading=useSelector(state=>state.allCategory.loading)
    return (
        <div style={{minHeight:'670px'}}>
        
            <CategoryContainer data={data} />
            <Pagination />
        </div>
    )
}

export default AllCategoryPage
