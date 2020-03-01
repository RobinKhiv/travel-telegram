import React from 'react';
import { Link } from 'react-router-dom';
import App from '../js/components/App'

export class Home extends React.Component {
    render() {
      console.log('home')
        return (
            <section class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                          <img src="https://mouthfuloftravel.files.wordpress.com/2018/05/0305-2018-03078208050009910.jpeg?w=750" class="card-img-top" alt=""/>
                          <div class="card-body">
                              <h3 class="card-title">Title</h3>
                              <p  class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui...</p>  
                              <div class="mx-auto">
                              <Link class="btn btn-secondary">
                                Read More
                              </Link> 
                              </div>
                              </div>
                        </div>         
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                          <img src="https://mouthfuloftravel.files.wordpress.com/2018/05/0305-2018-03078208050009910.jpeg?w=750" class="card-img-top" alt=""/>
                          <div class="card-body">
                              <h3 class="card-title">Title</h3>
                              <p  class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui...</p>  
                              <div class="mx-auto">
                              <Link class="btn btn-secondary">
                                Read More
                              </Link>
                              </div>
                              </div>
                        </div>         
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                          <img src="https://mouthfuloftravel.files.wordpress.com/2018/05/0305-2018-03078208050009910.jpeg?w=750" class="card-img-top" alt=""/>
                          <div class="card-body">
                              <h3 class="card-title">Title</h3>
                              <p  class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui...</p>  
                              <div class="mx-auto">
                              <Link class="btn btn-secondary">
                                Read More
                              </Link> 
                              </div>
                              </div>
                        </div>         
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                          <img src="https://mouthfuloftravel.files.wordpress.com/2018/05/0305-2018-03078208050009910.jpeg?w=750" class="card-img-top" alt=""/>
                          <div class="card-body">
                              <h3 class="card-title">Title</h3>
                              <p  class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui...</p>  
                              <div class="mx-auto">
                              <Link class="btn btn-secondary">
                                Read More
                              </Link>
                              </div>
                              </div>
                        </div>         
                    </div>
                </div>         
            </section>
        )
    }
};

export default Home;
