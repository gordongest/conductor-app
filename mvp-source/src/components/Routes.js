import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ViewerSelect from './ViewerSelect';
import Landing from './Landing';
import StudioView from './StudioView';
import StudentView from './StudentView';

const Routes = (props) => {

  const {
    studioData,
    selectedStudio,
    student,
    assignments,
    handleStudioSelect,
    handleStudentSelect,
    addStudio,
    addAssignment,
    updateAssignment,
    removeAssignment,
    toggleComplete,
  } = props;

  return (
    <Switch>

      <Route exact path='/' render={() => <ViewerSelect />} />

      <Route exact path='/teacher' component={() =>
        <Landing
          studioData={studioData}
          selectedStudio={selectedStudio}
          handleStudioSelect={handleStudioSelect}
          addStudio={addStudio}
          viewer='teacher'
        />
      } />

      <Route exact path='/teacher/:studio' render={() =>
        <StudioView
          selectedStudio={selectedStudio}
          handleStudentSelect={handleStudentSelect}
          viewer='teacher'
        />
      } />

      <Route exact path='/teacher/:studio/:student' render={() =>
        <StudentView
          student={student}
          assignments={assignments}
          toggleComplete={toggleComplete}
          addAssignment={addAssignment}
          updateAssignment={updateAssignment}
          removeAssignment={removeAssignment}
          viewer='teacher'
        />
      } />

      <Route exact path='/student' render={() =>
        <Landing
          studioData={studioData}
          selectedStudio={selectedStudio}
          handleStudioSelect={handleStudioSelect}
          viewer='student'
        />
      } />

      <Route exact path='/student/:studio' render={() =>
        <StudioView
          selectedStudio={selectedStudio}
          handleStudentSelect={handleStudentSelect}
          viewer='student'
        />
      } />

      <Route exact path='/student/:studio/:name' render={() =>
        <StudentView
          student={student}
          assignments={assignments}
          toggleComplete={toggleComplete}
          addAssignment={addAssignment}
          updateAssignment={updateAssignment}
          removeAssignment={removeAssignment}
          viewer='student'
        />
      } />

    </Switch>
  )
}

export default Routes;