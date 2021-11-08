import React from 'react'
import AgentForm from '../components/Form/AgentForm'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

const AgentPage = ()=> {
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
           
        <section className="fill-place quote agent">
        <h1>Get a Quick Quote to Estimate <br/>Pay-Per-Mile Savings for Your Customers.</h1>
       
     

         <form action="" method="post" className="home-form">
            <div className="step active">
            <AgentForm/>
{/* 
                <div className="form-group third">
                    <input className="predefined" type="number" name="zip" placeholder="Zip Code"/>
                </div>
                <div className="form-group third">
                    <input className="predefined" required type="date" name="dob" placeholder="Date of Birth"/>
                </div>
                <div className="form-group third">
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
                            <div className="screen predefined">Gender</div>
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

                <div className="form-group third">
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
                <div className="form-group two-thirds">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">How is your credit?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">How is your credit?</div>
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
                            <option value="">Is your car owned, leased, financial?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Is your car owned, leased, financial?</div>
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
                    <input className="input-error" type="text" name="milesperyear" placeholder="Annual Mileage"/>
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
                    <input type="text" name="agent-code" placeholder="Agent code (Optional)"/>
                </div>

                <div className="form-group center">
                    <span className="next">GET QUICK QUOTE</span>
                </div> */}
            </div>       
        </form>
         
    </section>

    <section className="existing-agent">
        <h2>Existing Agent?</h2>
        <div className="buttons">
            <a href="#" className="button transparent">ACCESS AGENT PORTAL</a>
            <a href="#" className="button green">BECOME AN AGENT</a>
        </div>
    </section>
      <script src="./assets/js/quote.js"></script>
        </>
    )
}

export default AgentPage
