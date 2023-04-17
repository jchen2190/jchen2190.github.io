import React from 'react';

function Introduction() {
    return (  
        <section id="introduction">
            <h1>Hey, I'm &nbsp</h1>
            <h2>Jonathan Chen</h2>
            <h3>Software Developer</h3>
            <div className="down-arrow">
                <hr /><a href="#about"><img src="image/icons/down-arrow-circle.svg" alt="down arrow icon" /></a><hr />
            </div>
        </section>
    );
}

export default Introduction;