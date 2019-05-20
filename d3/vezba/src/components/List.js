import React from 'react';


function List(props){

    return(
        
       
            <li onClick={() => props.click(props.id)}> <h3>{props.name}</h3> </li>
   
    );

}

export default List;