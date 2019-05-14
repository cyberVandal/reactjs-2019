import React, {Component} from 'react';
import List from './components/List';


class App extends Component  {
  
  state = {
    courses: [

      {
          name: 'HTML',
          days: 10,
          desc: 'This course is about learning basics of HTML',
      },
      {
          name: 'CSS',
          days: 10,
          desc: 'Learn CSS and style your web applications',
      },
      {
          name: 'JavaScript',
          days: 12,
          desc:

              'The most used language in the last couple of years. Build for front end applications, but also this days it is used for back end and mobile applications',
      },
      {
          name: 'React',
          days: 14,
          desc: 'React is most used library for building front end applications.',
      },
  ],
  }

  courseDetails = (name) => {
      console.log("Kliknat" + name);

  }
  
  render () {

    return (
      <>

      
       
        <div>
        <h3>List of Courses</h3>
          <ul>     
              {
                this.state.courses.map((course, index ) =>
            
                <List 
                  key={index}
                  name={course.name}
                  click={this.courseDetails}           
                />                       
              )
              }
           </ul>
         </div>
           
        
     
      <hr/>

      <div id="infoCourse">
        <h3>Selected course details</h3>
      </div>
      <hr/>

      <div id="addCourse">
        <h3>Add a Course</h3>
      </div>

      </>
    );

  }
 
}

export default App;
