import React, { useState } from 'react';
import goButton from './goButton';

const SelectStudio = ({ studioData, selectedStudio, handleSelect }) => {

  const url = '/teacher/' + selectedStudio.studioName.toLowerCase().replace(/\s+/g, '');

  return (
    <div className="row d-flex justify-content-center">
      <form action="" className="form-inline">
        <label className= "mr-3" htmlFor="#inlineFormStudioSelect">Select Studio</label>
        <select name="" id="inlineFormStudioSelect" className="custom-select mr-3" onChange={e => handleSelect(e)}>
          <option selected value="">Select an option...</option>
          {studioData.map(studio => {
            return <option value={studio.studioName}>{studio.studioName}</option>
          })}
        </select>
        {goButton(url)}
      </form>
    </div>
  )
}

export default SelectStudio;