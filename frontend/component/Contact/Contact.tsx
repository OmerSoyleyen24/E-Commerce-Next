import React from "react"
import Policy from "@/component/Policy/Policy";
import "./Contact.css"

const Contact = () => {
    return (
        <React.Fragment>
            <section id="contact">
                <div className="contact-top">
                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201550.47901837973!2d32.34167288498778!3d37.87839162544021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08568d615f745%3A0x240dd0fc08060967!2sKonya!5e0!3m2!1str!2str!4v1706958499937!5m2!1str!2str"
                            className="borderNone" width="100%" height="500" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="contact-bottom">
                    <div className="container">
                        <div className="contact-titles">
                            <h2>
                                Get In Touch
                            </h2>
                            <h4>
                                Contact with us
                            </h4>
                            <p>
                                In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, in bibendum urna
                                mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur
                                consequat justo.
                            </p>

                        </div>
                        <div className="contact-elements">
                            <div className="contact-form">
                                <div>
                                    <label>
                                        Your Name
                                        <span>*</span>
                                    </label>
                                    <input type="text" required />
                                </div>
                                <div>
                                    <label>
                                        Your Email
                                        <span>*</span>
                                    </label>
                                    <input type="text" required />
                                </div>
                                <div>
                                    <label>
                                        Your Subject
                                        <span>*</span>
                                    </label>
                                    <textarea required></textarea>
                                </div>
                                <div>
                                    <label>
                                        Your Message
                                        <span>*</span>
                                    </label>
                                    <textarea required></textarea>
                                </div>
                                <button className="btn btn-dark">Send Message</button>
                            </div>
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <div className="contact-info-texts">
                                        <strong>Clotya Store</strong>
                                        <p className="contact-street">Clotya Store Germany — 785 15h Street, Office 478/B Green Mall
                                            Berlin, De 81566
                                            <br />
                                            <br />
                                            <a href="tel:+1 1234 567 88">Phone: +1 1234 567 88
                                            </a><br />
                                            <a href="mailto:contact@example.com">Email: contact@example.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-texts">
                                        <strong>Opening Hours</strong>
                                        <p className="contact-date">Monday - Friday : 9am - 5pm
                                            Weekend Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Policy />
        </React.Fragment>
    )
}

export default Contact
