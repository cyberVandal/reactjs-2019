import React from 'react';


function Form(props){

    return(
        
       
           <form onSubmit={props.submit}>
               <label>Name</label>
               <input type="text" value={props.name}  onChange={props.changeName}/>
               <br />
               <label>Days</label>
               <input type="text" value={props.days}  onChange={props.changeDays} />
               <br />
               <label>Description</label>
               <input type="text" value={props.desc}  onChange={props.changeDesc} />
               <input type="submit" value="ADD COURSE" />
           </form>
   
    );

}

export default Form;