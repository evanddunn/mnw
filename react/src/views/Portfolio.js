import React from 'react';
import { Card } from 'react-bootstrap';

export default class Portfolio extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
      posts: [],
    };
  }

  // createMerchant() {
  //   let name = prompt('Enter merchant name');
  //   let email = prompt('Enter merchant email');
  //   fetch('http://localhost:3001/merchants', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({name, email}),
  //   })
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       alert(data);
  //     });
  // }

  async getPosts() {
    let response = await fetch('http://localhost:3001/blog');
    let data = await response.text();
    this.setState({
      posts: JSON.parse(data),
    });
      // .then(response => {
      //   return response.text();
      // })
      // .then(data => {
      //   console.log(JSON.parse(data));
      //   this.setState({
      //     posts: JSON.parse(data),
      //   });
      // });
  }

  // deleteMerchant() {
  //   let id = prompt('Enter merchant id');
  //   fetch(`http://localhost:3001/merchants/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       alert(data);
  //     });
  // }

  async componentDidMount() {
    await this.getPosts();
    // console.log(this.state.posts);
  }

  componentDidUpdate() {
    // console.log(this.state.posts);
  }

  render () {
    return (
      <div>
        {
          this.state.posts.map((p, i) => (
            <Card key={i}>
              <Card.Title>{p.title}</Card.Title>
              <Card.Body>{p.content}</Card.Body>
            </Card>
          ))
        }
      </div>
    )
  }
}