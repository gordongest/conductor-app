import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import TeacherLanding from './components/teacher/TeacherLanding';
import Studio from './components/teacher/Studio';
import StudentView from './components/teacher/StudentView';

// import StudentLanding from './components/students/StudentLanding';
// import StudentHome from './components/students/StudentHome';

import dummyData from './dummyData';

const App = props => {

  const [ studioData, setStudioData ] = useState(dummyData.studios);
  const [ selectedStudio, setSelectedStudio ] = useState(studioData[0]);
  const [ student, setStudent ] = useState(selectedStudio.students[0]);
  const [ assignments, setAssignments ] = useState(student.assignments);

  const handleStudioSelect = e => {
    const newStudio = studioData.filter( studio => studio.studioName.toLowerCase().replace(/\s+/g, '') === e.target.value.toLowerCase().replace(/\s+/g, '') )
    setSelectedStudio( newStudio[0] );
  }

  const handleStudentSelect = e => {
    const newStudent = selectedStudio.students.filter( student => student.name.toLowerCase().replace(/\s+/g, '') === e )
    setStudent( newStudent[0] )
    setAssignments( student.assignments );
    console.log(student)
  }

  const addAssignment = ( title, tempo, notes, dueDate ) => {
    setAssignments([...assignments, { 'title': title, 'completed': false, 'tempo': tempo, 'notes': notes, 'dueDate': dueDate } ])
    // console.log(assignments)
  }

  const removeAssignment = assignmentId => {
    const updatedAssignments = assignments.filter( assignment => assignment.title !== assignmentId );
    setAssignments( updatedAssignments );
  }

  useEffect(() => {
    console.log('studio:', selectedStudio)
    console.log('student:', student)
    console.log('assignments:', assignments)
  }, [ selectedStudio, student, assignments ])

  return (
    <>
      {/* {console.log(assignments)} */}
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
        <Grid container justify='center' style={{ marginTop: '1rem' }}>
          <Grid item xs={11} md={8} lg={8}>
          <Switch>
            <Route exact path='/' render={() => <Landing />} />
            <Route exact path='/teacher' render={() => <TeacherLanding studioData={studioData} selectedStudio={selectedStudio} handleSelect={handleStudioSelect} />} />
            <Route exact path='/teacher/:studio' render={() => <Studio selectedStudio={selectedStudio} handleStudentSelect={handleStudentSelect} />} />
            <Route exact path='/teacher/:studio/:student' render={() => <StudentView student={student} assignments={assignments} addAssignment={addAssignment} removeAssignment={removeAssignment} />} />

            {/* <Route exact path='/students' render={() => <StudentLanding />} />
            <Route exact path='/students/:studio/:name' render={() => <StudentHome />} /> */}

          </Switch>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default App;
