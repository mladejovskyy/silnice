"use client"
import React from 'react'
import './Footer.css'

export default function Footer() {
    const scrollToTarget = (targetId) => {
        //navigate("/")
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 200);
    };

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="item about">
                        <img onClick={() => scrollToTarget("header")} src='/images/nav_logo.webp' alt='Naše firma tvoří více než jen web, jsme partněři pro online růst' draggable="false" loading="lazy" placeholder="blur" />
                        <p>Dobře opravená komunikace je naše vizitka.</p>
                        <span>Jméno Příjmení</span>
                        <span>IČ:</span>
                        <span>Sídlo</span>
                    </div>
                    <div className="item empty"></div>
                    <div className="item links">
                        <h2>Užitečné</h2>
                        <button onClick={() => scrollToTarget("services")}>Služby</button>
                        <button onClick={() => scrollToTarget("whyus")}>Proč my?</button>
                        <button onClick={() => scrollToTarget("aboutus")}>O nás</button>
                        <button onClick={() => scrollToTarget("gallery")}>Galerie</button>
                        <button onClick={() => scrollToTarget("contact")}>Kontakty</button>
                    </div>
                    <div className="item links">
                        <h2>Služby</h2>
                        <button onClick={() => scrollToTarget("asfaltovani")}>Asfaltování</button>
                        <button onClick={() => scrollToTarget("zhutneni")}>Zhutnění</button>
                    </div>
                    <div className="item links">
                    <h2>Kontaktujte nás</h2>
                        <a href='tel:721605620' target='_blank' rel="noopener noreferrer"><img src='/images/footerphone.svg' alt='Telefonní číslo redesigner' draggable="false" loading="lazy" placeholder="blur" /> +420 721 605 620</a>
                        <a href='mailto:komunikace-vysocina@seznam.cz' target='_blank' rel="noopener noreferrer"><img src='/images/footeremail.svg' alt='E-mail redesigneru' draggable="false" loading="lazy" placeholder="blur" /> komunikace-vysocina@seznam.cz</a>
                    </div>
                </div>
                <div className="bottom-line"></div>
                <div className="bottom-content">
                    <p>{new Date().getFullYear()} © Copyright Opravy komunikací vysočina s.r.o. Všechna práva vyhrazena</p>
                    <a href='https://redesigner.cz/' target='_blank' rel="noopener noreferrer">Vytvořil <img src='/images/redesigner_logo.webp' alt='Naše firma tvoří více než jen web, jsme partněři pro online růst' draggable="false" loading="lazy" placeholder="blur" /></a>
                </div>
            </div>
        </footer >
    )
}