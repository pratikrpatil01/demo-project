const APPConfig = {
  // API_URL: 'http://3.83.144.56:3001/api'
  API_URL: 'http://44.201.182.26:3001/api'
};

const ApiEndPoints = {
  Register: `${APPConfig.API_URL}/register`,
  Login: `${APPConfig.API_URL}/login`,
  ForgotPassword: `${APPConfig.API_URL}/forgotpassword`,
  Otp: `${APPConfig.API_URL}/verifyotp`,
  Resetpassword: `${APPConfig.API_URL}/resetpassword`,
  DataList: `${APPConfig.API_URL}/list`,
  ManufacturerList: `${APPConfig.API_URL}/manufacturer-list`,
  ManufacturerDetail: `${APPConfig.API_URL}/manufacturer-detail`,
  ManufacturerAdd: `${APPConfig.API_URL}/add-manufacturer`,
  UserListForAdmin: `${APPConfig.API_URL}/get-user-list`,
  FileUpload: `${APPConfig.API_URL}/upload`,
  GetTypeList: `${APPConfig.API_URL}/get-type-list`,
  GetContentTypeList: `${APPConfig.API_URL}/get-content-type-list`,
  AddContentType: `${APPConfig.API_URL}/add-content-type`,
  StatusActiveInactive: `${APPConfig.API_URL}/active-inactive/`,
  EditContentType: `${APPConfig.API_URL}/edit-content-type/`,
  Delete: `${APPConfig.API_URL}/delete/`,
  GetContentType: `${APPConfig.API_URL}/get-content-type`,
  ManufacturerAddUploadFile: `${APPConfig.API_URL}/upload-file`,
  GetProductList: `${APPConfig.API_URL}/get-product-list`,
  AddProduct: `${APPConfig.API_URL}/add-product`,
  EditProduct: `${APPConfig.API_URL}/edit-product/`,
  DeleteProduct: `${APPConfig.API_URL}/delete-product/`,
  UploadFile: `${APPConfig.API_URL}/upload-file`
};

export default ApiEndPoints;
