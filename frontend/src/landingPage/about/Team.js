import React from 'react'

const Team = () => {
  return (
    <div className='container-fluid px-5'>
      <div className='row  border-top' >
        <h1 className="  text-center  p-5 mt-5">
          People
        </h1>
      </div>
      <div className='row  ' style={{ lineHeight: "1.8" }}>
        <div className='col-6  text-center '>
          <img src='media\images\nithinKamath.jpg'  style={{borderRadius:"100%",width:"50%"}} className='mb-5'/>
          <h4 className='mb-3'>Nithin Kamath</h4>
          <h6>Founder & CEO</h6>
        </div>

        <div className='col-4 '>
          <p style={{ fontSize: "16px",margin:"16px 0px 15px " }}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p style={{ fontSize: "16px",margin:"16px 0px 15px " }}> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p style={{ fontSize: "16px",margin:"16px 0px 15px " }}>Playing basketball is his zen.
          </p>
        </div>
        <div className='col-2'></div>
      </div>
    </div>
  )
}

export default Team
