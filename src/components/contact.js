import React from 'react';

function Contact() {
    return (  
        <section id="contact">
            <h2 className="title">Contact Me</h2>
            <p></p>
            <div className="contact_container">
                <form className="contact_form p-3" action="mailto:jchen2190@gmail.com" method="post" enctype="type/plain">
                    <div className="mb-4">
                        <label className="form-label" for="name">Name</label>
                        <input className="form-control" id="name" name="name" type="text" required placeholder="Your Name" />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" for="email">Email</label>
                        <input className="form-control" id="email" name="email" type="email" required placeholder="Your Email" />
                    </div>
                    <div className="mb-4">
                        <label for="message">Message</label>
                        <textarea className="form-control" rows="5" id="message" name="message" required placeholder="Your Message"></textarea>
                    </div>
                    <button className="btn btn-lg btn-warning" id="form-button" type="submit" value="Send">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;