import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';

const StudentLink = ({ student, studioUrl, handleStudentSelect, viewer }) => {

  const studentUrl = student.studentName.toLowerCase().replace(/\s+/g, '')

  return (
    <Link to={`/${viewer}/${studioUrl}/${studentUrl}`} onClick={() => handleStudentSelect(student.studentId)}>
      <ListItem>{student.studentName}</ListItem>
    </Link>
  )
}

export default StudentLink;