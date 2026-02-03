import React from 'react'

const Stats = () => {
  return (
    <div className='container p-5'>
      <div className='row p-5'>
        <div className='col-6 p-5'>
          <h1 className='fs-2 mb-5'>Trust with confidence</h1>
          <div>
            <h2 className='fs-4 mb-2'> Customer-first always</h2>
            <p className='text-muted'>That's why 13+ crore customers trust Zerodha with 3.5+ lakh crores worth of equality investements.</p>
          </div>
          <div>
            <h2 className='fs-4 '>  No spam or gimmicks</h2>
            <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
          </div>
          <div>
            <h2 className='fs-4'> The Zerodha universe</h2>
            <p className='text-muted'>TNot just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          </div>
          <div>
            <h2 className='fs-4'> DO better with money</h2>
            <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>
        </div>
        <div className='col-6 p-5'>
          <img src='media/images/ecosystem.png' alt='ecosytemimage' style={{ width: "90%" }} className='img-fluid' />
          <div className='text-center'>
            <a href='/' style={{textDecoration:"none"}}>Explore our products  <i class="fa-solid fa-arrow-right-long"></i></a> &nbsp;  &nbsp;
            <a href='/' style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Stats
