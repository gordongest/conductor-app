import React from 'react';
import { Link } from 'react-router-dom';
import AddStudent from './AddStudent';

const Roster = ({ studioName, roster, handleStudentSelect }) => {

  return (
    <div className="col d-flex flex-column">
    {roster.map(student => {
      const studioUrl= studioName.toLowerCase().replace(/\s+/g, '')
      const studentUrl = student.name.toLowerCase().replace(/\s+/g, '')

      return <Link to={`/teacher/${studioUrl}/${studentUrl}`} onClick={() => handleStudentSelect(student.id)}><p>{student.name}</p></Link>
    })}
    <AddStudent />
    </div>
  )
}

export default Roster;