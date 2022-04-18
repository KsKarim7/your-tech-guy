import React from 'react';
import me from '../../images/me.png'


const About = () => {
    return (
        <div className='container my-5'>
            <img src={me} className=" w-25 my-5 " alt="..." />
            <dl class="row">
                <dt class="col-sm-3">My Name:</dt>
                <dd class="col-sm-9">Khaled Saifullah Karim</dd>

                <dt class="col-sm-3">About my goal:</dt>
                <dd class="col-sm-9">
                    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                    <p>Donec id elit non mi porta gravida at eget metus.</p>
                </dd>

                <dt class="col-sm-3">What am I aiming for text 3 months:</dt>
                <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>


            </dl>
        </div>
    );
};

export default About;