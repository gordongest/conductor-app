import React from 'react';
import StudioInfo from './StudioInfo';
import Roster from './Roster';
import AddStudent from './AddStudent';

const Studio = (props) => {

  const studios = props.studios[0].dummyData.dummyData.studios;
  const selected = studios.filter(studio => {
    return studio.studioName.toLowerCase().replace(/\s+/g, '') === props.data.match.params.studio;
  })[0];
  const selectedName = selected.studioName.toLowerCase().replace(/\s+/g, '');

  return (
    <div className="col-10">
    {console.log(selected)}
      <div className="row mt-5">
        <StudioInfo data={selected} />
        <Roster roster={selected.students} studio={selectedName} />
        <AddStudent id={selected.id} />
      </div>
    </div>
  )
}

export default Studio;