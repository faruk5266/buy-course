import React from 'react';
import './File.css';
import { Button }  from 'react-bootstrap';

const File = (props) => {
    const { title, price, language, instructor, courseduration, img} = props.course;
    return (
        <div className="file">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="data-area">
                <h2 className ='name'>{title}</h2>
                <h4>Instructor: {instructor}</h4>
                <h6>Language: {language}</h6>
                <h6>Course Duration: {courseduration}</h6>
                <h3 className='price'>Price :${price}</h3>    
                <Button className="main-btn"
                        bsStyle='warning'
                    onClick={() => props.handleClick(props.course)}
                >Enroll Now</Button>
            </div>
        </div>
    );
};

export default File;