import React from 'react'

const MagicLink = ()=> {
    return (
        <>
        <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Login with magic link</title>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="./assets/css/account.css"></link>

    <img className="account-hero" src="./assets/images/account-hero.svg" alt="account-hero-background"></img>
     <section className="fill-place login">
        <h1>Welcome to Mile.</h1>
        <div className="home-form">
            <form action="" method="post">
                <input type="tel" name="phone" placeholder="Phone number" required/>
                <input type="submit" value="GET MAGIC LINK"/>
            </form>
            <p className="other-variant">or <br/> <a href="#">Log In With Password</a> </p>
        </div>
    </section>
    

    <script src="./assets/js/account.js"></script>
        </>
    )
}

export default MagicLink
