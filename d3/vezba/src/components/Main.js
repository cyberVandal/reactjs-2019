import React, {Component} from 'react';
import List from './List';
import Info from './Info';
import Form from './Form';


class Main extends Component {
    
    state ={

        courses: [
            {
                id: 1,
                name: 'HTML',
                days: 10,
                desc: 'HTML description'
            },
            {
                id: 2,
                name: 'CSS',
                days: 11,
                desc: 'CSS description'
            },
            {
                id: 3,
                name: 'JavaScript',
                days: 13,
                desc: 'JavaScript description'
            }
        ],
        currentSelectedId: 1,
        tmpName: '',
        tmpDays: '',
        tmpDesc: '',
        errName: ''
    }

    handleSelectedCourse = (id) => {
        
        this.setState({ currentSelectedId: id })

    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Stopirano e ")
        const courses = [...this.state.courses];
        const newCourse = {
            id: courses.length + 1,
            name: this.state.tmpName,
            days: this.state.tmpDays,
            desc: this.state.tmpDesc
        }
        courses.push(newCourse);
        this.setState({ courses });
        this.setState({tmpName:''})
        this.setState({tmpDays:''})
        this.setState({tmpDesc:''})

    }
    handleName = (e) => {
        const tmpName = e.target.value;
        this.setState({ tmpName });
       
    }
    handleDays = (e) => {
        const tmpDays = e.target.value;
        this.setState({ tmpDays });
    }
    handleDesc = (e) => {
        const tmpDesc = e.target.value;
        this.setState({ tmpDesc });
    }

    render(){

        return(
            <div>
                <div >
                    <ul>
                    {
                        this.state.courses.map(course => <List 
                            key={course.name}
                            id={course.id}
                            name={course.name}
                            click={this.handleSelectedCourse}
                        />)
                    } 

                    </ul>
                </div>
                <hr />
                <div>
                        <Info course ={this.state.courses[this.state.currentSelectedId-1]} />
                </div> 
                <hr />  
                <div>
                    <Form 
                        submit={this.handleSubmit}
                        name={this.state.tmpName}
                        days={this.state.tmpDays}
                        desc={this.state.tmpDesc}
                        changeName={this.handleName}
                        changeDays={this.handleDays}
                        changeDesc={this.handleDesc}
                    
                    />
                </div>     
            </div>
          
        );
    }

}

export default Main;