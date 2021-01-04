import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Landing from './components/Landing';
import TeacherLanding from './components/teacher/TeacherLanding';
import Studio from './components/teacher/Studio';
import TeacherView from './components/teacher/TeacherView';
// import StudentLanding from './components/students/StudentLanding';
// import StudentHome from './components/students/StudentHome';

const App = props => {

  const [ studioData, setStudioData ] = useState();
  const [ selectedStudio, setSelectedStudio ] = useState();
  const [ student, setStudent ] = useState();
  const [ assignments, setAssignments ] = useState();

  const handleStudioSelect = studioId => {
    const newStudio = studioData.filter(studio => studio.id === studioId)
    setSelectedStudio(newStudio[0]);
  }

  const handleStudentSelect = studentId => {
    const newStudent = selectedStudio.students.filter(student => student.id === studentId)
    setStudent(newStudent[0])
    setAssignments(student.assignments);
  }

  const toggleComplete = assignmentId => {
    const updatedAssignments = assignments.map(assignment => {
      return assignment.id === assignmentId ? {...assignment, completed: !assignment.completed} : assignment
    })
    setAssignments(updatedAssignments);
  }

  const addAssignment = (title, tempo, notes, dueDate) => {
    setAssignments([...assignments, {
      'title': title,
      'completed': false,
      'tempo': tempo,
      'notes': notes,
      'dueDate': dueDate,
      id: uuid()
    }])
  }

  const removeAssignment = assignmentId => {
    const updatedAssignments = assignments.filter(assignment => assignment.id !== assignmentId);
    setAssignments( updatedAssignments );
  }

  const updateAssignment = (assignmentId, update) => {
    const updatedAssignments = assignments.map(assignment => {
      return assignment.id === assignmentId ?
        {...assignment,
          title: update.title,
          tempo: update.tempo,
          notes: update.notes,
          dueDate: update.dueDate
        } : assignment
    })
    setAssignments(updatedAssignments);
  }

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(response => {
        setStudioData(response.data[0].studios)
        setSelectedStudio(response.data[0].studios[0]);
        setStudent(response.data[0].studios[0].students[0]);
        setAssignments(response.data[0].studios[0].students[0].assignments);
      })
  }, [])

  return (
    <>
      {console.log(selectedStudio)}
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
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit'><Link to={'/'} style={{ color: 'white' }}>Conductor</Link></Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify='center'>
          <Grid item xs={11} md={8} lg={8}>
          <Switch>
            <Route exact path='/' render={() => <Landing />} />

            <Route exact path='/teacher' render={() => (
              <TeacherLanding
                studioData={studioData}
                selectedStudio={selectedStudio}
                handleStudioSelect={handleStudioSelect}
              />
            )} />

            <Route exact path='/teacher/:studio' render={() => (
              <Studio
                selectedStudio={selectedStudio}
                handleStudentSelect={handleStudentSelect}
              />
            )} />

            <Route exact path='/teacher/:studio/:student' render={() => (
              <TeacherView
                student={student}
                assignments={assignments}
                toggleComplete={toggleComplete}
                addAssignment={addAssignment}
                updateAssignment={updateAssignment}
                removeAssignment={removeAssignment}
              />
            )} />

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
