import React, { Component } from 'react';

export default class Container extends Component {
  render() {
    const { story } = this.props;
    return (
        <div style={{padding: '2rem', background: '#fff', height: '100vh'}}>
            {story()}
        </div>
    );
  }
}
