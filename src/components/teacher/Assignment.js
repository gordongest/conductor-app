import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const Assignment = ({ title, notes, completed }) => {
  return (
    <>
      <ListItem>
        <Checkbox tabIndex={-1} checked={completed} />
        <ListItemText
          style={{ textDecoration: completed ? 'line-through' : 'none'}}
        >
          {title}
        </ListItemText>
        <ListItemText>
          {notes}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label="Edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  )
}

export default Assignment;