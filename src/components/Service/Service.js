import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const { image , name, detials, price,rating,id} = service

    return (
        <div className="col-md-4">
              {/* {show data} */ }
            
                    <div className="card">
                            <img src={ image } alt=" imgae" />
                            <h2>Name: <span>{ name }</span></h2>
                            <h4>Price (tk)= { price}</h4>
                           <p> <b>course Details:-</b>  { detials }</p>
                <p><b>Course Rating:-</b> <Rating
                    initialRating={rating}
                                emptySymbol="far fa-star color"
                                fullSymbol="fas fa-star color"
                                readonly
                            >
                            </Rating></p>
                      <div className="btn">
                         <Link to={`/services/${id}`}>
                               <button>More Details</button>
                         </Link>
                     </div>
                          

                   </div>
         </div>
    );
};

export default Service;