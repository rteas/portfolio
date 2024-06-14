'use client';
import { useState, useEffect, useRef } from "react";
import "./navbar.scss";

export default function NavBar() {

    const myName = 'Richy Teas'
    let navBarRef = useRef(null)
    let [navbarTitle, setNavbarTitle] = useState(myName)

    const scrollToTop = () => {
        window.scrollTo(0,0);
    }

    const handleScroll = () => {
        const position = window.pageYOffset;
        console.log(position)
        if(position > 45){
            navBarRef.current.className = 'navbar transparent-nav';
            setNavbarTitle('')
        }
        else{
            navBarRef.current.className = 'navbar'
            setNavbarTitle(myName)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return <nav ref = {navBarRef} role="navigation" className="navbar">
        <span>
            {navbarTitle}
        </span>
        <div className="links-container">
            <div id="progress"></div>

            <ul className="nav-links">
                <li><a onClick={scrollToTop} href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

        </nav>

}