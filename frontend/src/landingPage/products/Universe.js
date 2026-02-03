import React from 'react'

const Universe = () => {
  return (
    <div className='container' style={{ margin: "80px 20px 0px 20px " }}>
      <div className='row' >
        <h1 style={{ margin: "0px 0px 20px" }} className='text-center'>The Zerodha Universe</h1>
        <p style={{ margin: "16px 0px 15px" }} className='text-center'>Extend your trading and investment experience even further with our partner platforms</p>
        <div className='col-1'></div>
        <div className='col-3 p-3 text-center text-muted img-fluid'>
          <img src='media/images/zerodhaFundhouse.png'   style={{height:"55px"}}/>
          <p>Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.
          </p>
        </div>
        <div className='col-1'></div>
        <div className='col-3 p-3 text-center text-muted img-fluid'>
          <img src='media/images/sensibullLogo.svg'  style={{height:"55px"}} />
          <p> Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more.</p>
        </div>
        <div className='col-1'></div>
        <div className='col-3 p-3 text-center text-muted img-fluid'>
          <img src='media/images/goldenpiLogo.png'style={{height:"55px"}} />
          <p>Investment research platform
            that offers detailed insights on stocks,
            sectors, supply chains, and more.
          </p>
        </div>
        
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-3 p-3 text-center text-muted img-fluid'>
            <img src='media/images/streakLogo.png'  style={{height:"55px"}}/>
            <p>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
          </div>
          <div className='col-1'></div>
          <div className='col-3 p-3 text-center text-muted img-fluid'>
            <img src='media/images/smallcaseLogo.png'  style={{height:"55px"}}/>
            <p>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
          </div>
          <div className='col-1'></div>
          <div className='col-3 p-3 text-center text-muted img-fluid'>
            <img src='media/images/dittoLogo.png'  style={{height:"55px"}}/>
            <p>Personalized advice on life
and health insurance. No spam
and no mis-selling.
</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Universe
