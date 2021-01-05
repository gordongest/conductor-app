import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import TeacherLanding from './teacher/TeacherLanding';
import TeacherStudioView from './teacher/TeacherStudioView';
import TeacherStudentView from './teacher/TeacherStudentView';
import StudentLanding from './students/StudentLanding';
import StudentStudioView from './students/StudentStudioView';
import StudentStudentView from './students/StudentStudentView';

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
    toggleComplete
  } = props;

  return (
    <Switch>

      <Route exact path='/' render={() => <Landing />} />

      <Route exact path='/teacher' render={() =>
        <TeacherLanding
          studioData={studioData}
          selectedStudio={selectedStudio}
          handleStudioSelect={handleStudioSelect}
          addStudio={addStudio}
        />
      } />

      <Route exact path='/teacher/:studio' render={() =>
        <TeacherStudioView
          selectedStudio={selectedStudio}
          handleStudentSelect={handleStudentSelect}
        />
      } />

      <Route exact path='/teacher/:studio/:student' render={() =>
        <TeacherStudentView
          student={student}
          assignments={assignments}
          toggleComplete={toggleComplete}
          addAssignment={addAssignment}
          updateAssignment={updateAssignment}
          removeAssignment={removeAssignment}
        />
      } />

      <Route exact path='/student' render={() =>
        <StudentLanding
          studioData={studioData}
          selectedStudio={selectedStudio}
          handleStudioSelect={handleStudioSelect}
        />
      } />

      <Route exact path='/student/:studio' render={() =>
        <StudentStudioView
          selectedStudio={selectedStudio}
          handleStudentSelect={handleStudentSelect}
        />
      } />

      <Route exact path='/student/:studio/:name' render={() =>
        <StudentStudentView
          student={student}
          assignments={assignments}
          toggleComplete={toggleComplete}
          addAssignment={addAssignment}
          updateAssignment={updateAssignment}
          removeAssignment={removeAssignment}
        />
      } />

    </Switch>
  )
}

export default Routes;