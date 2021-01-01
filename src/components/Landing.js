import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className='row row-cols-2 mt-5 border border-primary'>
        <div className="col d-flex justify-content-center">
          <Link exact to='/teacher'>Teacher</Link>
        </div>
        <div className="col d-flex justify-content-center">
          <Link exact to='/students'>Students</Link>
        </div>
      </div>
    )
  }
}

export default Landing;