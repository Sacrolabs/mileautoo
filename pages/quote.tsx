import React from 'react'
import Script from 'next/script'
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import MultiFormDemo from '../components/Form/MultiFormDemo'
import MultiForm from '../components/Form/MultiFrom'

const Quote = () => {
  return (
    <>
      <meta charSet="UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Quote Page</title>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
      {/* <link rel="stylesheet" href="./assets/css/quote.css"/> */}
      <link rel="stylesheet" href="./assets/css/quotetest.css"/>
      <section className="fill-place quote">
          <h1 className="not-last-page">Receive a Quote</h1>
          <h2 className="not-last-page">Please use the form below to receive a tailored quote, and note that <br/><span>you will need your drivers license number and current insurance information</span>, if applicable.</h2> 
          <div className="form-steps not-last-page">
              <div className="step"><h3>1. Your Info</h3></div>
              <div className="step"><h3>2. Your Vehicle</h3></div>
              <div className="step"><h3>3. Your Drivers</h3></div>
              <div className="step"><h3>4. Your Coverage</h3></div>
              <div className="step"><h3>5. Purchase</h3></div>
          </div>
          {/* <h1 className="last-page last-page-title hidden">Your Quote Summary</h1> */}

          {/* <form action="" method="post" className="home-form"> */}        
  {/* <MultiFormDemo/> */}
          <section className="home-form">
            {/* <div data-step="1" className="step information active"> */}
            <div className="step information ">     
              <div className="form-group">
                  {/* <h4>Your Information</h4> */}
              </div>
              <MultiForm/>
            </div>
        </section>
      </section>
      
        {/* <Script src="./assets/js/quote.js"></Script> */}
        
        {/* <Script src="./assets/js/quotetest.js"></Script> */}
    </>
  )
}

export default Quote
