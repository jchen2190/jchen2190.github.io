import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef()

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_eshrnxs', 'template_k8g70g2', form.current, '7i1nL9CdMjoFahk0A')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
        alert("Your message has been sent!")
        e.target.reset();
    }

    return (  
        <section id="contact" className="py-5 mb-5">
            <div>
                <h2 className="title">Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} className="contact_form m-3">
                    <div className="form-group mb-4">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input className="form-control" id="name" name="name" type="text" required placeholder="Your Name" />
                    </div>
                    <div className="form-group mb-4">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input className="form-control" id="email" name="email" type="email" required placeholder="Your Email" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" id="message" name="message" required placeholder="Your Message"></textarea>
                    </div>
                    <button className="btn btn-lg btn-warning" id="form-button" type="submit" value="Send">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;