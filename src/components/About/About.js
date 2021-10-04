import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h3>Why We Are Better</h3>
                    <p>100 % quality ensure, honesty, responsibility, and dedicated make us different from others. Our are 24×6 hours available for clients. We give same importance for every project.

                        We are always take care individual for our students. We give one 2 one support.</p>
                </div>
                <div className="col-md-6">
                    <h3>Our Course Strength</h3>
                    <div>
                        <ProgressBar variant="success" now={70} label='Software Training' /> <br />
                        <ProgressBar variant="info" now={50} label='Mobile Apps Development' /><br />
                        <ProgressBar variant="warning" now={60} label='Freelancing and Outsourcing' /><br />
                        <ProgressBar variant="danger" now={80} label='Web Development' /><br />
                        <ProgressBar variant="warning" now={60} label='Graphic Design' /><br />
                        <ProgressBar variant="info" now={90} label='Digital Marketing' />
                    </div>
                </div>


                <h3>Meet Ours Teachers</h3>
                <div className="row">
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href=" " target="_blank">
                                <img className="img-thumbnail w-60" src="https://nebulas-it.com/wp-content/uploads/2016/04/about-us.jpg" alt="Lights" />
                                <div className="caption">
                                    <h4>Md. Aminul Islam</h4>
                                    <p>Managing Derector</p>
                                    <p>C++.C#.JAVA.PHP.Wordpress.Jquewy.JavaScript</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href=" " target="_blank">
                                <img className="img-thumbnail w-60" src="https://nebulas-it.com/wp-content/uploads/2016/04/about-us.jpg" alt="Nature" />
                                <div className="caption">
                                    <h4>Md.Mahabubr Rahaman</h4>
                                    <p>Managing Derector</p>
                                    <p>HTML.CSS.Wordpress.Jquewy.JavaScript</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href=" " target="_blank">
                                <img className="img-thumbnail w-60" src="https://nebulas-it.com/wp-content/uploads/2016/04/about-us.jpg" alt="Fjords" />
                                <div className="caption">
                                    <h4>Ikhtiar Hossain Rakib</h4>
                                    <p>Managing Derector</p>
                                    <p>Content Writing.Flyer Design.Conver Design</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;