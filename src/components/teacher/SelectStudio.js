import React, { useState } from 'react';

function SelectStudio() {

  const [studio, setStudio] = useState('');

  const handleChange = (e) => {
    setStudio(e.target.value)
  }

  return (
    <div className="row">
      {console.log({studio})}
      <label htmlFor="#studioSelect">Select Studio</label>
      <select name="" id="studioSelect" className="form-select" onChange={e => handleChange(e)}>
        <option selected value="">Select an option...</option>
        <option value="DePaul">DePaul</option>
        <option value="HEHS">HEHS</option>
        <option value="MIC">MIC</option>
      </select>
    </div>
  )
}

export default SelectStudio;