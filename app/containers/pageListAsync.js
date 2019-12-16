import Loadable from 'react-loadable';
import Loading from 'dan-components/Loading';

// DASHBOARD

export const DashboardPage = Loadable({
  loader: () => import('./Pages/Dashboard'),
  loading: Loading,
});

// SYSTEM
export const User = Loadable({
  loader: () => import('./Pages/System/User/index'),
  loading: Loading,
});
export const Role = Loadable({
  loader: () => import('./Pages/System/Role/index'),
  loading: Loading,
});

// MASTER UNIVERSITY
export const Identity = Loadable({
  loader: () => import('./Pages/MasterUniversity/Identity/index'),
  loading: Loading,
});

export const College = Loadable({
  loader: () => import('./Pages/MasterUniversity/College/index'),
  loading: Loading,
});

export const Faculty = Loadable({
  loader: () => import('./Pages/MasterUniversity/Faculty/index'),
  loading: Loading,
});

export const StudyProgram = Loadable({
  loader: () => import('./Pages/MasterUniversity/StudyProgram/index'),
  loading: Loading,
});

export const EducationProgram = Loadable({
  loader: () => import('./Pages/MasterUniversity/EducationProgram/index'),
  loading: Loading,
});

export const InstitutionalAccount = Loadable({
  loader: () => import('./Pages/MasterUniversity/InstitutionalAccount/index'),
  loading: Loading,
});

export const Class = Loadable({
  loader: () => import('./Pages/MasterUniversity/Class/index'),
  loading: Loading,
});

export const AcademicCalendar = Loadable({
  loader: () => import('./Pages/MasterUniversity/AcademicCalendar/index'),
  loading: Loading,
});

//
export const Form = Loadable({
  loader: () => import('./Pages/MasterCourses/ReduxForm'),
  loading: Loading,
});
export const Table = Loadable({
  loader: () => import('./Pages/Scheduling/BasicTable'),
  loading: Loading,
});
export const Login = Loadable({
  loader: () => import('./Pages/Users/Auth/login/index'),
  loading: Loading,
});
export const LoginDedicated = Loadable({
  loader: () => import('./Pages/MasterScore/LoginDedicated'),
  loading: Loading,
});
export const Register = Loadable({
  loader: () => import('./Pages/Users/Auth/register/index'),
  loading: Loading,
});
export const ResetPassword = Loadable({
  loader: () => import('./Pages/Users/Auth/ResetPassword'),
  loading: Loading,
});
export const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound'),
  loading: Loading,
});
export const NotFoundDedicated = Loadable({
  loader: () => import('./Pages/MasterScore/NotFoundDedicated'),
  loading: Loading,
});
export const Error = Loadable({
  loader: () => import('./Pages/Error'),
  loading: Loading,
});
export const Maintenance = Loadable({
  loader: () => import('./Pages/MasterFee'),
  loading: Loading,
});
export const Parent = Loadable({
  loader: () => import('./Parent'),
  loading: Loading,
});