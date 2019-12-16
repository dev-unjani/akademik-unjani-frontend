import React from 'react';
import Outer from '../../Templates/Outer';
import Login from '../Users/Auth/login';

class LoginDedicated extends React.Component {
  render() {
    return (
      <Outer>
        <Login />
      </Outer>
    );
  }
}

export default LoginDedicated;
