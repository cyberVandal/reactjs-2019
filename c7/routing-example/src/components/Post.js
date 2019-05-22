import React from 'react';



function Post(props) {

    const inlineStyle ={

        width: '750px',
        border: 'solid 1px',
        padding: '10px',
        margin: '5px'

    }
    return(
        <>
        <div style={{display:'flex', alignItems:'center', justifyContent: 'center' }}>
            <div style={inlineStyle}>
                {props.id}
                {props.body}
            </div>
        </div>
       
        </>
    );
}

export default Post;