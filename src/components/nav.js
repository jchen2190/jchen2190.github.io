import React from 'react';
import './style.css';

function Nav() {
    return (  
        <nav class="navbar fixed-top navbar-expand-md bg-body-tertiary">
            <div class="container-fluid">

                <a class="navbar-brand" href="#"><img src="image/favicon/favicon.svg" width="50" height="50" alt="Jon Chen logo image"/> Jon Chen</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse justify-content-end navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item ms-auto"><a class="nav-link active" aria-current="page" href="#about">About</a></li>
                      <li class="nav-item ms-auto"><a class="nav-link" href="#experience">Experience</a></li>
                      <li class="nav-item ms-auto"><a class="nav-link" href="#projects">Projects</a></li>
                      <li class="nav-item ms-auto"><a class="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
                
            </div>
        </nav>
    );
}

export default Nav;