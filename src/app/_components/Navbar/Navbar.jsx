"use client"
import { useState, useEffect } from 'react'
import "./Navbar.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
    useEffect(() => {
        //load animations
        AOS.init();
    }, [])

    //let navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [isScroll, setIsScroll] = useState(false)

    //check scroll
    useEffect(() => {
        function updateScroll() {
            if (window.scrollY >= 25) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        }
        window.addEventListener('scroll', updateScroll);
        updateScroll();
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    //check width
    useEffect(() => {
        function updateSize() {
            if (window.innerWidth >= 1026) {
                setOpen(true);
                setMobile(false);
            } else {
                setMobile(true);
                setOpen(false);
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const scrollToTarget = (targetId) => {
        //navigate("/")
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                if (window.innerWidth <= 1026) {
                    setOpen(false);
                }
            }
        }, 200);
    };

    return (
        <div className={isScroll ? 'nav-bg nav-bg-scroll' : 'nav-bg'}>
            <nav className='container'>
                <span onClick={() => scrollToTarget("header")}><img src="./images/nav_logo.webp" className="logo" alt="Naše firma tvoří více než jen web, jsme partněři pro online růst" draggable="false" loading="eager" placeholder="blur" /></span>
                {open ? <ul className="nav-links" data-aos={mobile ? "slide-left" : ""} data-aos-delay="100" data-aos-duration="400" data-aos-once="false">
                    <li onClick={() => scrollToTarget("services")} data-aos="fade-down" data-aos-delay="0" data-aos-once="true">Služby</li>
                    <li onClick={() => scrollToTarget("whyus")} data-aos="fade-down" data-aos-delay="100" data-aos-once="true">Proč my</li>
                    <li onClick={() => scrollToTarget("aboutus")} data-aos="fade-down" data-aos-delay="200" data-aos-once="true">O nás</li>
                    <li onClick={() => scrollToTarget("gallery")} data-aos="fade-down" data-aos-delay="300" data-aos-once="true">Galerie</li>
                    <li onClick={() => scrollToTarget("contact")} data-aos="fade-down" data-aos-delay="300" data-aos-once="true">Kontakty</li>
                    <button onClick={() => scrollToTarget("contact")} className="btn-purple burger" data-aos="fade-left" data-aos-delay="400" data-aos-once="true">Zjistit cenu opravy zdarma</button>
                </ul> : ""}
                {!open ? <div className="burger" onClick={() => setOpen(true)}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div> : <div className="close" onClick={() => setOpen(false)}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>}

            </nav>
        </div>
    )
}