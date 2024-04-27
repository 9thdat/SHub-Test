'use strict';

const StatusCode = {
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
    FAILED: 417,
}

const ReasonPhrases = {
    NOT_FOUND: "Not Found",
    BAD_REQUEST: "Bad Request",
    FAILED: "Failed",
}

class ErrorResponse extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

class NotFoundError extends ErrorResponse {
    constructor(message = ReasonPhrases.NOT_FOUND, status = StatusCode.NOT_FOUND) {
        super(message, status);
    }
}

class BadRequestError extends ErrorResponse {
    constructor(message = ReasonPhrases.BAD_REQUEST, status = StatusCode.BAD_REQUEST) {
        super(message, status);
    }
}

class FailedError extends ErrorResponse {
    constructor(message = ReasonPhrases.FAILED, status = StatusCode.FAILED) {
        super(message, status);
    }
}

module.exports = {
    ErrorResponse,
    NotFoundError,
    BadRequestError,
    FailedError,
}