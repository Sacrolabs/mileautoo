import React from 'react'

// import Form from 'react-jsonschema-form'


import CustomerForm from '../components/Form/CustomerForm'

const Quote = ()=> {

  




    return (
        <>

    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Quote Page</title>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="./assets/css/quote.css"/>

             <section className="fill-place quote">
        <h1 className="not-last-page">Receive a Quote</h1>
        <h2 className="not-last-page">Please use the form below to receive a tailored quote, and note that <br/><span>you will need your drivers license number and current insurance information</span>, if applicable.</h2>
       
        <div className="form-steps not-last-page">
            <div data-step="1" className="step active"><h3>1. Your Info</h3></div>
            <div data-step="2" className="step"><h3>2. Your Vehicle</h3></div>
            <div data-step="3" className="step"><h3>3. Your Drivers</h3></div>
            <div data-step="4" className="step"><h3>4. Your Coverage</h3></div>
            <div data-step="5" className="step"><h3>5. Purchase</h3></div>
        </div>

        <h1 className="last-page last-page-title hidden">Your Quote Summary</h1>

        {/* <form action="" method="post" className="home-form"> */}
           



        <form className="home-form">
        <div data-step="1" className="step information active">
               
               <div className="form-group">
                   <h4>Your Information</h4>
               </div>

               <CustomerForm />
               {/* <div className="form-group half">
                   <input className="input-error" type="text" name="fname" placeholder="First Name"/>
               </div>
               <div className="form-group half">
                   <input className="predefined" type="text" name="lname" placeholder="Last Name"/>
               </div>
               <div className="form-group third">
                   <input type="text" name="street" placeholder="Street Address"/>
               </div>
               <div className="form-group third">
                   <input type="number" name="zip" placeholder="Zip Code"/>
               </div>
               <div className="form-group third">
                   <input type="text" name="city" placeholder="City"/>
               </div>
               <div className="form-group half">
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
               <div className="form-group half">
                   <input required type="date" name="dob" placeholder="Date of Birth"/>
               </div>
               <div className="form-group half">
                   <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Mobile (000-000-0000)"/>
               </div>
               <div className="form-group half">
                   <input type="tel" name="preffered-contact" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Preferred Contact (000-000-0000)"/>
               </div>
               <div className="form-group half">
                   <div className="select-group">
                       <select name="miles" required>
                           <option value="">How's your credit?</option>
                           <option value="0-1000">Very Low (0-1000 miles)</option>
                           <option value="1000-5000">Low (1000-5000 miles)</option>
                           <option value="5000-10000">Avarage (5000-10000 miles)</option>
                           <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                           <option value="20000+">High (more than 20000 miles)</option>
                       </select>
                       <div className="pretty-select">
                           <div className="screen predefined">How's your credit?</div>
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
                           <option value="">How did you hear about Mile Auto?</option>
                           <option value="0-1000">Very Low (0-1000 miles)</option>
                           <option value="1000-5000">Low (1000-5000 miles)</option>
                           <option value="5000-10000">Avarage (5000-10000 miles)</option>
                           <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                           <option value="20000+">High (more than 20000 miles)</option>
                       </select>
                       <div className="pretty-select">
                           <div className="screen input-error">How did you hear about Mile Auto?</div>
                           <div className="options">
                               <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                               <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                               <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                               <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                               <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                           </div>
                       </div>
                   </div>
               </div> */}

               {/* End First form */}
               <div className="form-group center">
                   <span className="next next-step">CONTINUE</span>
               </div>
           </div>


        </form>
        









            {/* <div data-step="2" className="step vehicle">
                <div className="form-group half">
                    <h4>Your Vehicle</h4>
                </div>
                <div className="form-group half text-right">
                    <span className="action-button">Add Another Vehicle</span>
                </div>
                <div className="form-group d-flex text-with-radio">
                    <p className="info">You can choose to enter your vehicle details as per the two options below. Feel free to choose either one!</p>
                    <div className="radio-selection vehicle-details">
                        <div>
                            <input type="radio" id="yearmakemodel" name="vehicle-details" value="Year/Make/Model" checked/>
                            <label for="yearmakemodel">Year/Make/Model</label>
                        </div>                      
                        <div>
                            <input type="radio" id="vin" name="vehicle-details" value="VIN"/>
                            <label for="vin">VIN</label>
                        </div>
                    </div>
                </div>

                <div className="form-group third yearmakemodel">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">Year</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Year</div>
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
                <div className="form-group third yearmakemodel">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">Make</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Make</div>
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
                <div className="form-group third yearmakemodel">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">Model</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Model</div>
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

                <div className="form-group vin hidden">
                    <input type="text" name="vin" placeholder="VIN"/>
                </div>
                

                <div className="form-group half">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">Style (Body Style/Trim Level)</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Style (Body Style/Trim Level)</div>
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
                            <option value="">Does this vehicle have existing damage?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Does this vehicle have existing damage?</div>
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
                            <option value="">Is your vehicle owned, leased, or financed?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Is your vehicle owned, leased, or financed?</div>
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
                            <option value="">What is your vehicle’s primary use?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">What is your vehicle’s primary use?</div>
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
                    <input type="text" name="how-many-miles-per-year" placeholder="How many miles do you drive annualy?"/>
                </div>

                <div className="form-group half">
                    <span className="back prev-step">BACK</span>
                </div>
                <div className="form-group half">
                    <span className="next next-step">CONTINUE</span>
                </div>
            </div>

            <div data-step="3" className="step driver">
                <div className="form-group half">
                    <h4>Your Drivers</h4>
                </div>
                <div className="form-group half text-right">
                    <span className="action-button">Add Another Driver</span>
                </div>

                <div className="form-group half">
                    <input type="text" name="driver-fname" placeholder="First Name"/>
                </div>
                <div className="form-group half">
                    <input type="text" name="driver-lname" placeholder="Last Name"/>
                </div>

                <div className="form-group third">
                    <input type="email" name="driver-email" placeholder="Email"/>
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


                <div className="form-group half">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">Do your own or rent your home?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Do your own or rent your home?</div>
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
                            <option value="">Level of Education</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Level of Education</div>
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
                            <option value="">Do your currently have auto insurance?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Do your currently have auto insurance?</div>
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
                            <option value="">Any at-fault accidents or convictions?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Any at-fault accidents or convictions?</div>
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
                            <option value="">Would you like to add another driver to this policy?</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Would you like to add another driver to this policy?</div>
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
                    <span className="back prev-step">BACK</span>
                </div>
                <div className="form-group half">
                    <span className="next next-step">CONTINUE</span>
                </div>
            </div>

            <div data-step="4" className="step coverage">
                <div className="form-group">
                    <h4>Your Coverage</h4>
                </div>

                <div className="form-group half">
                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">Bodily Injury (Per Person/Per Incident)</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Bodily Injury (Per Person/Per Incident)</div>
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
                            <option value="">Uninsured Motorist Coverage</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Uninsured Motorist Coverage</div>
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
                            <option value="">Under-insured Motorist Coverage</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Under-insured Motorist Coverage</div>
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
                            <option value="">Comprehensive Deductible</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Comprehensive Deductible</div>
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
                            <option value="">Collision Deductible</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Collision Deductible</div>
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
                            <option value="">Medical Payments (MP) Coverage</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Medical Payments (MP) Coverage</div>
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
                            <option value="">Rental Reimbursement Limit</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Rental Reimbursement Limit</div>
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
                    <input required type="date" name="policy-effective-date" placeholder="Policy Effective Date"/>
                </div>

                <div className="form-group notification">
                    <p>We have created the below package based on your Bodily Injury coverage. If you would like to make further adjustments, please call customer care at <a href="tel:888-645-3001">888-645-3001.</a></p>
                </div>

                <div className="form-group">
                    <h4 style={{marginBottom:'20px'}}>Your Quote</h4>
                </div>

                <div className="form-group half">
                    <div className="card">
                        <span className="remove">Remove</span>
                        <h3 className="card-title">Vehicle</h3>
                        <div className="row">
                            <h4>Model:</h4>
                            <p>2012 Chevrolet Cruze 4-door <br/>Sedan | 4-cylinder | 2WD</p>
                        </div>
                        <div className="row">
                            <h4>VIN:</h4>
                            <p>1G1PC5SH9C7311839</p>
                        </div>
                        <div className="row">
                            <h4>Base Charge:</h4>
                            <p>$68.42 per month</p>
                        </div>
                        <div className="row">
                            <h4>Per Mile Charge:</h4>
                            <p>$0.072 per mile</p>
                        </div>
                        <div className="row wide-border more-space">
                            <h4>Estimated monthly cost:</h4>
                            <p>$80.44</p>
                        </div>
                        <div className="row">
                            <p className="bottom-text">(Based on your estimated driving of 167 miles per month)</p>
                        </div>
                    </div>
                </div>
                <div className="form-group half">
                    <div className="card single-row">
                        <h3 className="card-title">Total Policy Premium</h3>
                        <div className="row">
                            <h4>Estimated Monthly <br/>Payment (includes fees):</h4>
                            <p className="price with-tooltip">$93.44 <span>Some tooltip</span></p>
                        </div>
                    </div>
                    <div className="card single-row">
                        <h3 className="card-title">Down Payment</h3>
                        <div className="row">
                            <h4>Due Today:</h4>
                            <p className="price with-tooltip">$78.92 <span>Some tooltip2 Some tooltip2 Some tooltip2</span></p>
                        </div>
                    </div>
                    <p className="smaller-text">For your convenience, this quote has been sent to the email address you provided. You can access it anytime by clicking
                        the link in the email, or via the "Retrieve your quote" window
                        on the homepage.</p>
                </div>

                <div className="form-group fourth">
                    <span className="back prev-step">BACK</span>
                </div>
                <div className="form-group fourth">
                    <span className="calculate">Calculate</span>
                </div>
                <div className="form-group half">
                    <span className="next next-step">PURCHASE</span>
                </div>
            </div>

            <div data-step="5" className="step purcahse">
                <div className="form-group">
                    <h4>Your Quote</h4>
                </div>

                <div className="form-group bigger-notification">
                    <p>To prepare your Mile Auto policy, we need to finalize just a few more details. We will also verify your driving history and other information as permitted by the laws in your state, and provide you with a final price before you complete your purchase. Please enter the requested information below.</p>
                </div>

                <div className="form-group">
                    <h4 style={{marginBottom:'20px'}}>Verify Your Drivers’ License Data</h4>
                </div>

                <div className="form-group half">
                    <div className="card">
                        <span className="remove">Remove</span>
                        <h3 className="card-title">John Doe</h3>
                        <div className="row input-field">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">License State</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">License State</div>
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
                        <div className="row input-field">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">License Status</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">License Status</div>
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
                        <div className="row input-field">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">License Number</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">License Number</div>
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
                    </div>
                </div>
                <div className="form-group half">
                    <div className="card">
                        <span className="remove">Remove</span>
                        <h3 className="card-title">Mark Doe</h3>
                        <div className="row input-field">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">License State</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">License State</div>
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
                        <div className="row input-field">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">License Status</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">License Status</div>
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
                        <div className="row input-field">
                            <div className="select-group">
                                <select name="miles" required>
                                    <option value="">License Number</option>
                                    <option value="0-1000">Very Low (0-1000 miles)</option>
                                    <option value="1000-5000">Low (1000-5000 miles)</option>
                                    <option value="5000-10000">Avarage (5000-10000 miles)</option>
                                    <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                                    <option value="20000+">High (more than 20000 miles)</option>
                                </select>
                                <div className="pretty-select">
                                    <div className="screen">License Number</div>
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
                    </div>
                </div>


                <div className="form-group half">
                    <span className="back prev-step">BACK</span>
                </div>
                <div className="form-group half">
                    <span className="next next-step">CONTINUE</span>
                </div>
            </div>

            <div data-step="6" className="step summary">
                <div className="form-group price-block">
                    <h2>$798 Per Year</h2>
                    <p>Policy Premium and Fees</p>
                </div>

                <div className="form-group half">
                    <div className="card">
                        <h3 className="card-title">Policy Information</h3>
                        <div className="row">
                            <h4>Policy Number:</h4>
                            <p>12345-67-89</p>
                        </div>
                        <div className="row">
                            <h4>Effective:</h4>
                            <p className="bold green">01/01/2019 12:01 AM</p>
                        </div>
                        <div className="row">
                            <h4>Expiration:</h4>
                            <p className="bold">06/01/2019 12:01 AM</p>
                        </div>
                        <div className="row">
                            <h4>Named Insured(s):</h4>
                            <p>Jack Smith, Jane Smith</p>
                        </div>
                        <div className="row">
                            <h4>Address:</h4>
                            <p>1234 Main St</p>
                        </div>
                        <div className="row">
                            <h4>City:</h4>
                            <p>Brooklyn, NY 11211</p>
                        </div>
                        <div className="row">
                            <h4>Underwritten by:</h4>
                            <p>Farmers Insurance <br/>6301 Owensmouth Ave. <br/>Woodland Hills, CA91367</p>
                        </div>

                    </div>
                </div>
                <div className="form-group half">
                    <div className="card single-row no-row-borders shorter-rows">
                        <h3 className="card-title">Premium/Fees</h3>
                        <div className="row">
                            <h4>Policy Premium:</h4>
                            <p className="price">$797.60</p>
                        </div>
                        <div className="row">
                            <h4>Fees:</h4>
                            <p className="price">$0.88</p>
                        </div>
                        <div className="row longer">
                            <h4 className="bold green">Policy Premium + Fees</h4>
                            <p className="price bold green">$798.48</p>
                        </div>
                        <div className="row card-notification">
                            <h4>This is not a bill.</h4>
                            <p>Your bill with the amount due will be mailed separately.</p>
                        </div>
                    </div>
                    <img className="grey-logo" src="./assets/images/logo.png" alt="logo"/>
                </div>

                <div className="form-group">
                    <div className="card single-row no-row-borders shorter-rows">
                        <h3 className="card-title">Household Drivers</h3>
                        <div className="card-halfs">
                            <div className="form-group half">
                                <p>All persons who drive or will occasioanlly
                                    be driving any of the cars on the policy should be listed here. If anyone is missing
                                    or needs to be added, such as newly
                                    licensed driver, you should contact your agent or the company to add that person before they begin to drive any of the cars covered on the policy.</p>
                            </div>
                            <div className="form-group half">
                                <table className="two-cols">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Driver Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Jack Smith</td>
                                            <td className="bold green">Covered</td>
                                        </tr>
                                        <tr>
                                            <td>Jack Smith Jr.</td>
                                            <td className="bold green">Covered</td>
                                        </tr>
                                        <tr>
                                            <td>Jack Smith</td>
                                            <td className="bold green">Covered</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group table-group">
                    <div className="card single-row no-row-borders shorter-rows">
                        <h3 className="card-title">Vehicle Information</h3>
                        <table className="only-table">
                            <thead>
                                <tr>
                                    <th>Veh. #</th>
                                    <th>Year/Make/Model/VIN</th>
                                    <th>Coverage</th>
                                    <th>Deductible</th>
                                    <th>Limit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2019 Porsche Macan 4D 4WD <br/>WP1AA1234567890</td>
                                    <td>Comprehensive</td>
                                    <td>$500</td>
                                    <td>ACV</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Collision</td>
                                    <td>$1,000</td>
                                    <td>ACV</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Additional Equipment</td>
                                    <td></td>
                                    <td>$1,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="form-group table-group">
                    <div className="card single-row no-row-borders shorter-rows">
                        <span className="remove">Change</span>
                        <h3 className="card-title">Coverage Information</h3>
                        <table className="only-table">
                            <thead>
                                <tr>
                                    <th>Coverage</th>
                                    <th>Limits</th>
                                    <th>Vehicle 1</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bodily Injury</td>
                                    <td>$250K each person/$500K each incident</td>
                                    <td>$301.50</td>
                                </tr>
                                <tr>
                                    <td>Property Damage</td>
                                    <td>$100K each incident</td>
                                    <td>Included</td>
                                </tr>
                                <tr>
                                    <td>Permissive User Limit of Liablity</td>
                                    <td>Full</td>
                                    <td>$17.00</td>
                                </tr>
                                <tr>
                                    <td>Medical Coverage</td>
                                    <td>$5,000 each person</td>
                                    <td>$66.50</td>
                                </tr>
                                <tr>
                                    <td>Uinsured Motorist Bodily Injury</td>
                                    <td>$250K each person/$500K each incident</td>
                                    <td>$44.50</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="form-group half">
                    <span className="back prev-step">BACK</span>
                </div>
                <div className="form-group half">
                    <span className="next">CONFIRM</span>
                </div>
            </div>
             */}
        {/* </form> */}
    </section>
     
      <script src="./assets/js/quote.js"></script>
        </>
    )
}

export default Quote
