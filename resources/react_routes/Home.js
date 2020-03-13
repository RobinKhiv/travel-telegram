import React from 'react';
import axios from 'axios';
import BlogCard from '../js/components/BlogCard';

export class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    axios.get('/api/blog').then(response => {
      const data = response.data.data;
      this.setState({
      data});
    })
  }
    render() {
      const { data } = this.state;
        return (
            <section class="container">
                <div class="row">
                  {data.length && 
                    data.map(blog => 
                      <BlogCard 
                        key={blog.id} 
                        blog_id={blog.blog_id}
                        blog_content={blog.blog_content}
                        title={blog.title}
                      />)
                  }
                </div>         
            </section>
        )
    }
};

export default Home;
