import React from 'react'
import Layout from '../../layout/Layout'
import { useContext } from "react";
import MyContext from '../../../context/MyContext'

const Home = () => {
  const {state , employee} = useContext(MyContext);


  return (
    <Layout>
      home
    </Layout>
  )
}

export default Home