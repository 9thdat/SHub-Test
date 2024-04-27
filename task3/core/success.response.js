'use strict';

const StatusCode = {
    OK: 200,
    CREATED: 201,
}

const ReasonPhrases = {
    OK: "OK",
    CREATED: "Created",
}

class SuccessResponse {
    constructor({message, status = StatusCode.OK, reasonPhrase = ReasonPhrases.OK, metadata = {}}) {
        this.message = !message ? reasonPhrase : message;
        this.status = status;
        this.metadata = metadata;
    }

    send(res, header = {}) {
        return res.status(this.status).json(this);
    }
}

class OK extends SuccessResponse {
    constructor({message, metadata}) {
        super({message, metadata});
    }
}

class Created extends SuccessResponse {
    constructor({options = {}, message, status = StatusCode.CREATED, reasonPhrase = ReasonPhrases.CREATED}) {
        super({message, status, reasonPhrase});
        this.options = options;
    }
}

module.exports = {
    OK,
    Created,
}


