import React from 'react'
import { Link } from 'react-router-dom'
import './admin.css'
const AdminSideBar = () => {
    return (
        <div className="sidebar  text-white bg-secondary position-fixed  dashboard-side ">
            <div className="d-flex flex-column dash-side-box">
                <Link to="/admin/allorders" style={{ textDecoration: 'none' }} className='w-100'>
                    <div className="admin-side-text mt-3  p-2 text-center">
                      Orders
                    </div>
                </Link>
                <Link to="/admin/allproducts" style={{ textDecoration: 'none' }} className='w-100'>
                    <div className="admin-side-text my-1  p-2 text-center">
                    Products
                    </div>
                </Link>
                <Link to="/admin/addbrand" style={{ textDecoration: 'none' }}className='w-100'>
                    <div className="admin-side-text my-1  p-2 text-center" >
                     Add Brand
                    </div>
                </Link>

                <Link to="/admin/addcategory" style={{ textDecoration: 'none' }} className='w-100'>
                    <div className="admin-side-text my-1  p-2 text-center">
                    Add Category
                    </div>
                </Link>

                <Link to="/admin/addsubcategory" style={{ textDecoration: 'none' }} className='w-100'>
                    <div className="admin-side-text my-1  p-2 text-center">
                    Add Subcategory
                     
                    </div>
                </Link>
                <Link to="/admin/addproduct" style={{ textDecoration: 'none' }} className='w-100'>
                    <div className="admin-side-text my-1  p-2 text-center">
                    Add Product
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default AdminSideBar
