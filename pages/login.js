import React from 'react'

const Login = ()=> {
    return (
        <>
        <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Login</title>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>

    <link rel="stylesheet" href="./assets/css/account.css"></link>
    <img className="account-hero" src="./assets/images/account-hero.svg" alt="account-hero-background"></img>
     <section className="fill-place login">
        <h1>Welcome to Mile.</h1>
        <div className="home-form">
            <form action="" method="post">
                <input type="email" name="email" placeholder="Email" required/>
                <input type="password" name="password" placeholder="Password" required/>
                <div className="extra-controls">
                    <div className="checkbox-with-label">
                        <div className="checkbox-wrap">
                            <input type="checkbox" id="remain-logged-in" name="remain-logged-in"/>
                        </div>
                        <label for="remain-logged-in">Remain logged in</label>
                    </div>
                    <a href="#">Change or Reset Password</a>
                </div>
                <input type="submit" value="LOG IN"/>
            </form>
            <p className="other-variant">or <br/> <a className="i-icon" href="#">Log In Without Password</a> </p>
        </div>
    </section>
      <script src="./assets/js/account.js"></script>
        </>
    )
}

export default Login