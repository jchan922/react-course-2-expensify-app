// import mocked third party moment library
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
}