import React from "react";
import {Link} from 'react-router-dom'


function Contact(){
    return(
        <div>
            <section className="foot-sec">
                <div className="foot-container">
                    <div className="title">
                        <h3>Contact</h3>
                    </div>
                    <div className="foot-row">
                        <div className="foot-col">
                            <ul>
                                <h2>LITTLE SHOP</h2>
                                <li>Phone: +91-33-22521462/63</li>
                                <li>Cell: +91-9007483108</li>
                                <li>Email: contact@littleshop.in</li>
                            </ul>
                        </div>

                        <div className="foot-col">
                            <ul>
                                <h3>Information</h3>
                                <li>About Us</li>
                                <li>Our Stores</li>
                                <li>EContact Us</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>

                        <div className="foot-col">
                            <ul>
                                <h3>Need Help</h3>
                                <li>Order & Return Policy</li>
                                <li>Shipping Policy</li>
                                <li>Privacy Policy</li>
                                <li>Terms And Conditions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Contact;