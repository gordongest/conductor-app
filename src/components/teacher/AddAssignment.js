import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useInputState from '../../hooks/useInputState';

const AddAssignment = ({ addAssignment }) => {

  const [ name, handleNameChange, reset ] = useInputState('');
  const [ tempo, handleTempoChange, reset2 ] = useInputState('');
  const [ notes, handleNotesChange, reset3 ] = useInputState('');
  const [ dueDate, handleDueDateChange, reset4 ] = useInputState('');


  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addAssignment( name, tempo, notes, dueDate );
          reset();
          reset2();
          reset3();
          reset4();
        }}
      >
        <TextField
          value={name}
          onChange={handleNameChange}
          margin='normal'
          label='Add new assignment'
          className="ml-3"
          fullWidth
        />
        <TextField
          value={tempo}
          onChange={handleTempoChange}
          margin='normal'
          label='Add tempo'
          className="ml-3"
        />
        <TextField
          value={notes}
          onChange={handleNotesChange}
          margin='normal'
          label='Add notes'
          className="ml-3"
        />
        <TextField
          value={dueDate}
          onChange={handleDueDateChange}
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