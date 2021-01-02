import React, { useState } from 'react';
import goButton from './goButton';

function SelectStudio({ studios }) {

  const [studio, setStudio] = useState('');

  const handleChange = (e) => {
    const url = '/teacher/' + e.target.value.toLowerCase().replace(/\s+/g, '');
    setStudio(url);
  }

  return (
    <div className="row d-flex justify-content-center">
      <form action="" className="form-inline">
        {console.log({studios})}
        {console.log({studio})}
        <label className= "mr-3" htmlFor="#inlineFormStudioSelect">Select Studio</label>
        <select name="" id="inlineFormStudioSelect" className="custom-select mr-3" onChange={e => handleChange(e)}>
          <option selected value="">Select an option...</option>
          {studios.map(studio => {
            return <option value={studio.id}>{studio.studioName}</option>
          })}
        </select>
        {goButton(studio)}
      </form>
    </div>
  )
}

export default SelectStudio;