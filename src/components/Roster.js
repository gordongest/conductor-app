import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import StudentLink from './StudentLink';

const Roster = ({ studioName, roster, handleStudentSelect }) => {

  const studioUrl= studioName.toLowerCase().replace(/\s+/g, '')

  return (
    <>
      <List>
        {roster.map(student =>
          <StudentLink
            student={ student }
            studioUrl={ studioUrl }
            handleStudentSelect={ handleStudentSelect }
          />
        )}
      </List>
    </>
  )
}

export default Roster;