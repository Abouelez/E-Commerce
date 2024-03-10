import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import Pagination from '../../Components/Uitily/Pagination'
import AdminAddSubCategory from '../../Components/Admin/AdminAddSubCategory'
const AdminAddSubCategoryPage = () => {
    return (
        <Row className=' w-100 '>
            <Col sm="3" xs="2" md="3" className='px-2 text-white bg-secondary position-relative min-vh-100'>
                <AdminSideBar />
            </Col>

            <Col sm="9" xs="10" md="8">
                <AdminAddSubCategory />
            </Col>
        </Row>

    )
}

export default AdminAddSubCategoryPage
