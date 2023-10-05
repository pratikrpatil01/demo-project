const APPConfig = {
  // API_URL: process.env.REACT_APP_API_URL + '/api'
  // API_URL: 'http://192.168.29.23:3001/api'
  API_URL: 'http://3.83.144.56:3001/api'
};

const ApiEndPoints = {
  Register: `${APPConfig.API_URL}/register`,
  Login: `${APPConfig.API_URL}/login`,
  ForgotPassword: `${APPConfig.API_URL}/forgotpassword`,
  Otp: `${APPConfig.API_URL}/verifyotp`,
  Resetpassword: `${APPConfig.API_URL}/resetpassword`,
  DataList: `${APPConfig.API_URL}/list`,
  ManufacturerListForAdmin: `${APPConfig.API_URL}/get-manufacturer-list`,
  UserListForAdmin: `${APPConfig.API_URL}/get-user-list`,
  FileUpload: `${APPConfig.API_URL}/upload`
};

export default ApiEndPoints;
