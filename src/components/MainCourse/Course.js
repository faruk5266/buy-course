import React from 'react';
import Data from '../../fakeData/data.js';     
import { useState } from 'react';
import File from '../File/File';
import './Course.css';
import Summary from '../Summary/Summary.js';

const Course = () =>{
        console.log(Data);
        const first10 = Data.slice(0, 11);
       const [course, setCourse] = useState(first10);

       const [summary, setSummary] = useState([]);

       const handleClick = (product) => {
           const newCourse = [...summary, product];
           setSummary(newCourse);
       }
    return (
        <div className='course-container'>
            <div className="file-container">
                {
                    course.map(course => <File handleClick ={handleClick}course={course}>
                    </File>)
                }
            </div>
            <div className="summary-container">
                    <Summary summary={summary}></Summary>
            </div>
            
        </div>
    );
};

export default Course;