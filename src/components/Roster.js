import React from 'react';
import List from '@material-ui/core/List';
import StudentLink from './StudentLink';

const Roster = ({ studioName, students, handleStudentSelect, viewer }) => {

  const studioUrl= studioName.toLowerCase().replace(/\s+/g, '')

  return (
    <>
      <List>
        {students.map(student =>
          <StudentLink
            student={ student }
            studioUrl={ studioUrl }
            handleStudentSelect={ handleStudentSelect }
            viewer={ viewer }
          />
        )}
      </List>
    </>
  )
}

export default Roster;