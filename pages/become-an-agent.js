import React from 'react'

const BecomeAnAgent = ()=> {
    return (
        <>
         <img className="account-hero" src="./assets/images/account-hero.svg" alt="account-hero-background"></img>
             <section className="fill-place quote agent become-agent">
        <h1>Apply to Become Agent</h1>
        <form action="" method="post" className="home-form">
            <div className="step active">

                <div className="form-group half">
                    <input className="predefined" type="text" name="fname" placeholder="First Name"/>
                </div>
                <div className="form-group half">
                    <input className="input-error" type="text" name="lname" placeholder="Last Name"/>
                </div>

                <div className="form-group half">
                    <input type="email" name="email" placeholder="Email"/>
                </div>
                <div className="form-group half">
                    <input type="text" name="agency-name" placeholder="Agency Name"/>
                </div>

                <div className="form-group">
                    <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Mobile (000-000-0000)"/>
                </div>

                <div className="form-group">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">State</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">State</div>
                            <div className="options">
                                <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">How did you hear about us?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">How did you hear about us?</div>
                            <div className="options">
                                <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">Which comparative rater do you use?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Which comparative rater do you use?</div>
                            <div className="options">
                                <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group center">
                    <span className="next">SUBMIT</span>
                </div>
            </div>       
        </form>
    </section>
    
        </>
    )
}
export default BecomeAnAgent