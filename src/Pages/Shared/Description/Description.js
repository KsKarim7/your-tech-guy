import React, { useEffect, useState } from 'react';
import './Description.css'
import ServiceDescription from '../ServiceDescription/ServiceDescription';

const Description = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id='courses'>
            <h2 className='text-center fs-1  mb-5 mt-3'>Courses and Mentorship</h2>
            <div className='services-container container '>
                {
                    services.map(service => <ServiceDescription
                        key={service.id}
                        service={service}
                    ></ServiceDescription>)
                }
            </div>
        </div>
    );
};

export default Description;