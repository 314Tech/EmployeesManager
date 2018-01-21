import { EMPLOYEE_CREATE, EMPLOYEE_SAVE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_SAVE:
      return INITIAL_STATE;
    default:
      return state;
  }
};