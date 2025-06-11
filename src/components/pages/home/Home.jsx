import React from 'react'
import Layout from '../../layout/Layout'
import HeroSection from './herosec/HeroSection'
import SearchFilter from '../../ui/filter/SearchFilter'
import ProductCard from './product-card/ProductCard'
import Testimonial from './testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../features/cart/cartSlice'

const Home = () => {
  const dispatch = useDispatch();

  const cardItem = useSelector((store) => store.cart);
   const addCart = () => {
        dispatch(addToCart("Shirt"))
   }
    const deleteCart = () => {
      dispatch(deleteFromCart("1"))
    }

    
  return (
    <Layout>
     <div  className='my-5 p-5 text-center'>
          <button onClick={addCart} className='bg-green-400 py-1.5 px-4 rounded-sm text-white mr-5'>Add</button>
       <button onClick={deleteCart} className='bg-red-400 py-1.5 px-4 rounded-sm text-white' >Delete</button>

     </div>
      <HeroSection />
      <SearchFilter />
      <ProductCard />
      <Testimonial />
    </Layout>
  )
}

export default Home