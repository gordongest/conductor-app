import React from 'react';

const StudioInfo = ({ data }) => (
  <div>
    <h5 className="display-5">{data.studioName}</h5>
    <p className="">{data.location}</p>
    <p>No. of Students: {data.size}</p>
    <p>Days: {data.days}</p>
  </div>
)

export default StudioInfo;