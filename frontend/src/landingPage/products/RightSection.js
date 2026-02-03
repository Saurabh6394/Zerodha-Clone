import React from 'react'

const RightSection = ({imageURL,productTitie,productDescription,learnMore}) => {
  return (
    <div className='container mt-5  mb-5' >
      <div className='row'>
        <div className='col-6 p-5 mt-5'>
          <h1 style={{marginTop:"50px"}}>{productTitie}</h1>
          <p>
            {productDescription}
          </p>
          <a href={learnMore}style={{textDecoration:"none"}} className='col-6' >Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
        
        <div className='col-6 '>
          <img src={imageURL}/> 
        </div>
      </div>
    </div>
  )
}

export default RightSection
