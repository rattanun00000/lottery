import React from 'react';
// import Prize from '../Prize/Prize';

import Prize from '../Prize/Prize';
import Header from '../Header/Header';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Prize />
    </div>
  );
};

export default Home;
