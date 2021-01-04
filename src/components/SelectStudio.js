import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/Styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GoButton from './GoButton';

const useStyles = makeStyles( theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  }
}))

const SelectStudio = ({ studioData, selectedStudio, handleStudioSelect, viewer }) => {

  const classes = useStyles();

  const [ studio, setStudio ] = useState('');
  const handleChange = e => {
    setStudio( e.target.value )
    handleStudioSelect( e.target.value )
  }
  const url = `/${viewer}/` + selectedStudio.studioName.toLowerCase().replace(/\s+/g, '');

  return (

    <Grid container direction='row' justify='space-between' alignItems='center' spacing={2}>
      <Grid item xs={9}>
        <Grid container>
          <FormControl>
            <InputLabel id="studio-select-label">Select a studio...</InputLabel>
            <Select
              labelId="studio-select-label"
              id="studio-select"
              value={studio}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {studioData.map(studio => {
                return <MenuItem value={studio.id}>{studio.studioName}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container justify='center'>
          <GoButton route={url} text='go' />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SelectStudio;