import React from 'react'
import Layout from '../../layout/Layout'
import HeroSection from './herosec/HeroSection'
import SearchFilter from '../../ui/filter/SearchFilter'

const Home = () => {
 
  return (
    <Layout>
      <HeroSection />
      <SearchFilter />
    </Layout>
  )
}

export default Home