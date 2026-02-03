import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='container-fluid border-bottom' style={{padding:"100px 20px",color:"#424242"}}>
      <div className='row text-center '>
        <h1 style={{font:"28px"}}>Zerodha Products</h1>
        <h3 style={{fontSize:"20px",margin:"10px 0px 15px " }}>Sleek, modern, and intuitive trading platforms</h3>
        <p style={{font:"16px",margin:"16px 0px 15px"}}>Check out our <Link style={{textDecoration:"none"}}>investment offerings →</Link></p>
      </div>
    </div>
  )
}

export default Hero
