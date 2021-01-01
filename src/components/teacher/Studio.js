import React, { useEffect } from 'react';
import StudioInfo from './StudioInfo';
import Roster from './Roster';
import AddStudent from './AddStudent';

const Studio = (props) => {

  

  return (
    <div className="col-10">
      <div className="row mt-5">
        <StudioInfo />
        <Roster />
        <AddStudent />
      </div>
    </div>
  )
}

export default Studio;