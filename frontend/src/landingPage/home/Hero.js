import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="container p-5 mb-5">
      <div className='row text-center'>
        <img src="media/images/homeHero.png" alt="HeroImage" className="img-fluid mb-5" />
        <h1 className='mt-5 mb-3'> Invest in everything </h1>
        <p className='mb-4'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
        <Link to="/signup"> <button style={{width:"20%",margin:"0 auto"}} className='p-2 btn btn-primary fs-5'>Signup Now</button></Link>
      </div>
    </div>
  )
}

export default Hero
