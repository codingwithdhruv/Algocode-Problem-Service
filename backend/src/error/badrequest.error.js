const BaseError = require("./base.error");
const { StatusCodes } = require('http-status-codes');

class BadRequest extends BaseError {
    constructor(propertyName, details) {
        super("BadRequest", StatusCodes.BadRequest, `Invali structure for ${propertyName} provided`, details)
    }
}

module.exports = BadRequest;