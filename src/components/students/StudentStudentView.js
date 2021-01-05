import React from 'react';
import Goals from '../Goals';
import Assignments from '../Assignments';
import History from '../History';

const StudentStudentView = ({ student, assignments, toggleComplete, addAssignment, updateAssignment, removeAssignment }) => {

  return (
    <>
      <Goals goals={ student.goals } />
      <Assignments
        assignments={ assignments }
        toggleComplete={ toggleComplete }
        addAssignment={ addAssignment }
        updateAssignment={ updateAssignment }
        removeAssignment={ removeAssignment }
        viewer='student'
      />
      <History />
    </>
  )
}

export default StudentStudentView;