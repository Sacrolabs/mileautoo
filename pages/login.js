import React from 'react'

const Login = ()=> {
    return (
        <>
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
    
        </>
    )
}

export default Login