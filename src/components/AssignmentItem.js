import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggle from '../hooks/useToggle';
import EditAssignment from './teacher/EditAssignment';

const AssignmentItem = ({ title, tempo, notes, dueDate, completed, id, toggleComplete, updateAssignment, removeAssignment }) => {
  const [ edit, editToggle ] = useToggle()

  return (
    <>
      <ListItem>
        {edit ? (
          <EditAssignment
            id={id}
            updateAssignment={ updateAssignment }
            title={ title }
            tempo={ tempo }
            notes={ notes }
            dueDate={ dueDate }
            editToggle={ editToggle }
          />
         ) : (
          <>
            <Checkbox tabIndex={ -1 } checked={ completed } onClick={() => toggleComplete(id)} />
            <ListItemText
              style={{ textDecoration: completed ? 'line-through' : 'none'}}>
              {title}
            </ListItemText>
            <ListItemText>{tempo}</ListItemText>
            <ListItemText>{notes}</ListItemText>
            <ListItemText>{dueDate}</ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label="Edit" onClick={editToggle}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="Delete" onClick={() => removeAssignment(id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )
        }
      </ListItem>
    </>
  )
}

export default AssignmentItem;