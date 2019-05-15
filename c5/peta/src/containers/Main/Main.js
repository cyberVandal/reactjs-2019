import React, {Component} from 'react';
import Course from '../../components/Course';
import Info from '../../components/Info';
import Form from '../../components/Form';
import './Main.css' ;

class Main extends Component {

    state = {
        courses: [
    
          {
              id:1,
              name: 'HTML',
              days: 10,
              desc: 'This course is about learning basics of HTML',
          },
          {
              id:2,
              name: 'CSS',
              days: 10,
              desc: 'Learn CSS and style your web applications',
          },
          {
              id:3,
              name: 'JavaScript',
              days: 12,
              desc:
    
                  'The most used language in the last couple of years. Build for front end applications, but also this days it is used for back end and mobile applications',
          },
          {
              id:4,
              name: 'React',
              days: 14,
              desc: 'React is most used library for building front end applications.',
          },
      ],
        courentSelectedCourse: 1,
        tmpName: "",
        tmpDays: "",
        tmpDesc: ""
      }

      handleSelectedCourse = (id) => {
          console.log(id);
          this.setState({courentSelectedCourse: id})
      }
      handleOnSubmit = (event) => {
          event.preventDefault();
          const courses = [...this.state.courses];
          const newCourse = {
              id: courses.length +1,
              name: this.state.tmpName,
              days: this.state.tmpDays,
              desc: this.state.tmpDesc
          }
          courses.push(newCourse);
          this.setState({courses})

      }
      handleName = (event) => {
          this.setState({tmpName: event.target.value});

      }
      handleDays = (event) => {
        this.setState({tmpDays: event.target.value});

    }
    handleDesc = (event) => {
        this.setState({tmpDesc: event.target.value});

    }

    render() {
        return (
           <div className="wrapper">
            <h1>List</h1>
            {
                this.state.courses.map(course => <Course key={course.id} id={course.id} name={course.name}  click={this.handleSelectedCourse}/> )
            }
            <h1>Show Selected</h1>
            <Info  course={this.state.courses[this.state.courentSelectedCourse]}/>
            <h1>Add Course</h1>
            <Form  submit={this.handleOnSubmit}
                   name={this.state.tmpName}
                   days={this.state.tmpDays}
                   desc={this.state.tmpDesc}
                   handleName={this.handleName}
                   handleDays={this.handleDays}
                   handleDesc={this.handleDesc}
                    />
           </div>
        )
            
        


    }



}

export default Main;