import React from 'react'

const Header = ()=> {
    return (
        <>
            <header>
            <nav>
            <a href="/" className="logo"><img loading="lazy" src="./assets/images/logo.png" alt="mile-auto-logo"/></a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Agents</a></li>
                <li className="login"><a href="#"><img loading="lazy" src="./assets/images/icon-login.svg" alt="icon-login"/>&nbsp;Log in</a></li>
                <li className="get-quote"><a href="#">GET A QUOTE</a></li>
            </ul>
            <span className="burger"></span>
        </nav>
        </header>
        </>
    )
}

export default Header
