import React from 'react';


function Info(props){

    return(
        
       
            <div>
                <h3>{props.course.name}</h3>
                <p>{props.course.days}</p>
                <p>{props.course.desc}</p>
            </div>
   
    );

}

export default Info;