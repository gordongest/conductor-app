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
}));

const App = props => {

  const classes = useStyles();

  const [ updateFlag, setUpdateFlag ] = useState(false);
  const [ teacher, setTeacher ] = useState()
  const [ studioData, setStudioData ] = useState();
  const [ selectedStudio, setSelectedStudio ] = useState();
  const [ students, setStudents ] = useState();
  const [ selectedStudent, setSelectedStudent ] = useState();
  const [ assignments, setAssignments ] = useState();

  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(response => {
        // setTeacher(response.data[0]);
        setStudioData(response.data);
        setSelectedStudio(response.data[0]);
        // setStudent(response.data[0].studios[0].students[0]);
        // setAssignments(response.data[0].studios[0].students[0].assignments);
      })
  }, [updateFlag])

  const handleUpdate = () => {
    setUpdateFlag(!updateFlag);
  };

  const handleStudioSelect = studioId => {
    const newStudio = studioData.filter(studio => studio._id === studioId);

    setSelectedStudio(newStudio[0]);

    const url = `http://localhost:3001/${studioId}`;

    axios.get(url)
      .then(response => setStudents(response.data));
  };

  const handleStudentSelect = async (studentId) => {
    const newStudent = students.filter(student => student._id === studentId)
    setSelectedStudent(newStudent[0]);
    setAssignments(newStudent[0].assignments);
  };

  const toggleComplete = assignmentId => {
    const updatedAssignments = assignments.map(assignment => {
      return assignment._id === assignmentId ? {...assignment, completed: !assignment.completed} : assignment
    });

    setAssignments(updatedAssignments);

    const url = 'http://localhost:3001/updateAssignments';
    const data = {
      student_id: selectedStudent._id,
      assignments: updatedAssignments
    };

    axios.put(url, data)
      .then(response => handleUpdate());
  };

  const addStudio = (data) => {
    data.teacherId = teacher.teacherId;

    const url = 'http://localhost:3001/teacher';

    axios.post(url, data)
      .then(response => handleUpdate());
  };

  const addAssignment = (assignment) => {
    setAssignments([...assignments, assignment]);

    assignment.studentId = selectedStudent._id;

    const url = 'http://localhost:3001/addAssignment';

    axios.post(url, assignment)
      .then(response => console.log(response.data));
  };

  const removeAssignment = assignmentId => {
    const updatedAssignments = assignments.filter(assignment => assignment._id !== assignmentId);

    setAssignments( updatedAssignments );

    const url = 'http://localhost:3001/removeAssignment';
    const data = {
      _id: selectedStudent._id,
      assignment_id: assignmentId
    };

    axios.put(url, data)
      .then(response => handleUpdate());
  };

  const updateAssignment = (assignmentId, update) => {
    const updatedAssignments = assignments.map(assignment => {
      return assignment._id === assignmentId ?
        {...assignment,
          title: update.title,
          tempo: update.tempo,
          notes: update.notes,
          dueDate: update.dueDate
        } : assignment
    });

    setAssignments(updatedAssignments);
    const url = 'http://localhost:3001/updateAssignments';
    const data = {
      _id: selectedStudent._id,
      assignments: updatedAssignments
    };

    axios.put(url, data)
      .then(response => handleUpdate());
  };

  return (
    <>
      <Paper className={classes.paper} elevation={0}>

        <Navbar />

        <Grid container justify='center'>
          <Grid item xs={11} md={8} lg={8}>
            <Routes
              studioData={studioData}
              selectedStudio={selectedStudio}
              students={students}
              selectedStudent={selectedStudent}
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
