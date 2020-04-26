import React from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import '../css/Blog.css';

export class Blog extends React.Component {
    constructor(){
        super();
        this.state = {
            blog: [],
            current_blog_id: null
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0);
        const { blog_id } = this.props.match.params;
        this.fetchBlogs(blog_id);
    }
    componentDidUpdate() {
        window.scrollTo(0, 0)
        const { blog_id } = this.props.match.params;
        if(blog_id !== this.state.current_blog_id && this.state.current_blog_id !== null){
            this.fetchBlogs(blog_id);
        }
    }
    fetchBlogs(blog_id){
        axios.get(`/api/blog/${blog_id}`).then(response => {
            const blogContent = response.data.data;
            this.setState({
                blog: blogContent,
                current_blog_id: blog_id
            });
        })
    }
    renderContent (content)  {
      const blogContent = [];
      content.forEach(element => {
        if(element.type === 'paragraph' || element.type === 'intro') blogContent.push(<p class="text-body font-size-lg" key={element.id}>{ReactHtmlParser(element.content)}</p>);
        else if (element.type === `img` || element.type === 'img_main') {
            let elClass = ' mt-3 mb-3 img-fluid pr-1 pl-1 ';
            const elStyle = {};
            console.log(element.size)
            if(Number(element.size) === 3.00){
                elClass+= 'col-sm-3';
                elStyle.width= 13+'rem';
                elStyle.height= 12.5+'rem'; 
                elStyle.objectFit= 'cover';
            }
            else if(Number(element.size) === 4.00){
                console.log('entered')
                elClass+= 'col-sm-4 mb-4 height-large-resp';
            }
            else if(Number(element.size) === 4.50){
                elClass+= 'col-4half-resp col-md-4';
               
            }
            else if(Number(element.size) === 6.00){
                elClass+= ' col-md-6';
                elStyle.height= 15+'rem';
                elStyle.objectFit= 'cover';
            }
            else if(Number(element.size) === 8.00){
                elClass+= ' col-md-8 height-large-resp float-left';
            }
            else {
                elClass+= 'mx-auto d-block';
            }
            console.log(elStyle)
            blogContent.push(<img key={element.id} class={elClass} style={elStyle} src={element.content} title={element.alt} alt={element.alt} /> );} 
        else if(element.type === 'title' || element.type === 'big_title') blogContent.push(<h2 class="h1" key={element.id}>{ReactHtmlParser(element.content)}</h2>);
      })
      return blogContent;
    }

    render() {
        const blog_content = this.state.blog
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
