const ErrorHandler = {
    NotFound: {
      status: 404,
      message: "record not found",
    },
    BadRequest: {
      status: 400,
      message: "error code",
    },
    InternalServerError: {
      status: 500,
      message: "internal server error",
    },
  };
  
export default ErrorHandler