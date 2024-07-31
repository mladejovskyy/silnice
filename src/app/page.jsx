'use client'
import Navbar from "./_components/Navbar/Navbar";
import Footer from './_components/Footer/Footer';
import Modal from "./_components/Modal/Modal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './globals.css';
import './style.css';
import {useEffect, useState} from "react";
import Link from 'next/link'

export default function Home() {
    const [isModalOpen, setModalOpen] = useState(false);

    const scrollToTarget = (targetId) => {
        //navigate("/")
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({behavior: 'smooth'});
                if (window.innerWidth <= 1026) {
                    setOpen(false);
                }
            }
        }, 200);
    };

    const openModal = () => {
        setModalOpen(true);
    };

    return (
        <>
            <Navbar/>
            <section className='header' id='header'>
                <div className="container">
                    <div className="row">
                        <h1 data-aos="fade-down" data-aos-once="true">Od roku 2002 opravujeme silnice na Vysočině.</h1>
                        <p className='paragraph' data-aos="fade-down" data-aos-once="true" data-aos-delay="50"><b>Opravujeme
                            komunikace</b> s jednou z nejmodernějších metod výspravy
                            komunikací, tryskovou metodou strojem Turbo 5000.</p>
                    </div>
                    <div className="btns-row" data-aos="fade-right" data-aos-once="true">
                        <button className="btn-primary" onClick={() => scrollToTarget("contact")}>
                            Zjistit cenu opravy zdarma
                        </button>
                    </div>
                </div>
            </section>

            <section className="ourclients" id="ourclients">
                <div className="container">
                    <div className="row">
                        <h2 className='heading4'>Naši klienti</h2>
                    </div>
                    <div className="images-row">
                        <img src="/images/ourclients/client1.webp" alt="" draggable="false" loading="lazy"
                             placeholder="blur" data-aos="fade-up" data-aos-once="true"
                             data-aos-delay='0'/>
                        <img src="/images/ourclients/client2.webp" alt="" draggable="false" loading="lazy"
                             placeholder="blur" data-aos="fade-up" data-aos-once="true"
                             data-aos-delay='50'/>
                        <img src="/images/ourclients/client3.webp" alt="" draggable="false" loading="lazy"
                             placeholder="blur" data-aos="fade-up" data-aos-once="true"
                             data-aos-delay='100'/>
                        <img src="/images/ourclients/client4.webp" alt="" draggable="false" loading="lazy"
                             placeholder="blur" data-aos="fade-up" data-aos-once="true"
                             data-aos-delay='150'/>
                        <img src="/images/ourclients/client5.webp" alt="" draggable="false" loading="lazy"
                             placeholder="blur" data-aos="fade-up" data-aos-once="true"
                             data-aos-delay='200'/>
                        <img src="/images/ourclients/client6.webp" alt="" draggable="false" loading="lazy"
                             placeholder="blur" data-aos="fade-up" data-aos-once="true"
                             data-aos-delay='250'/>
                        <img src="/images/ourclients/client7.webp" alt="" draggable="false" loading="lazy"
                             placeholder="blur" data-aos="fade-up" data-aos-once="true"
                             data-aos-delay='300'/>

                    </div>
                </div>
            </section>

            <section className="services" id="services">
                <div className="container">
                    <div className="row">
                        <div className="left lg:w-3/4 md:w-2/3">
                            <h4 className='heading4'>Naše služby</h4>
                            <h2 className='heading2'>Na opravu komunikací používáme tryskovou metodu strojem turba
                                5000</h2>
                        </div>
                        <div className="right" data-aos="fade-left" data-aos-once="true">
                            <button className="btn-primary" onClick={() => scrollToTarget("aboutus")}>
                                Zjistit více o metodě
                            </button>
                        </div>
                    </div>
                    <div className="row cards-row">
                        <div className="card asfaltovani" data-aos="fade-up"
                             data-aos-once="true">
                            <div className="text">
                                <h3 className='heading2'>Asfaltování</h3>
                                <p className='lg:w-2/3'>
                                    Na opravu komunikací používáme tryskovou metodu strojem turba 5000.
                                </p>
                            </div>
                            <button className='btn-secondary'
                                    onClick={() => scrollToTarget("contact")}>Zjistit nezávazně cenu
                            </button>
                        </div>

                        <div className="card zhutneni" data-aos="fade-up"
                             data-aos-once="true">
                            <div className="text">
                                <h3 className='heading2'>Zhutnění</h3>
                                <p className='lg:w-2/3'>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using
                                </p>
                            </div>
                            <button className='btn-secondary'
                                    onClick={() => scrollToTarget("contact")}>Zjistit nezávazně cenu
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="whyus" id="whyus">
                <div className="container">
                    <div className="row">
                        <h4 className='heading4'>Proč vybrat nás</h4>
                        <h2 className='heading2'>S námi ušetříte!</h2>
                    </div>
                    <div className="row">
                        <div className='card' data-aos="zoom-in-up" data-aos-once="true"
                             data-aos-delay="0">
                            <div className="image p-3">
                                <img src="/images/delivery-truck.svg" alt="" draggable="false" loading="lazy"
                                     placeholder="blur"/>
                            </div>
                            <div className="text">
                                <h3 className='heading3'>Doprava zdarma</h3>
                                <p className='paragraph'>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using
                                </p>
                            </div>
                        </div>

                        <div className='card' data-aos="zoom-in-up" data-aos-once="true"
                             data-aos-delay="0">
                            <div className="image p-3">
                                <img src="/images/card-shield.svg" alt="" draggable="false" loading="lazy"
                                     placeholder="blur"/>
                            </div>
                            <div className="text">
                                <h3 className='heading3'>Doba záruky až 36 měsíců</h3>
                                <p className='paragraph'>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using
                                </p>
                            </div>
                        </div>

                        <div className='card' data-aos="zoom-in-up" data-aos-once="true"
                             data-aos-delay="0">
                            <div className="image p-3">
                                <img src="/images/thumbs-up.svg" alt="" draggable="false" loading="lazy"
                                     placeholder="blur"/>
                            </div>
                            <div className="text">
                                <h3 className='heading3'>Garance nízkých cen</h3>
                                <p className='paragraph'>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section className="aboutus" id="aboutus">
                <div className="container">
                    <div className="row">
                        <div className="left lg:w-3/6 md:w-5/6">
                            <div className="heading">
                                <h4 className='heading4'>O nás</h4>
                                <h2 className='heading2'>Dobře opravená komunikace je naše vizitka.</h2>
                            </div>
                            <div className="text">
                                <p>
                                    <span className='highlight'>Naše společnost</span> se zabývá opravou silnic jednou z
                                    nejmodernějších metod výspravy komunikací, tryskovou metodou strojem Turbo 5000.
                                </p>
                                <p>
                                    Opravy silnic jsou pro řadu jejich majitelů nebo správců velkým
                                    oříškem – jak zajistit, aby byla silnice opravena kvalitně a současně aby byla její
                                    oprava finančně dostupná? Řešením jsou opravy silnic tryskovou metodou za pomoci
                                    stroje Turbo 5000!
                                </p>
                            </div>
                            <div className="checks">
                                <div className="check" data-aos="zoom-in-right" data-aos-once="true"
                                     data-aos-delay='50'>
                                    <img src="/images/check_icon.webp" className='mr-3' alt="" draggable="false"
                                         loading="lazy" placeholder="blur"/>
                                    Co nabízíme
                                </div>
                                <div className="check" data-aos="zoom-in-right"
                                     data-aos-once="true" data-aos-delay='150'>
                                    <img src="/images/check_icon.webp" className='mr-3' alt="" draggable="false"
                                         loading="lazy" placeholder="blur"/>
                                    Co nabízíme
                                </div>
                            </div>
                            <div className="button" data-aos="zoom-in"
                                 data-aos-once="true">
                                <button className="btn-primary" onClick={() => scrollToTarget("contact")}>Získat cenovou
                                    nabídku zdarma
                                </button>
                            </div>
                        </div>
                        <div className="right lg:ml-32 md:ml-0 lg:w-3/6 md:w-5/6">
                            <img src="/images/aboutus.webp" alt="" draggable="false" loading="lazy" placeholder="blur"/>
                        </div>

                    </div>
                </div>
            </section>

            <section className="pusobnost" id="pusobnost">
                <div className="container">
                    <div className="row">
                        <div className="left">
                            <h4 className="heading4">Působnost</h4>
                            <h2 className="heading2">Naše firma působí v těchto okresech</h2>
                        </div>
                        <div className="right" data-aos="zoom-in" data-aos-once="true">
                            <button onClick={openModal} className="btn-secondary">Zobrazit mapu působnosti</button>
                        </div>
                    </div>
                </div>
            </section>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />

            <section className="gallery" id="gallery">
                <div className="container">
                    <div className="row">
                        <h4 className="heading4">Galerie</h4>
                        <h2 className="heading2">Ukázky naší práce</h2>
                    </div>
                    <div className="images-row">
                        <div className="left">
                            <img src="/images/prace1.webp" alt="" draggable="false" loading="lazy" placeholder="blur"
                                 data-aos="fade-right" data-aos-once="true" data-aos-delay='0'/>
                            <img src="/images/prace2.webp" alt=""
                                 draggable="false" loading="lazy" placeholder="blur" data-aos="fade-right"
                                 data-aos-once="true" data-aos-delay='50'/>
                        </div>
                        <div className="middle">
                            <img src="/images/prace3.webp" alt="" draggable="false" loading="lazy" placeholder="blur"
                                 data-aos="fade-up" data-aos-once="true" data-aos-delay='0'/>
                        </div>
                        <div className="right" data-aos="fade-left" data-aos-once="true">
                            <img src="/images/prace4.webp" alt="" draggable="false" loading="lazy" placeholder="blur"
                                 data-aos="fade-left" data-aos-once="true" data-aos-delay='0'/>
                            <img src="/images/prace5.webp" alt=""
                                 draggable="false" loading="lazy" placeholder="blur" data-aos="fade-left"
                                 data-aos-once="true" data-aos-delay='50'/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="container">
                    <div className="row">
                        <h4 className="heading4">Kontakty</h4>
                        <h2 className="heading2">
                            Cenové nabídky Vám zpracujeme na míru zcela zdarma. Stačí si domluvit nezávaznou schůzku.
                        </h2>
                    </div>
                    <div className="row" data-aos="zoom-in" data-aos-once="true">
                        <Link href="tel:721605620" target='_blank' rel='noopener'>
                            <button className="btn-secondary">
                                <img src="/images/phone.webp" className='mr-2' alt="" draggable="false" loading="lazy"
                                     placeholder="blur"/> 721 605 620
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}