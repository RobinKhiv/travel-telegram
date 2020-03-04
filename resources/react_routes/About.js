import React, { Component } from 'react';
import { aboutMe } from '../store/Store';
import App from '../js/components/App';

export class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: aboutMe
        }
    }

    renderContent (content)  {
        const blogContent = [];
        content.forEach(element => {
          if(element.type === 'paragraph') blogContent.push(<p class="text-body">{element.content}</p>);
          else if (element.type === 'img') blogContent.push(<img class={element.size + " img-fluid "} src={element.src} alt={element.alt} /> ); 
          else if (element.type === 'title') blogContent.push(<h2 class="text-dark">{element.content}</h2> )  
        })
        return (
            <div class="col-lg-12">
                {blogContent}
            </div>
        );
    }

    render() {
        const { blogContent } = this.state.content;
        const testString = "helllo my name is <strong>Robin</strong>"
        return (
            <section className="container">
                <div class="row">
                    {this.renderContent(blogContent)}
                </div>
            </section>
        )
    };
}

export default About
