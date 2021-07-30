import React from 'react';
import logo from '../logo.svg';
import './Body.css';

const Body = () => {
  return (
    <div className="flex-container">
      <div>
        <img src={logo} className="iconReact" width="220px" alt="logo" />
      </div>
      <div>
        <h1>
          Web Design & <br />
          Development{' '}
        </h1>
        <h3>
          Unique websites that convert <br /> visitors into customeners and{' '}
          <br /> help your business grow.
        </h3>
      </div>
    </div>
  );
};

export default Body;
