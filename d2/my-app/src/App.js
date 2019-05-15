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

  courseDetails = (name, br) => {
      console.log("Kliknat" + name + br);
      const courseInfoName = this.state.courses[br].name;
      const courseInfoDays = this.state.courses[br].days;
      const courseInfoDesc = this.state.courses[br].desc;
      document.getElementById('infoCourseName').innerHTML = courseInfoName;
      document.getElementById('infoCourseDays').innerHTML = courseInfoDays;
      document.getElementById('infoCourseDesc').innerHTML = courseInfoDesc;

  }
  courseAdd = () => {
          const newName = document.getElementById('newName').value;
          const newDays = document.getElementById('newDays').value;
          const newDesc = document.getElementById('newDesc').value;
          const newCourse ={
              name: newName,
              days: newDays,
              desc: newDesc

          }
          console.log("Prateni se podatoci "+ newName);
          const newCourses = [...this.state.courses];
          newCourses.push(newCourse);
          this.setState({ courses: newCourses});


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
                  br={index}
                  click={this.courseDetails}           
                />                       
              )
              }
           </ul>
         </div>
           
        
     
      <hr/>

      <div id="selectedCourse">
        <h3>Selected course details</h3>
        <h3 id="infoCourseName"></h3>
        <p id="infoCourseDays"></p>
        <p id="infoCourseDesc"></p>      
      </div>
      <hr/>

      <div id="addCourse">
        <h3>Add a Course</h3>
              
                  <label>Name</label>
                  <input id="newName" type="text" name="name"></input>
                  <br/>
                  <label>Days</label>
                  <input id="newDays"type="text" name="days"></input>
                  <br/>
                  <label>Description</label>
                  <input id="newDesc" type="textarea" name="desc"></input>
                  <br/>
                  <button onClick={this.courseAdd}>ADD</button>
     </div>

      </>
    );

  }
 
}

export default App;
