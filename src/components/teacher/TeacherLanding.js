import React from 'react';
import SelectStudio from './SelectStudio';
import AddStudio from './AddStudio';

const TeacherLanding = ({ studioData, selectedStudio, handleStudioSelect }) => {

  return (

    <div className="col-10 d-flex flex-column mt-5">
      <SelectStudio studioData={studioData} selectedStudio={selectedStudio} handleStudioSelect={handleStudioSelect} />
      <AddStudio />
    </div>
  )
}

export default TeacherLanding;