import React from 'react';


function Info(props) {
    return (
        <div >
            <p> {props.course.id} </p>
            <p> {props.course.name} </p>
            <p> {props.course.days} </p>
            <p> {props.course.desc} </p>

        </div>

    )
}

export default Info;