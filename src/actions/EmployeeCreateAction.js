import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_CREATE, EMPLOYEE_SAVE, EMPLOYEES_FETCH } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return ({
    type: EMPLOYEE_CREATE,
    payload: { prop, value }
  });
};

export const employeeSave = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_SAVE });
      Actions.pop();
    });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({ type: EMPLOYEES_FETCH, payload: snapshot.val() });
    });
  };
};
