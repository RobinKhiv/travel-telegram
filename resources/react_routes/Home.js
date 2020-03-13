import React from 'react';
import axios from 'axios';
import CardContainer from '../js/components/CardContainer';

export class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    axios.get('/api/blog')
      .then(response => {
        const data = response.data.data;
        this.setState({
          data
        });
      })
  }
    render() {
      const { data } = this.state;
        return (
          <CardContainer data={data} />
        )
    }
};

export default Home;
