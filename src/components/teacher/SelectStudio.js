import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GoButton from './GoButton';

const SelectStudio = ({ studioData, selectedStudio, handleStudioSelect }) => {

  const [ studio, setStudio ] = useState('');
  const handleChange = e => {
    setStudio( e.target.value )
    handleStudioSelect( e.target.value )
  }
  const url = '/teacher/' + selectedStudio.studioName.toLowerCase().replace(/\s+/g, '');

  return (

    <>
      <FormControl>
        <InputLabel id="studio-select-label">Select a studio...</InputLabel>
        <Select
          labelId="studio-select-label"
          id="studio-select"
          value={studio}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {studioData.map(studio => {
            return <MenuItem value={studio.id}>{studio.studioName}</MenuItem>
          })}
        </Select>
        <GoButton route={url} text='go' />
      </FormControl>
    </>
  )
}

export default SelectStudio;