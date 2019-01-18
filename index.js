
// exports.message = function() {
//     return 'Platform is' + process.env.PLATFORM +'and version is Version 1.1';
// }

// export const ab = 'ab';
// export const cd = 'cd';


import actions from './redux/actions';
import reducers from './redux/reducers';
import _ from './preload';

// const dotenv = require('dotenv').config({ path: '/Users/aakashraju/MDL/WhiteCobra/poc/common/.env' });

// dotenv.config();

export default {
  actions,
  reducers,
  message: () => process.env,
};
