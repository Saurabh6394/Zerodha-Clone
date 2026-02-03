import React from 'react'

const LeftSection = ({imageURL, productName, productDescription,tryDemo, learnMore, googlePlay, appStore}) => {
  return (
    <div className='container ' style={{padding:"80px 20px 0px"}}>
      <div className='row '>
        <div className='col-7 p-3'>
          <img src={imageURL} alt={productName} className='img-fluid' />
        </div>
        <div className='col-4 p-5'>
          <h1 style={{margin:"0px 0px 20px "}}>{productName}</h1>
          <p style={{margin:"16px 0px 15px "}}>{productDescription}</p>
         <div className='row mb-3' >
           <a href={tryDemo}style={{textDecoration:"none"}} className='col-6'>Try Demo <i class="fa-solid fa-arrow-right-long"></i> </a>
          <a href={learnMore}style={{textDecoration:"none"}} className='col-6' >Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
         </div>
          <div  style={{gap:"50px"}}>
            <a href={googlePlay}> <img src='media/images/googlePlayBadge.svg'/></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href={appStore}><img src='media/images/appStoreBadge.svg'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
