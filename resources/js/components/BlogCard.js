import React from 'react';
import '../../css/BlogCard.css';
import {Link} from 'react-router-dom';
import App from './App';

export default function blogCard(props) {
    const cardImage = {src:'', alt:''};
    let text = '';

    props.blog_content.map(blog => {
        if (blog.type === 'img_main'){
            cardImage.src = blog.content;
            cardImage.alt = blog.alt;
        }
        else
            text = blog.content;
    })

    return (
        <div className="mt-3 col-lg-4 d-flex align-items-stretch mb-4">
            <div class="card">
                <img src={cardImage.src} className="card-img-top" alt={cardImage.alt}/>
                <div class="card-body">
                    <h3 className="card-title">{props.title}</h3>
                    <p  classname="card-text">{text}</p>  
                    <div className="mx-auto">
                        <Link class="btn btn-secondary" to='/'>
                        Read More
                        </Link>
                    </div>
                </div>
            </div>         
        </div>
    )
}
