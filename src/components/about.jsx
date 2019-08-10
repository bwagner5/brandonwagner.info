import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    getSoftwareEngineeringDescription() {
        return `
        I'm a software and security engineer. 
        I love creating software that is manageable, scalable, user friendly, and evolving. 
        I try to automate everything and stay up-to-date on the latest tools.
        `;
    }

    getAudioEngineeringDescription() {
        return `
        I worked for 3 1/2 years in the Events Production department at George Mason University. 
        I was made head technician at the end of my second year. 
        I love mixing audio and creating stunning events with audio, video, and lighting. 
        I worked with a lot of great people including Eric Holder (former U.S. Attorney General) and some great A/V technicians in the department. 
        I continue to freelance occasionally.
        `;
    }

    getSecurityEngineeringDescription() {
        return `
        I have always been interested in computer security. It's very interesting to stay ahead of bad actors who try to compromise systems. 
        I completed a Master's program at George Mason University in Computer Science w/ a concentration on Security. 
        I also worked at AOL in the security department where I put my development skills and security interest to work in the AWS public Cloud. 
        `;
    }

    render() {
        return (
            <span>
                <div id="about" className="page-alternate">
                    <div className="container">
                        <div className="row">
                            <div className="span12">
                                <div className="title-page">
                                    <h2 className="title">About Me</h2>
                                    <h3 className="title-description">Learn About Me.</h3>
                                    <p className="lead">I love spending time with my wife, drinking coffee, and building cloud native applications.</p>
                                    <p className="lead"> I graduated from George Mason University with a Bachelor's and Master's in Computer Science.</p>
                                    <p className="lead"> I currently work at AWS as a Software Development Engineer</p>
                                    <p className="lead"> I blog on Medium (views are my own and not of my employer): <a href="https://medium.com/@brandon.wagner">https://medium.com/@brandon.wagner</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="span4 profile">
                                <div className="image-wrap">
                                    <div className="hover-wrap">
                                        <span className="overlay-img"></span>
                                        <span className="overlay-text-thumb">Software Engineer</span>
                                    </div>
                                    <img src="img/profile/profile-01.jpg" alt="Sotware Engineering" />
                                </div>
                                <h3 className="profile-name">Software Engineering</h3>
                                <p className="profile-description">{this.getSoftwareEngineeringDescription()}</p>
                            </div>

                            <div className="span4 profile">
                                <div className="image-wrap">
                                    <div className="hover-wrap">
                                        <span className="overlay-img"></span>
                                        <span className="overlay-text-thumb">Security</span>
                                    </div>
                                    <img src="img/profile/profile-02.jpg" alt="Security" />
                                </div>
                                <h3 className="profile-name">Secure Engineering</h3>
                                <p className="profile-description">{this.getSecurityEngineeringDescription()}</p>
                            </div>

                            <div className="span4 profile">
                                <div className="image-wrap">
                                    <div className="hover-wrap">
                                        <span className="overlay-img"></span>
                                        <span className="overlay-text-thumb">Audio Engineering</span>
                                    </div>
                                    <img src="img/profile/profile-03.jpg" alt="Audio Engineering" />
                                </div>
                                <h3 className="profile-name">Audio Engineering</h3>
                                <p className="profile-description">{this.getAudioEngineeringDescription()}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </span>
        );
    }
  
}

export default About;
