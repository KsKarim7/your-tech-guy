import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='my-5 container'>
            <h2 className='my-5 text-center text-secondary'>Q & A Portal</h2>
            <Accordion >
                <Accordion.Item >
                    <Accordion.Header>Question no.1: Difference between Authorization and Authentication.</Accordion.Header>
                    <Accordion.Body>
                        The process by which someone is verified in a website and get access to the website is called Authentication.
                        And whereas Authorization is the procedure of verifying in what specific applications, data and files the user has the access.The actual difference between both of the processes is, in Authentication the identity of users are checked to give the access to the system and in Authorization the users authorities are checked for accessing the resources. Authentication is the process which is done before Authorization.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item >
                    <Accordion.Header>Question no.2: Why are you using firebase? And what other options do you have to implement Authentication?</Accordion.Header>
                    <Accordion.Body>
                        I use firebase for the Authentication system of my website. As we know Firebase Authentication system provides us backend services, easy to use SDKs and ready made UI libraries to authenticate our app. It allow users to sign in to my app using one or more sign-in methods, which includes email address and password sign-in and federated identity providers such as Google Sign-in and Facebook Login etc.There are many other options to implement authentication such as two-factor authentication(2FA), token authentication , biometric authentication , transaction authentication, computer recognition authentication etc
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Header>Question no.3: What other services does firebase provide other than Authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase inc originally developed 'Firebase' and later acquired by Google. It provides various services that help us to develop high-quality mobile and web applications.It is compatible with Web, iOS, Android and OS X clients.There are a lot of other services other than Authentication which is provided by firebase.They  are written below:
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Cloud Messaging</li>
                        <li>Hosting</li>
                        <li>Machine Learning</li>
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Cloud Messaging</li>
                        <li>Dynamic Links</li>

                    </Accordion.Body>
                </Accordion.Item >
            </Accordion>
        </div>
    );
};

export default Blogs;