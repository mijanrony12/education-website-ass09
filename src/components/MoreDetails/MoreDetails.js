import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../Hooks/useServices';

const MoreDetails = () => {
    const { id } = useParams();
    // const [ servicess, setServicess ] = useState([])
    
    // useEffect(() => {
    //     fetch('./FakeData.json')
    //         .then(res => res.json())
    //     .then(data=> setServicess(data))
        
    // }, [])
    // console.log(servicess)
    const [ services ] = useServices()
    console.log(services)
    return (
        <div>
                {id}
        </div>
    );
};

export default MoreDetails;