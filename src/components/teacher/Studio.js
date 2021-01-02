import React, { useEffect } from 'react';
import StudioInfo from './StudioInfo';
import Roster from './Roster';
import AddStudent from './AddStudent';

const Studio = (props) => {

  const studios = props.studios.studios;
  const selected = props.studios.studios.filter(studio => {
    return studio.id == props.data.match.params.studio
  })[0]

  return (
    <div className="col-10">
    {/* {console.log(test)} */}
      <div className="row mt-5">
        <StudioInfo data={selected} />
        <Roster roster={selected.students} studio={selected.id} />
        <AddStudent id={selected.id} />
      </div>
    </div>
  )
}

export default Studio;