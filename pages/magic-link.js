import React from 'react'

const MagicLink = ()=> {
    return (
        <>
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
    
        </>
    )
}

export default MagicLink
