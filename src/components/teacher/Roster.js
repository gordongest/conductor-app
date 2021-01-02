import React from 'react';
import { Link } from 'react-router-dom';

const Roster = (props) => {

  const roster = props.roster;

  return (
    <div className="col d-flex flex-column">
    {/* {console.log(props.studio)} */}
    {roster.map(student => {
      return <Link to={`/teacher/${props.studio}/${student.name}`}><p>{student.name}</p></Link>
    })}
    </div>
  )
}

export default Roster;