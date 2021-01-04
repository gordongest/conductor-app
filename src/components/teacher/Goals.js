import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const Goals = ({ goals }) => {
  return (
    <Paper style={{ margin: '1rem 0', padding: '1rem .5rem' }}>
      <Typography className="ml-3 mt-2" variant='h5' color='inherit'>Goals</Typography>
      {/* <Divider /> */}
      <List>
        {goals.map(goal => {
          return (
            <>
              <Typography className="ml-3 pb-1" variant='h6' color='inherit'>{goal.title}</Typography>
              <Typography className="ml-3 pb-1" color='inherit'>{goal.body}</Typography>
            </>
          )
        })}
      </List>
    </Paper>
  )
}

export default Goals;