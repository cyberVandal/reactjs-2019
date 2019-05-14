import React from 'react';

function List(props) {
    return (
           
         <li onClick={() => props.click(props.name)} >{props.name}</li>
           
    );
}

export default List;
