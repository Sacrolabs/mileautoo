import React from 'react'

const Save = ()=> {
    return (
        <>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Quote Page</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="./assets/css/quote.css"></link>

         <img className="account-hero" src="./assets/images/account-hero.svg" alt="account-hero-background"></img>
       <section className="fill-place quote saves">
        <h1>Here's How Much You Could <br/>be Saving With Mile Auto:</h1>
        <form action="" method="post" className="home-form">
            <div className="step active">
                <div className="form-group price-block">
                    <h2>$1022 Per Year</h2>
                    <p>(That's roughly 341 cups of coffee)</p>
                </div>
                <div className="form-group text">
                    <p>Stop overpaying for traditional insurance and make the switch today.</p>
                    <p>Let's personalize your policy by entering a bit more information:</p>
                </div>
                <div className="form-group half">
                    <input type="date" name="dob" placeholder="Date of Birth"/>
                </div>
                <div className="form-group half">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">Gender</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Gender</div>
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
                <div className="form-group half">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">Marital Status</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Marital Status</div>
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
                <div className="form-group half">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">How’s Your Credit?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">How’s Your Credit?</div>
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
                <div className="form-group half">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">Is your car owned, leased, or financed?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Is your car owned, leased, or financed?</div>
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
                <div className="form-group half">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">What year is your car?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">What year is your car?</div>
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
                <div className="form-group half">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">What is your car’s make?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">What is your car’s make?</div>
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
                <div className="form-group half">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">What model is your car?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">What model is your car?</div>
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
                <div className="form-group half">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">Do you currently have insurance?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Do you currently have insurance?</div>
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
                <div className="form-group half">
                    <input type="text" name="agent-code" placeholder="Agent Code (Optional)"/>
                </div>


                <div className="form-group center">
                    <span className="next">GET QUICK QUOTE</span>
                </div>
            </div>
            
        </form>
    </section>
     
    <script src="./assets/js/quote.js"></script>
        </>
    )
}

export default Save
