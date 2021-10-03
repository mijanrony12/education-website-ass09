import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="notFound-section text-center">
             <div className="content">
                    <h1>Your page not found-----'404'</h1>
                   <p> please check your url</p>
                <Link to="/home">
                     <button>Back Home Page</button>
                </Link>
              </div>
        </div>
    );
};

export default NotFound;