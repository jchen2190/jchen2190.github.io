import React from 'react';
import './style.css';

function Introduction() {
    return (  
        <section id="introduction">
            <h1>Hey, I'm &nbsp</h1>
            <h2>Jonathan Chen</h2>
            <h3>Software Developer</h3>
            <div class="down-arrow">
                <hr /><a href="#about"><img src="image/icons/down-arrow-circle.svg" /></a><hr />
            </div>
        </section>
    );
}

export default Introduction;