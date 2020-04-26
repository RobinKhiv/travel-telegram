import React, { Component } from 'react'
import axios from 'axios';
import CardContainer from '../js/components/CardContainer';

export class BlogCategory extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        const { category_id } = this.props.match.params;
        axios.get(`/api/category/${category_id}`).then(response => {
            const blogs = response.data.data;
            this.setState({
                data: blogs
            });
        })
    }
    render() {
        const { data } = this.state;
        console.log(data);
        return (
            <CardContainer data={data}/>
        )
    }
}

export default BlogCategory
