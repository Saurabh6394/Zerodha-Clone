import React from 'react'

const Hero = () => {
  return (
    <div className='container text-center' style={{padding:"100px 20px "}}>
      <h1>Charges</h1>
      <p style={{margin:"10px 0px 15px"}}>List of all charges and taxes</p>

      <div className='row between' style={{padding:"80px 0px 20px "}}>
        <div className='col-4 text-center text-muted'>
          <img src='media/images/pricing0.svg' style={{margin:"0px 0px 15px ",width:"70%"}}/>
          <h2 style={{margin:"0px 0px 20px "}}>Free equity delivery</h2>
          <p style={{margin:"16px 0px 15px "}}>All equity delivery investments (NSE, BSE), <br/> are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-4 text-center text-muted'>
             <img src='media/images/intradayTrades.svg' style={{margin:"0px 0px 15px ",width:"70%"}}/>
          <h2 style={{margin:"0px 0px 20px "}}>Intraday and F&O trades</h2>
          <p style={{margin:"16px 0px 15px "}}>Flat ₹ 20 or 0.03% (whichever is lower) per <br/> executed order on intraday trades across <br/> equity, currency, and commodity trades. Flat <br/> ₹20 on all option trades.</p>
        </div>
        <div className='col-4 text-center text-muted'>
            <img src='media/images/pricingMF.svg' style={{margin:"0px 0px 15px ",width:"70%"}}/>
          <h2 style={{margin:"0px 0px 20px "}}>Free direct MF</h2>
          <p style={{margin:"16px 0px 15px "}}>All direct mutual fund investments are <br/> absolutely free — ₹ 0 commissions & DP <br/> charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
