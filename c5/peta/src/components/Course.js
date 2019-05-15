import React from 'react';


function Course(props) {
    return(
        <p onClick={() => props.click(props.id-1)}>
            {props.id}, {props.name}
        </p>
    )
}

export default Course;