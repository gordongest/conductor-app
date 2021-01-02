import React from 'react';
import StudioInfo from './StudioInfo';
import Roster from './Roster';
import AddStudent from './AddStudent';

const Studio = (props) => {

  const studios = props.studios[0].dummyData.dummyData.studios;
  const selected = studios.filter(studio => {
    return studio.id === Number(props.data.match.params.studio);
  })[0]

  return (
    <div className="col-10">
    {console.log(selected)}
      <div className="row mt-5">
        <StudioInfo data={selected} />
        <Roster roster={selected.students} studio={selected.id} />
        <AddStudent id={selected.id} />
      </div>
    </div>
  )
}

export default Studio;