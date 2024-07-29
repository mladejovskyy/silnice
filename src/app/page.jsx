'use client'
import Navbar from "./_components/Navbar/Navbar";
import Footer from './_components/Footer/Footer';
import Modal from "./_components/Modal/Modal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './globals.css';
import './page.css';
import './style.css';
import {useEffect, useState} from "react";

export default function Home() {
    const [startScrolll, setStartScroll] = useState("160");
    const [currentDevice, setCurrentDevice] = useState("pc");
    const [isModalOpen, setModalOpen] = useState(false);

    const ourClients = [
        { image: '/images/ourclients/client1.webp', alt: '...'},
        { image: '/images/ourclients/client2.webp', alt: '...'},
        { image: '/images/ourclients/client3.webp', alt: '...'},
        { image: '/images/ourclients/client4.webp', alt: '...'},
        { image: '/images/ourclients/client5.webp', alt: '...'},
        { image: '/images/ourclients/client6.webp', alt: '...'},
        { image: '/images/ourclients/client7.webp', alt: '...'},
    ]

    const services = [
        { title: 'Asfaltování', class: 'asfaltovani', id: 'asfaltovani', description: 'Na opravu komunikací používáme tryskovou metodu strojem turba 5000.'},
        { title: 'Zhutnění', class: 'zhutneni', id: 'zhutneni', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using'},
    ]

    const whyus = [
        { image : '/images/delivery-truck.svg', alt: '...', title: 'Doprava zdarma', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using'},
        { image : '/images/card-shield.svg', alt: '...', title: 'Doba záruky až 36 měíců', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using'},
        { image : '/images/thumbs-up.svg', alt: '...', title: 'Garance nízkých cen', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using'},
    ]

    useEffect(() => {
        //load animations
        AOS.init({
            disable: function () {
                var maxWidth = 768;
                return window.innerWidth < maxWidth;
            }
        });
        //load parallax start scroll
        if (window.innerWidth < 768) {
            setStartScroll("60");
            setCurrentDevice("mobile")
        } else {
            setStartScroll("160")
            setCurrentDevice("pc")
        }
    }, [])

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

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Navbar />
            <section className='header' id='header'>
                <div className="container">
                    <div className="row">
                        <h1 data-aos="fade-down" data-aos-once="true">Od roku 2002 opravujeme <br className='max-md:hidden'/> silnice na Vysočině.</h1>
                        <h2 className='mt-8 paragraph' data-aos="fade-down" data-aos-once="true" data-aos-delay="50"><b>Opravujeme komunikace</b> s jednou z nejmodernějších metod<br className='max-md:hidden'/> výspravy komunikací, tryskovou metodou strojem Turbo 5000.</h2>
                    </div>
                    <div className="btns-row mt-8">
                        <button  className="btn-primary" onClick={() => scrollToTarget("contact")} data-aos="fade-right" data-aos-once="true" >Zjistit cenu opravy zdarma</button>
                    </div>
                </div>
            </section>

            <section className="ourclients pt-14" id="ourclients">
                <div className="container">
                    <div className="row">
                        <h2 className='heading4'>Naši klienti</h2>
                    </div>
                    <div className="images-row flex justify-evenly lg:mt-16 md:mt-8 max-sm:mt-4">
                        {ourClients.map((client, i) => {
                            let index = `client${i+1}`;
                            let timeout = [0,50,100,150,200,250,300];
                            return (
                                <img key={index} src={client.image} alt={client.alt} draggable="false" loading="lazy" placeholder="blur" data-aos="fade-up" data-aos-once="true" data-aos-delay={timeout[i]}/>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="services pt-24 max-sm:pt-16" id="services">
                <div className="container">
                    <div className="row flex justify-between">
                        <div className="left flex flex-col lg:w-3/4 md:w-2/3">
                            <h4 className='heading4'>Naše služby</h4>
                            <h2 className='heading2'>Na opravu komunikací používáme<br className='max-md:hidden'/> tryskovou metodu strojem turba 5000</h2>
                        </div>
                        <div className="right flex items-center" data-aos="fade-left" data-aos-once="true">
                            <button className="btn-primary">Zjistit více o metodě</button>
                        </div>
                    </div>
                    <div className="row mt-8 flex justify-between">
                        {services.map((service, i) => {
                            let index = `service${i+1}`;
                            return (
                                <div key={index} id={service.id} className={`card flex flex-col justify-between p-10 ${service.class}`} data-aos="fade-up" data-aos-once="true">
                                    <div className="text lg:pb-16 pb-12">
                                        <h3 className='heading2'>{service.title}</h3>
                                        <p className='lg:w-2/3 md:5/6 mt-4'>{service.description}</p>
                                    </div>
                                    <button className='btn-secondary w-1/2' onClick={() => scrollToTarget("contact")}>Zjistit nezávazně cenu</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="whyus mt-24 lg:pb-20 md:pb-0" id="whyus">
                <div className="container">
                    <div className="row pt-16 pb-8">
                        <h4 className='heading4'>Proč vybrat nás</h4>
                        <h2 className='heading2'>S námi ušetříte!</h2>
                    </div>
                    <div className="row flex justify-between">
                        {whyus.map((benefit, i) => {
                            let index = `benefit${i+1}`;
                            let timeout = [0,50,100];
                            return (
                                <div key={index} className='card' data-aos="zoom-in-up" data-aos-once="true" data-aos-delay={timeout[i]}>
                                    <div className="image p-3">
                                        <img src={benefit.image} alt={benefit.alt} draggable="false" loading="lazy" placeholder="blur"/>
                                    </div>
                                    <div className="text mt-4">
                                        <h3 className='heading3'>{benefit.title}</h3>
                                        <p className='paragraph mt-2'>{benefit.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </section>

            <section className="aboutus pt-24 max-sm:pt-16" id="aboutus">
                <div className="container">
                    <div className="row flex">
                        <div className="left lg:w-3/6 md:w-5/6 flex flex-col">
                            <div className="heading">
                                <h4 className='heading4'>O nás</h4>
                                <h2 className='heading2'>Dobře opravená komunikace je naše vizitka.</h2>
                            </div>
                            <div className="text mt-4">
                                <p><span className='highlight'>Naše společnost</span> se zabývá opravou silnic jednou z nejmodernějších metod výspravy komunikací, tryskovou metodou strojem Turbo 5000.</p>
                                <p className='mt-3'>Opravy silnic jsou pro řadu jejich majitelů nebo správců velkým oříškem – jak zajistit, aby byla silnice opravena kvalitně a současně aby byla její oprava finančně dostupná? Řešením jsou opravy silnic tryskovou metodou za pomoci stroje Turbo 5000!</p>
                            </div>
                            <div className="checks mt-8">
                                <div className="check flex items-center" data-aos="zoom-in-right" data-aos-once="true" data-aos-delay='50'>
                                    <img src="/images/check_icon.webp" className='mr-3' alt="..." draggable="false" loading="lazy" placeholder="blur"/>
                                    Co nabízíme
                                </div>
                                <div className="check flex items-center mt-4" data-aos="zoom-in-right" data-aos-once="true" data-aos-delay='150'>
                                    <img src="/images/check_icon.webp" className='mr-3' alt="..." draggable="false" loading="lazy" placeholder="blur"/>
                                    Co nabízíme
                                </div>
                            </div>
                            <div className="button lg:mt-16 max-md:mt-6 lg:mb-0 max-md:mb-8" data-aos="zoom-in" data-aos-once="true">
                                <button className="btn-primary" onClick={() => scrollToTarget("contact")}>Získat cenovou nabídku zdarma</button>
                            </div>
                        </div>
                        <div className="right lg:ml-32 md:ml-0 lg:w-3/6 md:w-5/6">
                            <img src="/images/aboutus.webp" alt="..."  draggable="false" loading="lazy" placeholder="blur"/>
                        </div>

                    </div>
                </div>
            </section>

            <section className="pusobnost pt-24 max-sm:pt-16" id="pusobnost">
                <div className="container px-24">
                    <div className="row flex justify-between items-center">
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
                onClose={closeModal}
            />

            <section className="gallery pt-24 max-sm:pt-16" id="gallery">
                <div className="container">
                    <div className="row">
                        <h4 className="heading4">Galerie</h4>
                        <h2 className="heading2">Ukázky naší práce</h2>
                    </div>
                    <div className="images-row flex justify-between mt-8">
                        <div className="left">
                            <img src="/images/prace1.webp" alt="..." draggable="false" loading="lazy" placeholder="blur" data-aos="fade-right" data-aos-once="true" data-aos-delay='0'/>
                            <img src="/images/prace2.webp" className='lg:mt-9 max-md:mt-5 max-sm:mt-2' alt="..." draggable="false" loading="lazy" placeholder="blur" data-aos="fade-right" data-aos-once="true" data-aos-delay='50'/>
                        </div>
                        <div className="middle lg:mx-8 max-md:mx-6 max-sm:mx-1">
                            <img src="/images/prace3.webp" alt="..." draggable="false" loading="lazy" placeholder="blur" data-aos="fade-up" data-aos-once="true" data-aos-delay='0'/>
                        </div>
                        <div className="right" data-aos="fade-left" data-aos-once="true">
                            <img src="/images/prace4.webp" alt="..." draggable="false" loading="lazy" placeholder="blur" data-aos="fade-left" data-aos-once="true" data-aos-delay='0'/>
                            <img src="/images/prace5.webp" className='lg:mt-9 max-md:mt-5 max-sm:mt-2' alt="..." draggable="false" loading="lazy" placeholder="blur" data-aos="fade-left" data-aos-once="true" data-aos-delay='50'/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact mt-24 max-sm:mt-16" id="contact">
                <div className="container">
                    <div className="row">
                        <h4 className="heading4">Kontakty</h4>
                        <h2 className="heading2">Cenové nabídky Vám zpracujeme na míru zcela<br className='max-md:hidden'/> zdarma. Stačí si domluvit nezávaznou schůzku.</h2>
                    </div>
                    <div className="row flex justify-center mt-8" data-aos="zoom-in" data-aos-once="true">
                        <a href="tel:721605620">
                            <button className="btn-secondary flex justify-center items-center">
                                <img src="/images/phone.webp" className='mr-2' alt="..." draggable="false" loading="lazy" placeholder="blur"/>  721 605 620
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}