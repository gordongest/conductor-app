import React from 'react';
import SelectStudio from './SelectStudio';
import AddStudio from './AddStudio';

function TeacherLanding() {

  return (

    <div className="col-10 d-flex flex-column mt-5">
      <SelectStudio />
      <AddStudio />
    </div>

  )
}

export default TeacherLanding;