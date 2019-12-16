import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import SideNav from './SideNav';

import Logo from './logo.png';
//import Placeholder from './placeholder.png';

const api = 'http://localhost:5000/submit';
//const api = 'https://jsonplaceholder.typicode.com/users';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    axios
      .get(api)
      .then(resp => resp.data)
      .then(data => {
        this.setState({ data });
        console.log(this.state.data);
      })
      .catch(err => console.log(err.message));
  }
  render() {
    const items = this.state.data;
    return (
      <div className="container">
        <div className="header">
          <img className="logo" src={Logo} alt="" />
          <p>What is Lorem Ipsum</p>
        </div>
        <div className="body">
          <h3>{items.title}</h3>
          <p className="desc">{items.desc}</p>
          <p className="content">{items.content}</p>
          <img className="placeholder" src={items.image} alt="" />
          {/* <img className="placeholder" src={Placeholder} alt="" /> */}
          <br />
        </div>
        <Nav />
        <SideNav />
        <div className="footer">
          <input
            type="textarea"
            placeholder="Enter your message here and submit to get the response"
          />
          <button className="footer-submit" onClick={this.onSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default Landing;
