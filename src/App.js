import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import TeacherLanding from './components/teacher/TeacherLanding';
import Studio from './components/teacher/Studio';
import StudentLanding from './components/students/StudentLanding';
import StudentHome from './components/students/StudentHome';
import dummyData from './dummyData';

const App = function(props) {

  const [ studioData, setStudioData ] = useState([{dummyData}]);
  const [ student, setStudent ] = useState(null);

  return (
    <div>
      {console.log(studioData)}
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <Switch>
            <Route exact path='/' render={() => <Landing />} />
            <Route exact path='/teacher' render={() => <TeacherLanding data={studioData} />} />
            <Route exact path='/teacher/:studio' render={routeProps => <Studio studios={studioData} data={routeProps} />} />
            <Route exact path='/teacher/:studio/:student' render={() => <h1 className="mt-4 display-3">You found a student.</h1>} />
            <Route exact path='/students' render={() => <StudentLanding />} />
            <Route exact path='/students/:studio/:name' render={() => <StudentHome />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App;
