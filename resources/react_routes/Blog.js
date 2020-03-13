import React from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import '../css/Blog.css';

export class Blog extends React.Component {
    constructor(){
        super();
        this.state = {
            content: []
        }
    }
    componentDidMount(){
        const { blog_id } = this.props.match.params;
        axios.get(`/api/blog/${blog_id}`).then(response => {
            const blog = response.data.data;
            this.setState({
                content: blog
            });
        })
    }
    renderContent (content)  {
      const blogContent = [];
      content.forEach(element => {
        if(element.type === 'paragraph' || element.type === 'intro') blogContent.push(<p class="text-body font-size-lg" key={element.id}>{ReactHtmlParser(element.content)}</p>);
        else if (element.type === `img` || element.type === 'img_main') blogContent.push(<img key={element.id} class={element.size + " mx-auto d-block mt-2 mb-2 img-fluid "} src={element.content} title={element.alt} alt={element.alt} /> ); 
        else if(element.type === 'title' || element.type === 'big_title') blogContent.push(<h2 class="h1" key={element.id}>{ReactHtmlParser(element.content)}</h2>);
      })
      return blogContent;
    }

    render() {
        const blog_content = this.state.content
        return (
            <React.Fragment>
                <section className="container mt-4">
                    <div class="row justify-content-md-center">
                        <div class="col-lg-9">
                            {this.renderContent(blog_content)}
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <p>Tags</p>
                            <p>Leave a comment</p>
                        </div>
                    </div>  
                </section>
            </React.Fragment>
        )
    }
}

export default Blog
