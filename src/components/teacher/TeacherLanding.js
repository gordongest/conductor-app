import React from 'react';
import SelectStudio from './SelectStudio';
import AddStudio from './AddStudio';

const TeacherLanding = (props) => {

  const studios = props.data.studios;

  return (

    <div className="col-10 d-flex flex-column mt-5">
      {/* {console.log(studios)} */}
      <SelectStudio studios={studios} />
      <AddStudio />
    </div>

  )
}

export default TeacherLanding;