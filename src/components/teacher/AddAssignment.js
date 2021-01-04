import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useInputState from '../../hooks/useInputState';

const AddAssignment = ({ addAssignment }) => {

  const [ name, setName, resetName ] = useInputState('');
  const [ tempo, setTempo, resetTempo ] = useInputState('');
  const [ notes, setNotes, resetNotes ] = useInputState('');
  const [ dueDate, setDueDate, resetDueDate ] = useInputState('');


  return (
    <Paper style={{ margin: '1rem 0', padding: '1rem .5rem' }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addAssignment( name, tempo, notes, dueDate );
          resetName();
          resetTempo();
          resetNotes();
          resetDueDate();
        }}
      >
        <TextField
          value={name}
          onChange={setName}
          margin='normal'
          label='Add new assignment'
          className="ml-3"
          fullWidth
        />
        <TextField
          value={tempo}
          onChange={setTempo}
          margin='normal'
          label='Add tempo'
          className="ml-3"
        />
        <TextField
          value={notes}
          onChange={setNotes}
          margin='normal'
          label='Add notes'
          className="ml-3"
        />
        <TextField
          value={dueDate}
          onChange={setDueDate}
          margin='normal'
          label='Add due date'
          className="ml-3"
        />
        <Button type='submit' variant='contained' color='primary' disableElevation>Submit</Button>
      </form>
    </Paper>
  )
}

export default AddAssignment;