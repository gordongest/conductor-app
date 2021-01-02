import React, { useState } from 'react';
import goButton from './goButton';

function SelectStudio({ studios }) {

  const [studioId, setStudioId] = useState('');

  const handleChange = (e) => {
    const url = '/teacher/' + e.target.value.toLowerCase().replace(/\s+/g, '');
    setStudioId(url);
  }

  return (
    <div className="row d-flex justify-content-center">
      <form action="" className="form-inline">
        {console.log({studios})}
        {console.log({studioId})}
        <label className= "mr-3" htmlFor="#inlineFormStudioSelect">Select Studio</label>
        <select name="" id="inlineFormStudioSelect" className="custom-select mr-3" onChange={e => handleChange(e)}>
          <option selected value="">Select an option...</option>
          {studios.map(studio => {
            return <option value={studio.studioName}>{studio.studioName}</option>
          })}
        </select>
        {goButton(studioId)}
      </form>
    </div>
  )
}

export default SelectStudio;