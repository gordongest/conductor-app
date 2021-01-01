import React from 'react';
import { Link } from 'react-router-dom';

const goButton = (route) => {
  return (
    <Link to={`${route}`}>
      <button type="button" className="btn btn-primary my-3">
        Go
      </button>
    </Link>
  )
}

export default goButton;