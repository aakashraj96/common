import { SAMPLE_ACTION_1, SAMPLE_ACTION_2 } from '../../constants/ActionTypes';


const SampleAction1 = payload => ({
  type: SAMPLE_ACTION_1,
  payload,
});

const SampleAction2 = payload => ({
  type: SAMPLE_ACTION_2,
  payload,
});

export default {
  SampleAction1,
  SampleAction2,
};
