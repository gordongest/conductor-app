import React from 'react';

const AddStudio = () => {

  const days = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ]

  return (
    <div className="row d-flex justify-content-center">
        <div className="col-9">

        <button type="button" className="btn btn-block btn-primary my-3" data-bs-toggle="modal" data-bs-target="#addStudioModal">
            Add a Studio
        </button>

        <div className="modal fade" id="addStudioModal" tabindex="-1" role="dialog" aria-labelledby="addStudioModal" aria-hidden="true">
          <div className="modal-dialog modal-dialog" role="document">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title" id="addStudioModalTitle">New Studio</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">

                <form>

                  <div className="form-group">
                    <label htmlFor="studioName">Studio Name:</label>
                    <input type="text" className="form-control" id="studioName" placeholder="Enter name" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input type="text" className="form-control" id="studioLocation" placeholder="Anytown, USA" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="daySelect">Days:</label>
                    <select multiple type="text" className="form-control" id="studioDays">
                      <option>Select days...</option>
                      {days.map(day => {
                        return <option value={day}>{day}</option>
                      })}
                    </select>
                  </div>

                </form>

              </div>

              <div className="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={() => console.log('clíkk')}>Save changes</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudio;