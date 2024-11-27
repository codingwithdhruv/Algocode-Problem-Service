const { StatusCodes } = require("http-status-codes");
const BaseError = require("../error/base.error");

function errorHandler(err, req, res, next) {
    if(err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {} // because this is an exception so no data is going to be provided
        })
    }
// below is for some error we havent handled yet 
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Something went wrong",
        error: err.details,
        data: {} // because this is an exception so no data is going to be provided
    })
}

module.exports = errorHandler;