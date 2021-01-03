import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import TeacherLanding from './components/teacher/TeacherLanding';
import Studio from './components/teacher/Studio';
import StudentDetail from './components/teacher/StudentDetail';

// import StudentLanding from './components/students/StudentLanding';
// import StudentHome from './components/students/StudentHome';

import dummyData from './dummyData';

const App = function(props) {

  const [ studioData, setStudioData ] = useState([dummyData.studios]);
  const [ selectedStudio, setSelectedStudio ] = useState([studioData[0][0]]);
  const [ student, setStudent ] = useState([selectedStudio[0].students[0]]);
  const [ tasks, setTasks ] = useState([])

  const handleStudioSelect = e => {
    setSelectedStudio(studioData[0].filter(studio => {
      return studio.studioName.toLowerCase().replace(/\s+/g, '') === e.target.value.toLowerCase().replace(/\s+/g, '')
    }))
  }

  const handleStudentSelect = e => {
    setStudent(selectedStudio[0].students.filter(student => {
      return student.name.toLowerCase().replace(/\s+/g, '') === e
    }))
    console.log(student[0])
  }

  useEffect(() => {
    console.log('useEffect:', student[0])
  }, [selectedStudio, student])

  return (
    <>
      {console.log(student)}
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: '#fafafa'
        }}
        elevation={0}
      >
        <AppBar color='primary' position='static' style={{height: '64px'}}>
          <Toolbar>
            <Typography color='inherit'><Link to={'/'} style={{ color: 'white' }}>Conductor</Link></Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path='/' render={() => <Landing />} />
          <Route exact path='/teacher' render={() => <TeacherLanding studioData={studioData[0]} selectedStudio={selectedStudio[0]} handleSelect={handleStudioSelect} />} />
          <Route exact path='/teacher/:studio' render={() => <Studio selectedStudio={selectedStudio[0]} handleStudentSelect={handleStudentSelect} />} />
          <Route exact path='/teacher/:studio/:student' render={() => <StudentDetail student={student[0]} />} />

          {/* <Route exact path='/students' render={() => <StudentLanding />} />
          <Route exact path='/students/:studio/:name' render={() => <StudentHome />} /> */}

        </Switch>
      </Paper>
    </>
  )
}

export default App;
