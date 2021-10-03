import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';
import './Home.css'
const Home = () => {
       const [services, setServices]=useServices()
    return (
        <div>
            {/* {banner session create} */}
             <div className="banner">
                <div class="banner-text">
                    <h1 >I am Sirajum Munir Nirjhar</h1>
                    <p>i was IELTS master Trainer  and have 14 years Experiene</p>
                    <Link to="/about">
                        <button>About Me</button>
                    </Link>
                </div>
            </div>
            <div>
            <h1 className="text-center mt-4  service"> Our Service</h1>
     <div className="row gy-4 m-5">
                    
                    {/* {data pase new component} */}
                  {
                    services.slice(0,3).map(service => <Service
                        key={ service.id }
                        service={service}
                    ></Service>)
                   }
            </div>
        </div>
       </div>
    );
};

export default Home;