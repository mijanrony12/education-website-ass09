import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {

    return (
        <div className="banner">
            <div class="banner-text">
                <h1 >I am Sirajum Munir Nirjhar</h1>
                <p>i was IELTS master Trainer  and have 14 years Experiene</p>
                <Link to="/about">
                       <button>About Me</button>
                </Link>
            </div>
      </div>
    );
};

export default Home;