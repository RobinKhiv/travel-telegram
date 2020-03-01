import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark" >
            <Link to="/" class="navbar-brand">
               Mouthful
            </Link>   
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link to='' class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <Link to="about"class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Travel
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link to="" class="dropdown-item">North America</Link>
                        <Link to="" class="dropdown-item">Europe</Link>
                        <Link to="" class="dropdown-item">Asia</Link>
                        </div>  
                    </li>
                    <li class="nav-item">
                        <Link to='/about' class="nav-link">About Me</Link>  
                    </li>
                    <li class="nav-item">
                        <Link to='' class="nav-link">Restaurants</Link>  
                    </li>
                    <li class="nav-item">
                        <Link to='' class="nav-link">Guides</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='' class="nav-link">Events</Link>  
                    </li>
                    <li>
                        <Link to='' class="nav-link">Festivals</Link>
                    </li>  
                </ul>
            </div>
        </nav>
    )
}
