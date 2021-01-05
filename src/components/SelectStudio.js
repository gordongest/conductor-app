import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GoButton from './GoButton';

const SelectStudio = ({ studioData, selectedStudio, handleStudioSelect, viewer }) => {

  const [ studio, setStudio ] = useState('');
  const handleChange = e => {
    setStudio( e.target.value )
    handleStudioSelect( e.target.value )
  }
  const url = `/${viewer}/` + selectedStudio.studioName.toLowerCase().replace(/\s+/g, '');

  return (

    <Grid container direction='row' justify='space-between' alignItems="flex-end" spacing={2}>
      <Grid item xs={10}>
        <FormControl fullWidth>
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
      <Grid item xs={2}>
        <GoButton route={url} text='go' />
      </Grid>
    </Grid>
  )
}

export default SelectStudio;