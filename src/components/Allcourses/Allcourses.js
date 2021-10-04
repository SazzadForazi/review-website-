import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


import './Allcourses.css'

const Allcourses = () => {
    const [courses, setCourses] = useState([])
    // console.log(courses);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/SazzadForazi/fakedata/main/fakedata.json')
            .then(res => res.json())
            .then(data => setCourses(data?.course))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    {
                        courses.map(course => <div className='col-md-4'>
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
            <Footer></Footer>
        </div>

    );
};

export default Allcourses;