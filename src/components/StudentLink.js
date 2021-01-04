import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';

const StudentLink = ({ student, studioUrl, handleStudentSelect }) => {

  const studentUrl = student.name.toLowerCase().replace(/\s+/g, '')

  return (
    <Link to={`/teacher/${studioUrl}/${studentUrl}`} onClick={() => handleStudentSelect(student.id)}>
      <ListItem>{student.name}</ListItem>
    </Link>
  )
}

export default StudentLink;