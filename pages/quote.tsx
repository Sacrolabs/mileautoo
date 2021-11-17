import React from 'react'
import Script from 'next/script'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Form from 'react-jsonschema-form'


import CustomerForm from '../components/Form/CustomerForm'
import VehicleForm from '../components/Form/VehicleForm'
import DriversForm from '../components/Form/DriversForm'
import CoverageForm from '../components/Form/CoverageForm'
import PurchaseForm from '../components/Form/PurchaseForm'
import PurchaseFormIndex from '../components/PurchaseFormIndex'
import MultiForm from '../components/Form/MultiFrom'


const Quote = ()=> {

    return (
  <>

    <meta charSet="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <title>Quote Page</title>

    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
   
    {/* <link rel="stylesheet" href="./assets/css/quotetest.css"/> */}
    <link rel="stylesheet" href="./assets/css/glider.min.css" />
    <link rel="stylesheet" href="./assets/css/hometest.css" />

            
             
     {/* <section className="fill-place quote"> */}
     <section className="footer-form">
     <div className="wrapper">
        <h1 className="not-last-page">Receive a Quote</h1>
        <h2 className="not-last-page">Please use the form below to receive a tailored quote, and note that <br/><span>you will need your drivers license number and current insurance information</span>, if applicable.</h2>
       
        {/* <div className="form-steps not-last-page">
            <div data-step="1" className="step active"><h3>1. Your Info</h3></div>
            <div data-step="2" className="step"><h3>2. Your Vehicle</h3></div>
            <div data-step="3" className="step"><h3>3. Your Drivers</h3></div>
            <div data-step="4" className="step"><h3>4. Your Coverage</h3></div>
            <div data-step="5" className="step"><h3>5. Purchase</h3></div>
        </div> */}

        <h1 className="last-page last-page-title hidden">Your Quote Summary</h1>

        {/* <form action="" method="post" className="home-form"> */}
           


        {/* <form className="home-form"> */}
        <div className="home-form">
        <div data-step="1" className="step information active">
               
               <div className="form-group">
                   <h4>Your Information</h4>
               </div>

              <MultiForm/>

               {/* <CustomerForm /> */}

               {/* <VehicleForm /> */}
               
               {/* <DriversForm />          */}
               
                {/* <CoverageForm />         */}

                {/* <PurchaseFormIndex/> */}
                        
            

               {/* End First form */}


               {/* <div className="form-group center">
                   <span className="next next-step">CONTINUE</span>
               </div> */}
           </div>

       {/* </form> */}
        </div>
        

           
        {/* </form> */}
        </div>
    </section>
     
      {/* <Script src="./assets/js/quotetest.js"></Script> */}

      <Script src="./assets/js/glider.min.js"></Script>
      <Script src="./assets/js/hometest.js"></Script>
        </>
    )
}

export default Quote
