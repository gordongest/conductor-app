import React from 'react';

function AddStudent() {
  return (

    <div className="row">

      <button type="button" className="btn btn-block btn-primary my-3" data-bs-toggle="modal" data-bs-target="#addStudentModal">Add Student</button>

      <div className="modal fade" id="addStudentModal" tabindex="-1" role="dialog" aria-labelledby="addStudentModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addStudentModalTitle">New Student</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ADD STUDENT FORM
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddStudent;