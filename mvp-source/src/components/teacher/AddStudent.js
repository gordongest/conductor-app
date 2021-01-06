import React from 'react';
import Button from '@material-ui/core/Button';

const AddStudent = () => {

  return (

    <div className="row">

      <Button
        type="button"
        variant='contained'
        size='large'
        color='primary'
        className="btn btn-block"
        data-bs-toggle="modal"
        data-bs-target="#addStudentModal"
      >
        Add Student
      </Button>

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