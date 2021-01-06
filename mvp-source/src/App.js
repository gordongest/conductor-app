import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/Styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from './components/Navbar';
import Routes from './components/Routes';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 0,
    margin: 0,
    height: "100vh",
    backgroundColor: '#fafafa'
  }
}))

const App = props => {

  const classes = useStyles();

  const [ updateFlag, setUpdateFlag ] = useState(false);
  const [ teacher, setTeacher ] = useState()
  const [ studioData, setStudioData ] = useState();
  const [ selectedStudio, setSelectedStudio ] = useState();
  const [ student, setStudent ] = useState();
  const [ assignments, setAssignments ] = useState();

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(response => {
        // console.log(response.data)
        setTeacher(response.data[0])
        setStudioData(response.data[0].studios);
        setSelectedStudio(response.data[0].studios[0]);
        setStudent(response.data[0].studios[0].students[0]);
        setAssignments(response.data[0].studios[0].students[0].assignments);
      })
  }, [updateFlag])

  const handleUpdate = () => {
    setUpdateFlag(!updateFlag);
    console.log(updateFlag)
  }

  const handleStudioSelect = studioId => {
    const newStudio = studioData.filter(studio => studio.studioId === studioId)
    setSelectedStudio(newStudio[0]);
  }

  const handleStudentSelect = studentId => {
    const newStudent = selectedStudio.students.filter(student => student.studentId === studentId)
    setStudent(newStudent[0])
    setAssignments(student.assignments);
  }

  const toggleComplete = assignmentId => {
    const updatedAssignments = assignments.map(assignment => {
      return assignment.assignmentId === assignmentId ? {...assignment, completed: !assignment.completed} : assignment
    })
    setAssignments(updatedAssignments);
  }

  const addStudio = (data) => {
    data.teacherId = teacher.teacherId;

    axios.post('http://localhost:3001/teacher', data)
      .then(response => {
        handleUpdate();
        console.log(response.data);
      })
  }

  const addAssignment = async (data) => {
    setAssignments([...assignments, data]);

    data.teacherId = teacher.teacherId;
    data.studioId = selectedStudio.studioId;
    data.studentId = student.studentId;

    axios.post('http://localhost:3001/teacher/studio/student', data)
      // .then(response => console.log(response))
  }

  const removeAssignment = assignmentId => {
    const updatedAssignments = assignments.filter(assignment => assignment.assignmentId !== assignmentId);
    setAssignments( updatedAssignments );
  }

  const updateAssignment = (assignmentId, update) => {
    const updatedAssignments = assignments.map(assignment => {
      return assignment.assignmentId === assignmentId ?
        {...assignment,
          title: update.title,
          tempo: update.tempo,
          notes: update.notes,
          dueDate: update.dueDate
        } : assignment
    })
    setAssignments(updatedAssignments);
  }

  return (
    <>
      {console.log('flag:', updateFlag)}
      {console.log('teacher:', teacher)}
      {console.log('data:', studioData)}
      {console.log('studio:', selectedStudio)}
      {console.log('student:', student)}
      {console.log('assignments:', assignments)}
      <Paper className={classes.paper} elevation={0}>

        <Navbar />

        <Grid container justify='center'>
          <Grid item xs={11} md={8} lg={8}>
            <Routes
              studioData={studioData}
              selectedStudio={selectedStudio}
              student={student}
              assignments={assignments}
              handleStudioSelect={handleStudioSelect}
              handleStudentSelect={handleStudentSelect}
              addStudio={addStudio}
              addAssignment={addAssignment}
              updateAssignment={updateAssignment}
              removeAssignment={removeAssignment}
              toggleComplete={toggleComplete}
            />
          </Grid>
        </Grid>

      </Paper>
    </>
  )
}

export default App;
