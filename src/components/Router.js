import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./LoginForm";
import EmployeeList from "./EmployeeList";
import EmployeeCreate from "./EmployeeCreate";
import EmployeeEdit from "./EmployeeEdit";

const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={styles.navigationBarStyle}
      titleStyle={styles.titleStyle}
      navBarButtonColor="#E9222E"
    >
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} hideNavBar initial />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
          />
          <Scene key="employeeCreate" component={EmployeeCreate} />
          <Scene key="employeeEdit" component={EmployeeEdit} />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = {
  navigationBarStyle: {
    backgroundColor: "white"
  },
  titleStyle: {
    fontSize: 22,
    color: "#E9222E",
  }
};

export default RouterComponent;
