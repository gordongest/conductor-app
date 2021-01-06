import React from 'react';
import { v4 as uuid } from 'uuid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useInputState from '../../hooks/useInputState';

const AddAssignment = ({ addAssignment }) => {

  const [ title, setTitle, resetTitle ] = useInputState('');
  const [ tempo, setTempo, resetTempo ] = useInputState('');
  const [ notes, setNotes, resetNotes ] = useInputState('');
  const [ dueDate, setDueDate, resetDueDate ] = useInputState('');

  const handleReset = () => {
    resetTitle();
    resetTempo();
    resetNotes();
    resetDueDate();
  };

  const handleSubmit = (title, tempo, notes, dueDate) => {
    const newAssignment = {
      title: title,
      assignmentId: uuid(),
      tempo: tempo,
      notes: notes,
      dueDate: dueDate,
      completed: false
    };

    addAssignment(newAssignment);
    handleReset();
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(title, tempo, notes, dueDate);
      }}
    >
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='h6'>Add an assignment...</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            value={title}
            onChange={setTitle}
            margin='normal'
            label='Assignment Title'
            fullWidth
          />
          <TextField
            value={tempo}
            onChange={setTempo}
            margin='normal'
            label='Tempo'
            className="ml-3"
          />
          <TextField
            value={notes}
            onChange={setNotes}
            margin='normal'
            label='Notes'
            className="ml-3"
          />
          <TextField
            value={dueDate}
            onChange={setDueDate}
            margin='normal'
            label='Due Date'
            className="ml-3"
          />
        </AccordionDetails>
        <AccordionActions>
          <Button type="button" size="small" onClick={handleReset}>Cancel</Button>
          <Button type='submit' size="small" color="primary">Save</Button>
        </AccordionActions>
      </Accordion>
    </form>
  )
}

export default AddAssignment;