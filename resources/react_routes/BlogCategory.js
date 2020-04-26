import React, { Component } from 'react'
import axios from 'axios';
import CardContainer from '../js/components/CardContainer';

export class BlogCategory extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            current_category: null
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0);
        const { category_id } = this.props.match.params;
        this.fetchCategories(category_id);
    }
    componentDidUpdate() {
        window.scrollTo(0, 0);
        const { category_id } = this.props.match.params;
        if(category_id !== this.state.current_category && this.state.current_category !== null){
            this.fetchCategories(category_id);
        }
    }
    fetchCategories(category_id){
        axios.get(`/api/category/${category_id}`).then(response => {
            const blogs = response.data.data;
            this.setState({
                data: blogs,
                current_category: category_id
            });
        })
    }
    render() {
        const { data } = this.state;
        return (
            <CardContainer data={data}/>
        )
    }
}

export default BlogCategory
