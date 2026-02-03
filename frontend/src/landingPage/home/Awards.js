import React from 'react'

const Awards = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className='row '>
        <div className='col-6 p-5'>
          <img src='media/images/largestBroker.svg' alt='largestbrokerimage' className='img-fluid' />
        </div>
        <div className='col-6 p-5 mt-5'>
          <h1>Largest stock broker in India</h1>
          <p className='mb-5'>2+ million Zerodha clients contributes to over 15% of all retail order volumes in Indian by trading and investing in:</p>
          <div className='row '>
            <div className='col-6 '>
              <ul>
                <li>Futures and Options</li> <br/>
                <li>Commodity derivatives</li>
                <br/>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li>Stocks & IPOs</li> <br/>
                <li>Direct mutual funds</li> <br/>
                <li>Bonds and</li>
              </ul>
            </div>
          </div>
          <img src='media/images/pressLogos.png' alt='presslogoimage' className='img-fluid' style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  )
}

export default Awards
