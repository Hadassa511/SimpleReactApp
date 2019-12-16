import React, { Component } from 'react';

class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        title: 'Lorem Ipsum',
        para:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Penatibus et magnis dis parturient montes nascetur ridiculus.'
      }
    };
  }
  render() {
    let data = [];
    for (let i = 0; i < 10; i++) {
      data.push(
        <div className="card" key={i}>
          <h3 key={i}>{this.state.data.title}</h3>
          <p>{this.state.data.para}</p>
        </div>
      );
    }
    return <div className="side-bar">{data}</div>;
  }
}

export default SideNav;
