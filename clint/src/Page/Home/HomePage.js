import React, { useEffect,  } from 'react'
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import Silder from './../../Components/Home/Silder';
import DiscountSection from './../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';

const HomePage = () => { 

 

    return (
        <div className='font' style={{ minHeight: '670px' }}>

            <Silder />
            <HomeCategory   />
            <CardProductsContainer title="BEST SELLER" btntitle="MORE..." pathText="/products" />
            <DiscountSection />
            <CardProductsContainer title="Latest fashion" btntitle="MORE..." pathText="/products" />
            <BrandFeatured title="Popular Brands" btntitle="MORE..."  />

        </div>
    )
}

export default HomePage
