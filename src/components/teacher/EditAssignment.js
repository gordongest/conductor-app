import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useInputState from '../../hooks/useInputState';

const EditAssignment = ({ id, title, tempo, notes, dueDate, updateAssignment, editToggle }) => {

  const [ newTitle, setTitle, resetTitle ] = useInputState(title);
  const [ newTempo, setTempo, resetTempo ] = useInputState(tempo);
  const [ newNotes, setNotes, resetNotes] = useInputState(notes);
  const [ newDueDate, setDueDate, resetDueDate ] = useInputState(dueDate);

  const update = {
    title: newTitle,
    tempo: newTempo,
    notes: newNotes,
    dueDate: newDueDate
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        updateAssignment(id, update);
        resetTitle();
        resetTempo();
        resetNotes();
        resetDueDate();
        editToggle();
      }}
    >
      <TextField
        value={newTitle}
        onChange={setTitle}
        margin='normal'
        label='Edit assignment'
        className="ml-3"
        fullWidth
      />
      <TextField
        value={newTempo}
        onChange={setTempo}
        margin='normal'
        label='Edit tempo'
        className="ml-3"
      />
      <TextField
        value={newNotes}
        onChange={setNotes}
        margin='normal'
        label='Edit notes'
        className="ml-3"
      />
      <TextField
        value={newDueDate}
        onChange={setDueDate}
        margin='normal'
        label='Edit due date'
        className="ml-3"
      />
      <Button type='submit' variant='contained' color='primary' disableElevation>Submit</Button>
    </form>
  )
}

export default EditAssignment;