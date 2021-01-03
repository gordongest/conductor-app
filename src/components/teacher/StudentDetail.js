import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Assignment from './Assignment';

const StudentDetail = ({ student }) => {

  return (
    <>
      <Paper>
        <Typography className="ml-2" color='inherit'>{student.name}</Typography>
        <Divider />
        <Typography className="ml-2" color='inherit'>Goals</Typography>
        <List>
          {student.goals.map(goal => {
            return (
              <>
                <Typography className="ml-3" color='inherit'>{goal.title}</Typography>
                <Typography className="ml-3" color='inherit'>{goal.body}</Typography>
              </>
            )
          })}
        </List>
        <Divider />
        <Typography className="ml-2" color='inherit'>Assignments</Typography>
        <List>
          {student.assignments.map(assignment => {
            return (
              <>
                <Assignment
                  title={assignment.title}
                  notes={assignment.notes}
                  completed={assignment.completed}
                />
                <Divider />
              </>
            )
          })}
        </List>
      </Paper>
    </>
  )
}

export default StudentDetail;