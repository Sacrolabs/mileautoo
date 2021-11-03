import React from 'react'

const Estimate = ()=> {
    return (
        <>
      <img className="account-hero" src="./assets/images/account-hero.svg" alt="account-hero-background"></img>           
    <section className="fill-place quote estimate">
        <h1>Your Estimated Monthly Rate:</h1>
        <form action="" method="post" className="home-form">
            <div className="step active">
                <div className="form-group price-block">
                    <div className="left">
                        <h2>$41.94</h2>
                        <p>Monthly Based Rate</p>
                    </div>
                    <div className="center">
                        <h2>+</h2>
                    </div>
                    <div className="right">
                        <h2>$0.04</h2>
                        <p>Per Mile Rate</p>
                    </div>
                </div>
                <div className="form-group text">
                    <p>That’s only <b>$47.95</b> per month based on your <br/>estimate of 2000 miles per year.</p>
                    <p>To finalize your quote, we need a bit more <br/>information about you and your vehicle.</p>
                </div>

                <div className="form-group center">
                    <span className="next">GET A FULL QUOTE</span>
                </div>
            </div>
            
        </form>
    </section>
    
        </>
    )
}
export default Estimate