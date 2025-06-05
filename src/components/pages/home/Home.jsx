import React from 'react'
import Layout from '../../layout/Layout'
import HeroSection from './herosec/HeroSection'
import SearchFilter from '../../ui/filter/SearchFilter'
import ProductCard from './product-card/ProductCard'

const Home = () => {
 
  return (
    <Layout>
      <HeroSection />
      <SearchFilter />
      <ProductCard />
    </Layout>
  )
}

export default Home