import React from 'react'
import Layout from '../../layout/Layout'
import HeroSection from './herosec/HeroSection'
import SearchFilter from '../../ui/filter/SearchFilter'
import ProductCard from './product-card/ProductCard'
import Testimonial from './testimonial/Testimonial'

const Home = () => {
 
  return (
    <Layout>
      <HeroSection />
      <SearchFilter />
      <ProductCard />
      <Testimonial />
    </Layout>
  )
}

export default Home