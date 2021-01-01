import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import TeacherLanding from './components/teacher/TeacherLanding';
import Studio from './components/teacher/Studio';
import StudentLanding from './components/students/StudentLanding';
import StudentHome from './components/students/StudentHome';
import dummyData from './dummyData';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {dummyData}
    }
  }

  render() {

    const studioData = this.state.data.dummyData.dummyData;

    return (
      <div>
        {/* {console.log(studioData)} */}
        <Navbar />
        <div className="container">
          <div className="row justify-content-center">
            <Switch>
              <Route exact path='/' render={() => <Landing />} />
              <Route exact path='/teacher' render={() => <TeacherLanding data={studioData} />} />
              <Route exact path='/teacher/:studio' render={routeProps => <Studio studio={routeProps.match.params.name} />} />
              <Route exact path='/students' render={() => <StudentLanding />} />
              <Route exact path='/students/:studio/:name' render={() => <StudentHome />} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
