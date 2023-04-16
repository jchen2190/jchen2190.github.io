import React from 'react';
import './style.css';

function Contact() {
    return (  
        <section id="contact">
            <h2 class="title">Contact Me</h2>
            <p></p>
            <div class="contact_container">
                <form class="contact_form p-3" action="mailto:jchen2190@gmail.com" method="post" enctype="type/plain">
                    <div class="mb-4">
                        <label class="form-label" for="name">Name</label>
                        <input class="form-control" id="name" name="name" type="text" required placeholder="Your Name" />
                    </div>
                    <div class="mb-4">
                        <label class="form-label" for="email">Email</label>
                        <input class="form-control" id="email" name="email" type="email" required placeholder="Your Email" />
                    </div>
                    <div class="mb-4">
                        <label for="message">Message</label>
                        <textarea class="form-control" rows="5" id="message" name="message" required placeholder="Your Message"></textarea>
                    </div>
                    <button class="btn btn-lg btn-warning" id="form-button" type="submit" value="Send">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;