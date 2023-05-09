import React from 'react';

function Contact() {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (  
        <section id="contact">
            <h2 className="title">Contact Me</h2>
            <div className="contact_container">
                <form onSubmit={handleSubmit} className="contact_form p-3" action="mailto:jchen2190@gmail.com" method="post">
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