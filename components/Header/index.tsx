import React from 'react'
import Link from 'next/link'

const Header = ()=> {
    return (
        <>
            <header>
            <nav>
  
            <Link href="/"> 
            <a className="logo"><img loading="lazy" src="./assets/images/logo.png" alt="mile-auto-logo"/></a>
            </Link>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>

                <li>
                     <Link href="/about">
                         <a>FAQs</a>
                     </Link>
                 </li>

                <li>
                     <Link href="/become-an-agent">
                         <a>Agents</a>
                        </Link> 
                </li>

                <li className="login">
                    <Link href="/login">
                         <a><img loading="lazy" src="./assets/images/icon-login.svg" alt="icon-login"/>Log in</a>
                    </Link>
                </li>
                
                <li className="get-quote">
                     <Link href="/quote">
                         <a>GET A QUOTE</a>
                     </Link>
                 </li>

            </ul>
            <span className="burger"></span>
        </nav>
        </header>
        </>
    )
}

export default Header
