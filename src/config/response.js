const successRes = (res, status, code, data, message) => {
  res.status(code).json({
    status: status,
    code: code,
    data: data,
    message: message,
  });
};
const errorRes = (res, status, data, message) => {
  res.status(500).json({
    status: status,
    code: 500,
    data: data,
    message: message,
  });
};
  
  export default {successRes, errorRes };
  