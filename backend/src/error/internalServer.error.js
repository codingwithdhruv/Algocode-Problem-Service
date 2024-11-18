const BaseError = require("./base.error");
const { StatusCodes } = require('http-status-codes');

class InternalServerError extends BaseError {
    constructor(details) {
        super("InternalServerError", StatusCodes.InternalServerError, `Invalid structure for ${propertyName} provided`, details)
    }
}

module.exports = InternalServerError;