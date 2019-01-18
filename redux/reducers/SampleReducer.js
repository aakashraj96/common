import { SAMPLE_ACTION_1, SAMPLE_ACTION_2 } from '../../constants/ActionTypes';

const initialState = {
  payload_1: {},
  payload_2: {},
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION_1:
      return {
        ...prevState,
        payload_1: action.payload,
      };
    case SAMPLE_ACTION_2:
      return {
        ...prevState,
        payload_2: action.payload,
      };
    default:
      return prevState;
  }
};
