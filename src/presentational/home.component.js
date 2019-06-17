import React from 'react';
import globe from '../images/globe.jpg';

const Home = () => (
    <div className='globe'>
        <h1>Welcome to the app Countries.js</h1>
        <img className='globeImage' src={globe} alt='globe'></img>
    </div>
);

export default Home;