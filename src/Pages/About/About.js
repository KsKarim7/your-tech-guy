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
                    <p>Form the very beginning of my I had a will to work with computer and to study about it. I knew if I become something in my life that will be related to cse . And I have just started my journey of becoming a web developer. I want to see myself in a good shape in this vast growing sector and learn more and more in the upcoming years. I want to set small goals and work and also reach every one of them one by one.</p>
                </dd>

                <dt class="col-sm-3">How hard you will work to achieve your goal:</dt>
                <dd class="col-sm-9">I want to give all I have and the best I can to reach my destinations. I want to fall, maybe I will be lagging behind but I just dont want stop. All I know that I have to be something which will be enough to make myself proud. Success has no limit. I got no excuse to shortened that limit. </dd>


            </dl>
        </div>
    );
};

export default About;