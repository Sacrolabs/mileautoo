// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const Home = ()=> {
  return (
    <>

           <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* <title>Home</title> */}
            <link rel="stylesheet" href="./assets/css/glider.min.css" />
            <link rel="stylesheet" href="./assets/css/home.css" />

       <section className="hero">
        <div className="wrapper">
            <img className="man-with-car" src="./assets/images/man-car-mountain-new.svg" alt="man-car-mountain" />
            <h1>Driving Less? <br/>Then Pay Less.</h1>
            <p>See how much you could save with <br/><b>Pay-Per-Mile</b> insurance from Mile Auto.</p>
            <div className="home-form">
                <h2>How much can I save with Mile Auto?</h2>
                <form action="" method="post">
                    <input type="number" name="zip" placeholder="Zip Code" required/>

                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">Miles You Drive per Year</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Miles You Drive per Year</div>
                            <div className="options">
                                <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                            </div>
                        </div>
                    </div>

                    <div className="select-group">
                        <select name="insurance" required>
                            <option value="">Your Monthly Insurance Payment</option>
                            <option value="0-20">Very Low (0-20$)</option>
                            <option value="20-60">Low (20-60$)</option>
                            <option value="60-180">Avarage (60-180$)</option>
                            <option value="180-250">Above Avarage (180-250$)</option>
                            <option value="250+">High (more than 250$)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Your Monthly Insurance Payment</div>
                            <div className="options">
                                <div className="pretty-option" data-value="0-20"><b>Very Low</b> (0-20$)</div>
                                <div className="pretty-option" data-value="20-60"><b>Low</b> (20-60$)</div>
                                <div className="pretty-option" data-value="60-180"><b>Avarage</b> (60-180$)</div>
                                <div className="pretty-option" data-value="180-250"><b>Above Avarage</b> (180-250$)</div>
                                <div className="pretty-option" data-value="250+"><b>High</b> (more than 250$)</div>
                            </div>
                        </div>
                    </div>

                    <input type="submit" value="SEE MY SAVINGS"/>
                </form>
            </div>
        </div>
    </section>
    
    <section className="as-seen">
        <div className="wrapper">
            <h2>As Seen In</h2>
            <div className="icons">
                <img loading="lazy" src="./assets/images/inc.png" alt="inc"/>
                <img loading="lazy" src="./assets/images/yahoo.png" alt="yahoo"/>
                <img loading="lazy" src="./assets/images/forbes.png" alt="forbes"/>
                <img loading="lazy" src="./assets/images/moneywise.png" alt="moneywise"/>
            </div>
        </div>
        <img className="bg" loading="lazy" src="./assets/images/bg-grey-1.svg" alt="bg-grey"/>
    </section>

    <section className="easy-to-use">
        <div className="wrapper">
            <div className="left">
                <img loading="lazy" src="./assets/images/man-with-car.svg" alt="man-with-car"/>
            </div>
            <div className="right">
                <h2>Easy to Use <br/>Pay-Per-Mile Insurance</h2>
                <span className="subtitle">Low-Mileage Drivers Can Save 30-40%*</span>
                <p>65% of us drive less than 10,000 miles a year. If that’s you, you’re probably paying too much for car insurance.</p>
            </div>
        </div>
    </section>

    <section className="we-charge">
        <div className="wrapper">
            <div className="left">
                <h2>We Charge Pennies <br/>and Value Privacy.</h2>
                <span className="subtitle">You only pay for what you use.</span>
                <p>The less you drive, the more you save. And we don’t ask you to install a “black box” tracking device in your car, so where you go, how you drive, and where you and your car sleep at night is your business, not your insurance company’s.</p>
            </div>
            <div className="right">
                <img loading="lazy" src="./assets/images/piggybank.svg" alt="piggybank"/>
            </div>
        </div>
        <img className="bg" loading="lazy" src="./assets/images/bg-grey-2.svg" alt="bg-grey"/>
    </section>

    <section className="reviews">
        <div className="wrapper">
            <div className="slider">
                <div className="slide">
                    <div className="card">
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis, diam nec viverra accumsan, elit eros lacinia magna, eu euismod leo eros nec arcu.”</p>
                        <span className="role">- john Doe</span>
                    </div>
                </div>
                <div className="slide">
                    <div className="card">
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis, diam nec viverra accumsan, elit eros lacinia magna, eu euismod leo eros nec arcu.”</p>
                        <span className="role">- john Doe</span>
                    </div>
                </div>
                <div className="slide">
                    <div className="card">
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis, diam nec viverra accumsan, elit eros lacinia magna, eu euismod leo eros nec arcu.”</p>
                        <span className="role">- john Doe</span>
                    </div>
                </div>
                <div className="slide">
                    <div className="card">
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis, diam nec viverra accumsan, elit eros lacinia magna, eu euismod leo eros nec arcu.”</p>
                        <span className="role">- john Doe</span>
                    </div>
                </div>
            </div>
            <div className="fancy-buttons buttons">
                <button aria-label="Previous" className="reviews-prev prev"></button>
                <button aria-label="Next" className="reviews-next next"></button>
            </div>
        </div>
    </section>

    <section className="new-kind">
        <div className="wrapper">
            <h2>A New Kind of Car Insurance</h2>
            <div className="cards">
                <div className="col">
                    <div className="card left">
                        <img loading="lazy" src="./assets/images/icon-image-frame.svg" alt="icon-image-frame"/>
                        <div className="green">
                            <h3>1. Snap.</h3>
                            <p>Once a month, send us a photo <br/>of your odometer. <em>That’s it.</em></p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card center">
                        <img loading="lazy" src="./assets/images/icon-money-bag.svg" alt="icon-money-bag"/>
                        <div className="green">
                            <h3>2. Save.</h3>
                            <p>Pay only for the miles you drive <br/>plus your base rate. <em>No surprises.</em></p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card right">
                        <img loading="lazy" src="./assets/images/icon-smile.svg" alt="icon-smile"/>
                        <div className="green">
                            <h3>3. Smile.</h3>
                            <p>Enjoy some extra money in your <br/>pocket, and know we’re there for <br/>you if you need us.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="chain-wrapper">
            <img loading="lazy" className="chain" src="./assets/images/bg-chain.svg" alt="chain"/>
            <div className="shadow"></div>
        </div>
    </section>

    <section className="big-fans">
        <div className="wrapper">
            <div className="left">
                <h2>We’re Big Fans of <br/>Fairness and Transparency.</h2>
                <span className="subtitle">We’re Also Auto Insurance Experts.</span>
                <p>And we know a secret: low-mileage drivers pay more than their fair share to cover their high-mileage counterparts. We created Mile to give those drivers transparency into their costs, control over their data, and unmatched customer service, all at a fair price.</p>
            </div>
            <div className="right">
                <img loading="lazy" src="./assets/images/man-on-car.svg" alt="man-on-car"/>
            </div>
        </div>
        <img className="bg" loading="lazy" src="./assets/images/bg-grey-3.svg" alt="bg-grey"/>
    </section>

    <section className="trustpilot">
        <div className="wrapper">
            <div className="col left">
                <div className="card">
                    <div className="top">
                        <img className="photo" loading="lazy" src="./assets/images/jane.png" alt="jane"/>
                        <div className="stars">
                            <img loading="lazy" src="./assets/images/star-green.svg" alt="star-green"/>
                            <img loading="lazy" src="./assets/images/star-green.svg" alt="star-green"/>
                            <img loading="lazy" src="./assets/images/star-green.svg" alt="star-green"/>
                            <img loading="lazy" src="./assets/images/star-green.svg" alt="star-green"/>
                            <img loading="lazy" src="./assets/images/star-green.svg" alt="star-green"/>
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="author"><b>Jane</b> reviewed <br/>websitename.org</p>
                        <p className="content">“Nullam mi orci, condimentum at
                            magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem
                            ipsum dolor sit amet.”</p>
                    </div>
                </div>
            </div>
            <div className="col middle">
                <div className="card">
                    <div className="top">
                        <img className="photo" loading="lazy" src="./assets/images/john.png" alt="john"/>
                        <div className="stars">
                            <img loading="lazy" src="./assets/images/star-green.svg" alt="star-green"/>
                            <img loading="lazy" src="./assets/images/star-green.svg" alt="star-green"/>
                            <img loading="lazy" src="./assets/images/star-green.svg" alt="star-green"/>
                            <img loading="lazy" src="./assets/images/star-green.svg" alt="star-green"/>
                            <img loading="lazy" src="./assets/images/star-green.svg" alt="star-green"/>
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="author"><b>John</b> reviewed <br/>websitename.org</p>
                        <p className="content">“Nullam mi orci, condimentum at
                            magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem
                            ipsum dolor sit amet.”</p>
                    </div>
                </div>
            </div>
            <div className="col right">
                <div className="card">
                    <div className="top">
                        <img className="photo" loading="lazy" src="./assets/images/jerry.png" alt="jerry"/>
                        <div className="stars">
                            <img loading="lazy" src="./assets/images/star-orange.svg" alt="star-orange"/>
                            <img loading="lazy" src="./assets/images/star-orange.svg" alt="star-orange"/>
                            <img loading="lazy" src="./assets/images/star-orange.svg" alt="star-orange"/>
                            <img loading="lazy" src="./assets/images/star-grey.svg" alt="star-grey"/>
                            <img loading="lazy" src="./assets/images/star-grey.svg" alt="star-grey"/>
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="author"><b>Jerry</b> reviewed <br/>websitename.org</p>
                        <p className="content">“Nullam mi orci, condimentum at
                            magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem
                            ipsum dolor sit amet.”</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="team">
        <div className="wrapper">
            <h2>Our Team</h2>
            <h3>100% US Owned and Operated</h3>
            <div className="slider">
                
                <div className="slide">
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="top">
                                <div className="left">
                                    <img loading="lazy" src="./assets/images/john.png" alt="john" />
                                </div>
                                <div className="right">
                                    <h4>John</h4>
                                    <span className="role">— Title Here</span>
                                </div>
                            </div>
                            <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                        </div>
    
                        <div className="card">
                            <div className="top">
                                <div className="left">
                                    <img loading="lazy" src="./assets/images/john.png" alt="john" />
                                </div>
                                <div className="right">
                                    <h4>John</h4>
                                    <span className="role">— Title Here</span>
                                </div>
                            </div>
                            <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                        </div>
    
                        <div className="card">
                            <div className="top">
                                <div className="left">
                                    <img loading="lazy" src="./assets/images/john.png" alt="john" />
                                </div>
                                <div className="right">
                                    <h4>John</h4>
                                    <span className="role">— Title Here</span>
                                </div>
                            </div>
                            <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                        </div>
    
                        <div className="card">
                            <div className="top">
                                <div className="left">
                                    <img loading="lazy" src="./assets/images/john.png" alt="john" />
                                </div>
                                <div className="right">
                                    <h4>John</h4>
                                    <span className="role">— Title Here</span>
                                </div>
                            </div>
                            <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                        </div>
    
                        <div className="card">
                            <div className="top">
                                <div className="left">
                                    <img loading="lazy" src="./assets/images/john.png" alt="john" />
                                </div>
                                <div className="right">
                                    <h4>John</h4>
                                    <span className="role">— Title Here</span>
                                </div>
                            </div>
                            <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                        </div>
    
                        <div className="card">
                            <div className="top">
                                <div className="left">
                                    <img loading="lazy" src="./assets/images/john.png" alt="john" />
                                </div>
                                <div className="right">
                                    <h4>John</h4>
                                    <span className="role">— Title Here</span>
                                </div>
                            </div>
                            <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                        </div>
                    </div>
                </div>

                <div className="slide">
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="top">
                                <div className="left">
                                    <img loading="lazy" src="./assets/images/john.png" alt="john" />
                                </div>
                                <div className="right">
                                    <h4>John</h4>
                                    <span className="role">— Title Here</span>
                                </div>
                            </div>
                            <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                        </div>
    
                        <div className="card">
                            <div className="top">
                                <div className="left">
                                    <img loading="lazy" src="./assets/images/john.png" alt="john" />
                                </div>
                                <div className="right">
                                    <h4>John</h4>
                                    <span className="role">— Title Here</span>
                                </div>
                            </div>
                            <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                        </div>
    
                        <div className="card">
                            <div className="top">
                                <div className="left">
                                    <img loading="lazy" src="./assets/images/john.png" alt="john" />
                                </div>
                                <div className="right">
                                    <h4>John</h4>
                                    <span className="role">— Title Here</span>
                                </div>
                            </div>
                            <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                        </div>
    
                        <div className="card">
                            <div className="top">
                                <div className="left">
                                    <img loading="lazy" src="./assets/images/john.png" alt="john" />
                                </div>
                                <div className="right">
                                    <h4>John</h4>
                                    <span className="role">— Title Here</span>
                                </div>
                            </div>
                            <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                        </div>
    
                        <div className="card">
                            <div className="top">
                                <div className="left">
                                    <img loading="lazy" src="./assets/images/john.png" alt="john" />
                                </div>
                                <div className="right">
                                    <h4>John</h4>
                                    <span className="role">— Title Here</span>
                                </div>
                            </div>
                            <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                        </div>
    
                        <div className="card transparent"></div>
    
                    </div>
                </div>

            </div>
            <div className="fancy-buttons buttons">
                <button aria-label="Previous" className="team-prev prev"></button>
                <button aria-label="Next" className="team-next next"></button>
            </div>
            <div className="all">
                <div className="card-wrapper">
                    <div className="card">
                        <div className="top">
                            <div className="left">
                                <img loading="lazy" src="./assets/images/john.png" alt="john" />
                            </div>
                            <div className="right">
                                <h4>John</h4>
                                <span className="role">— Title Here</span>
                            </div>
                        </div>
                        <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                    </div>

                    <div className="card">
                        <div className="top">
                            <div className="left">
                                <img loading="lazy" src="./assets/images/john.png" alt="john" />
                            </div>
                            <div className="right">
                                <h4>John</h4>
                                <span className="role">— Title Here</span>
                            </div>
                        </div>
                        <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                    </div>

                    <div className="card">
                        <div className="top">
                            <div className="left">
                                <img loading="lazy" src="./assets/images/john.png" alt="john" />
                            </div>
                            <div className="right">
                                <h4>John</h4>
                                <span className="role">— Title Here</span>
                            </div>
                        </div>
                        <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                    </div>

                    <div className="card">
                        <div className="top">
                            <div className="left">
                                <img loading="lazy" src="./assets/images/john.png" alt="john" />
                            </div>
                            <div className="right">
                                <h4>John</h4>
                                <span className="role">— Title Here</span>
                            </div>
                        </div>
                        <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                    </div>

                    <div className="card">
                        <div className="top">
                            <div className="left">
                                <img loading="lazy" src="./assets/images/john.png" alt="john" />
                            </div>
                            <div className="right">
                                <h4>John</h4>
                                <span className="role">— Title Here</span>
                            </div>
                        </div>
                        <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                    </div>

                    <div className="card">
                        <div className="top">
                            <div className="left">
                                <img loading="lazy" src="./assets/images/john.png" alt="john" />
                            </div>
                            <div className="right">
                                <h4>John</h4>
                                <span className="role">— Title Here</span>
                            </div>
                        </div>
                        <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                    </div>

                    <div className="card">
                        <div className="top">
                            <div className="left">
                                <img loading="lazy" src="./assets/images/john.png" alt="john" />
                            </div>
                            <div className="right">
                                <h4>John</h4>
                                <span className="role">— Title Here</span>
                            </div>
                        </div>
                        <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                    </div>

                    <div className="card">
                        <div className="top">
                            <div className="left">
                                <img loading="lazy" src="./assets/images/john.png" alt="john" />
                            </div>
                            <div className="right">
                                <h4>John</h4>
                                <span className="role">— Title Here</span>
                            </div>
                        </div>
                        <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                    </div>

                    <div className="card">
                        <div className="top">
                            <div className="left">
                                <img loading="lazy" src="./assets/images/john.png" alt="john" />
                            </div>
                            <div className="right">
                                <h4>John</h4>
                                <span className="role">— Title Here</span>
                            </div>
                        </div>
                        <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                    </div>

                    <div className="card">
                        <div className="top">
                            <div className="left">
                                <img loading="lazy" src="./assets/images/john.png" alt="john" />
                            </div>
                            <div className="right">
                                <h4>John</h4>
                                <span className="role">— Title Here</span>
                            </div>
                        </div>
                        <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                    </div>

                    <div className="card">
                        <div className="top">
                            <div className="left">
                                <img loading="lazy" src="./assets/images/john.png" alt="john" />
                            </div>
                            <div className="right">
                                <h4>John</h4>
                                <span className="role">— Title Here</span>
                            </div>
                        </div>
                        <p>“Nullam mi orci, condimentum at magna ut, faucibus gravida nulla. Curabitur aliquet, sapien. Lorem ipsum dolor sit amet.”</p>
                    </div>

                    <div className="card transparent"></div>
                </div>
            </div>
            <div className="all-button-wrapper">
                <a href="#" className="show-all">VIEW ALL</a>
            </div>
        </div>
    </section>

    <section className="faq">
        <div className="wrapper">
            <h2>Still Have Questions?</h2>
            <div className="qas">
                <div className="qa">
                    <div className="q">1. Are you legit?</div>
                    <div className="a">100%. We’re experienced experts in the auto insurance field and our policies are underwritten by an AMBest “Excellent” rated national insurance company and backed by one of the world’s largest reinsurers.</div>
                </div>

                <div className="qa">
                    <div className="q">2. How does Mile work?</div>
                    <div className="a">100%. We’re experienced experts in the auto insurance field and our policies are underwritten by an AMBest “Excellent” rated national insurance company and backed by one of the world’s largest reinsurers.</div>
                </div>

                <div className="qa">
                    <div className="q">3. How are my rates calculated?</div>
                    <div className="a">100%. We’re experienced experts in the auto insurance field and our policies are underwritten by an AMBest “Excellent” rated national insurance company and backed by one of the world’s largest reinsurers.</div>
                </div>

                <div className="qa">
                    <div className="q">4. What coverage do you offer?</div>
                    <div className="a">100%. We’re experienced experts in the auto insurance field and our policies are underwritten by an AMBest “Excellent” rated national insurance company and backed by one of the world’s largest reinsurers.</div>
                </div>

                <div className="qa hidden">
                    <div className="q">4. What coverage do you offer?</div>
                    <div className="a">100%. We’re experienced experts in the auto insurance field and our policies are underwritten by an AMBest “Excellent” rated national insurance company and backed by one of the world’s largest reinsurers.</div>
                </div>

                <div className="qa hidden">
                    <div className="q">4. What coverage do you offer?</div>
                    <div className="a">100%. We’re experienced experts in the auto insurance field and our policies are underwritten by an AMBest “Excellent” rated national insurance company and backed by one of the world’s largest reinsurers.</div>
                </div>

                <div className="qa hidden">
                    <div className="q">4. What coverage do you offer?</div>
                    <div className="a">100%. We’re experienced experts in the auto insurance field and our policies are underwritten by an AMBest “Excellent” rated national insurance company and backed by one of the world’s largest reinsurers.</div>
                </div>

                <div className="qa hidden">
                    <div className="q">4. What coverage do you offer?</div>
                    <div className="a">100%. We’re experienced experts in the auto insurance field and our policies are underwritten by an AMBest “Excellent” rated national insurance company and backed by one of the world’s largest reinsurers.</div>
                </div>

            </div>
            <div className="button-wrapper">
                <a href="#" className="load-more">LOAD MORE</a>
            </div>
        </div>
    </section>

    <section className="footer-form">
        <div className="wrapper">
            <h2>Receive a Quote</h2>
            <p className="subtitle">No credit check required</p>
            <div className="home-form">
                <h2>How much can I save with Mile Auto?</h2>
                <form action="" method="post">
                    <input type="number" name="zip" placeholder="Zip Code" required/>

                    <div className="select-group">
                        <select name="miles" required>
                            <option value="">Miles You Drive per Year</option>
                            <option value="0-1000">Very Low (0-1000 miles)</option>
                            <option value="1000-5000">Low (1000-5000 miles)</option>
                            <option value="5000-10000">Avarage (5000-10000 miles)</option>
                            <option value="10000-20000">Above Avarage (10000-20000 miles)</option>
                            <option value="20000+">High (more than 20000 miles)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Miles You Drive per Year</div>
                            <div className="options">
                                <div className="pretty-option" data-value="0-1000"><b>Very Low</b> (0-1000 miles)</div>
                                <div className="pretty-option" data-value="1000-5000"><b>Low</b> (1000-5000 miles)</div>
                                <div className="pretty-option" data-value="5000-10000"><b>Avarage</b> (5000-10000 miles)</div>
                                <div className="pretty-option" data-value="10000-20000"><b>Above Avarage</b> (10000-20000 miles)</div>
                                <div className="pretty-option" data-value="20000+"><b>High</b> (more than 20000 miles)</div>
                            </div>
                        </div>
                    </div>

                    <div className="select-group">
                        <select name="insurance" required>
                            <option value="">Your Monthly Insurance Payment</option>
                            <option value="0-20">Very Low (0-20$)</option>
                            <option value="20-60">Low (20-60$)</option>
                            <option value="60-180">Avarage (60-180$)</option>
                            <option value="180-250">Above Avarage (180-250$)</option>
                            <option value="250+">High (more than 250$)</option>
                        </select>
                        <div className="pretty-select">
                            <div className="screen">Your Monthly Insurance Payment</div>
                            <div className="options">
                                <div className="pretty-option" data-value="0-20"><b>Very Low</b> (0-20$)</div>
                                <div className="pretty-option" data-value="20-60"><b>Low</b> (20-60$)</div>
                                <div className="pretty-option" data-value="60-180"><b>Avarage</b> (60-180$)</div>
                                <div className="pretty-option" data-value="180-250"><b>Above Avarage</b> (180-250$)</div>
                                <div className="pretty-option" data-value="250+"><b>High</b> (more than 250$)</div>
                            </div>
                        </div>
                    </div>

                    <input type="submit" value="SEE MY SAVINGS"/>
                </form>
            </div>
        </div>
        <img loading="lazy" className="bg" src="./assets/images/bg-footer-form.svg" alt="bg-footer-form"/>
    </section>
    
           <script src="./assets/js/glider.min.js"></script>
            <script src="./assets/js/home.js"></script>

    </>
  )
}
export default Home