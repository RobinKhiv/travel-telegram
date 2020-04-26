import React from 'react';
import { Link } from 'react-router-dom';
// import App from '../../js/components/App';

const navigation = () => {
    return (
        <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark" >
            <Link to="/" class="navbar-brand">
               Feed Me
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
                        <Link to="/fddd647d-7dd3-4faa-87f6-eaa38ede0f88"class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Travel
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to="/d4b75935-e0ea-4181-afce-915d6d7cda30" class="dropdown-item">North America</Link>
                            <Link to="/25d439b0-3769-42dd-86d8-7eccd5e43ee3" class="dropdown-item">Europe</Link>
                            <Link to="/691031b9-de1c-4178-ba64-d8797eeca9eb" class="dropdown-item">Asia</Link>
                        </div>  
                    </li>
                    <li class="nav-item">
                        <Link to='/blog/a41f5295-8535-4eaa-97a3-ddcdf4a86a47' class="nav-link">About Me</Link>  
                    </li>
                    <li class="nav-item">
                        <Link to='/168126ef-a983-469b-b0d0-6ec65ced1c36' class="nav-link">Restaurants</Link>  
                    </li>
                    <li class="nav-item">
                        <Link to='/9e6591ba-a363-4614-9231-9d9fd1109bce' class="nav-link">Guides</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/3104126d-045c-4637-8374-2ee34e563f84' class="nav-link">Events</Link>  
                    </li>
                    <li>
                        <Link to='/d5ce744c-9c83-436c-8fe9-718bd82662ac' class="nav-link">Festivals</Link>
                    </li>  
                </ul>
            </div>
        </nav>
    )
}

export default navigation
