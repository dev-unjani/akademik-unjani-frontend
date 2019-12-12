import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import {
  DashboardPage,
  User,
  Role,
  Identity,
  College,
  Faculty,
  StudyProgram,
  EducationProgram,
  Class,
  InstitutionalAccount, 
  AcademicCalendar,
  Error,
  NotFound
} from '../pageListAsync';

class Application extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode}>
        <Switch>
          <Route exact path="/app" component={DashboardPage} />
          <Route path="/app/dashboard" component={DashboardPage} />
          <Route path="/app/system/user" component={User} />
          <Route path="/app/system/role" component={Role} />
          <Route path="/app/master-university/identity" component={Identity} />
          <Route path="/app/master-university/college" component={College} />
          <Route path="/app/master-university/faculty" component={Faculty} />
          <Route path="/app/master-university/study-program" component={StudyProgram}/>
          <Route path="/app/master-university/education-program" component={EducationProgram}/>
          <Route path="/app/master-university/institutional-account" component={InstitutionalAccount}/>
          <Route path="/app/master-university/class" component={Class}/>
          <Route path="/app/master-university/academic-calendar" component={AcademicCalendar}/>


          <Route path="/app/pages/not-found" component={NotFound} />
          <Route path="/app/pages/error" component={Error} />
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Application.propTypes = {
  changeMode: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Application;
