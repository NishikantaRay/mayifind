import React from 'react'
import Navbar2 from '../layouts/Navbar2'
import FeaturedAds from '../components/FeaturedAds'
import RecentAds from '../components/RecentAds'
import LatestAds from '../components/LatestAds'
import FooterComp from '../layouts/FooterComp'
import Categories from '../components/Categories'
export default function Index2() {
  return (
    <div>
        
        <Navbar2/>
        <Categories/>
        <FeaturedAds/>
        <RecentAds></RecentAds>
        <LatestAds/>
        <FooterComp/>
       
        
    </div>
  )
}
