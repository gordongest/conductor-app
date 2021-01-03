import React from 'react';
import StudioInfo from './StudioInfo';
import Roster from './Roster';
import AddStudent from './AddStudent';

const Studio = ({ selectedStudio, handleStudentSelect }) => {

  return (
    <div className="col-10">
    {console.log(selectedStudio)}
      <div className="row mt-5">
        <StudioInfo data={selectedStudio} />
        <Roster studioName={selectedStudio.studioName} roster={selectedStudio.students} handleStudentSelect={handleStudentSelect} />
      </div>
    </div>
  )
}

export default Studio;