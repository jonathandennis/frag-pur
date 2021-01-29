import React from 'react'

import './Contact.css'

const Contact = () => {

    return (
        <section id="contact" className="contact"> 
            <div className="contact__text-box">
                <img src={`${process.env.PUBLIC_URL}/assets/img/FP-13_wht.png`} className="contact__logo" alt="Fragment Pur logo" />
                <h3 className="contact__address">
                    FRAGMENT PUR SARL<br />
                    Avenue du 24 Janvier 22<br />
                    1020 Renens, Suisse<br />
                    <br />
                    info@fragmentpur.ch<br />
                    +41 78 858 09 23
                </h3>
            </div>
            <div className="contact__map-box">
                <img src={`${process.env.PUBLIC_URL}/assets/img/googlemaps.png`} className="contact__map" alt="google map location" />
            </div>
        </section> 
    )
}

export default Contact