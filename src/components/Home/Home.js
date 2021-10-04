import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const [homeCourses, setHomeCourses] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/SazzadForazi/fakedata1/main/fakedata1.json')
            .then(res => res.json())
            .then(data => setHomeCourses(data.course))
    }, [])
    return (
        <div>
            <Header></Header>


            <div className="row">
                <div className="col-md-6">
                    <h3>Our Services</h3>
                    <p>Nebulas IT provides quality IT Training in Dhaka, Bangladesh. Skill based IT courses facilitate students earning during learning. Our IT enable services includes Software Development, Digital Marketing, Network Solution, IT Consultancy, Career Counseling. Our recourses are highly trained and also have long experience in market place like Fiverr, Upwork.com, Freelancer.com, 99design.com. Nebulas IT always believe in transparency. We are truly working for reducing unemployment problem in Bangladesh.</p>
                    <div className="row">
                        {
                            homeCourses.map(course => <div className='col-md-6'>
                                <div className="cart">
                                    <div className="courses">
                                        <img className="w-50 center" src={course.img} alt="" />
                                        <h3>Courses : {course.course}</h3>
                                        <h3>Fees : {course.fees} taka</h3>
                                        <p><small>{course.des}</small></p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>


                </div>
                <div className="col-md-6">
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://www.webstyleclub.com/admin/images/.Graphic-designing.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src="https://lh3.googleusercontent.com/proxy/VXSbRvFyTNTSZcBfnEdrREHBDv7IxZu5L0oVo3OHpc4qSXqRzVxkH_Jkwcuw_bxSHQ-persY36tsQR93ddijBe5Dm3j3bUsJFpIEVD5KNyUkAYHztR2w95Zwlg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://binyte.com/wp-content/uploads/2019/10/UIUX-designing-1.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;