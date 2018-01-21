import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} hideNavBar initial />
        </Scene>
        <Scene key='main'>
          <Scene
            rightTitle='Add'
            onRight={() => Actions.employeeUpdate()}
            key='employeeList'
            component={EmployeeList}
          />
          <Scene key='employeeUpdate' component={EmployeeCreate} />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
