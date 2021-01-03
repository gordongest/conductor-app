import React from 'react';
import SelectStudio from './SelectStudio';
import AddStudio from './AddStudio';

const TeacherLanding = ({ studioData, selectedStudio, handleSelect }) => {

  return (

    <div className="col-10 d-flex flex-column mt-5">
      <SelectStudio studioData={studioData} selectedStudio={selectedStudio} handleSelect={handleSelect} />
      <AddStudio />
    </div>
  )
}

export default TeacherLanding;