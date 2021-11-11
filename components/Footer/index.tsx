import React from 'react'
import Image from 'next/image'

const Footer = ()=> {
    return (
        <>
        <footer>
          <div className="wrapper">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Quote</a></li>
            </ul>
            <div className="center">
            {/* width: 185px; height: 55px; */}
                {/* <img className="logo" loading="lazy" src="./assets/images/logo-white.png" alt="logo-white"/> */}
                <Image  width={185} height={55}  className="logo" loading="lazy" src="/assets/images/logo-white.png" alt="logo-white"/>
                {/* <Image  objectFit="inherit"  className="logo" loading="lazy" src="/assets/images/logo-white.png" alt="logo-white"/>  */}
                <div className="socials">
                    <a href="#"><img loading="lazy" src="./assets/images/icon-facebook.svg" alt="icon-facebook"/></a>
                    <a href="#"><img loading="lazy" src="./assets/images/icon-twitter.svg" alt="icon-twitter"/></a>
                    <a href="#"><img loading="lazy" src="./assets/images/icon-linkedin.svg" alt="icon-linkedin"/></a>
                </div>
                <p className="copyright">Copyright @ 2021</p>
            </div>
            <div className="right">
                <a className="quote" href="#">RECEIVE A QUOTE</a>
            </div>
        </div>
        <img loading="lazy" className="bg" src="./assets/images/bg-footer.svg" alt="bg-footer"></img>
        </footer>
        </>
    )
}

export default Footer
