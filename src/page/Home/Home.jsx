import React from 'react'
import Hero from '../../components/Hero/Hero'
import CaruselHome from '../../components/CaruselHome/CaruselHome'
import Catalog from '../Catalog/Catalog'

const Home = () => {
  return (
    <div>
      <Hero/>
      <CaruselHome/>
      <Catalog/>
    </div>
  ) 
}

export default Home