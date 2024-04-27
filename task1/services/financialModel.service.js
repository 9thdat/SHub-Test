'use strict';

const {OK} = require('../core/success.response');
const {BadRequestError} = require('../core/error.response');

class FinancialModelService {
    /**
     * Get financial model data matching the row name, row value and expression
     * @param financialModel - Financial model data
     * @param rowName - Row name to compare
     * @param rowValue - Row value to compare
     * @param expression - Expression to compare
     * @returns {Promise<OK>} - Success response
     */
    static async getFinancialModelMatching(financialModel, rowName, rowValue, expression) {
        // Check financial model
        if (!Array.isArray(financialModel)) {
            throw new BadRequestError("getFinancialModelMatching: Financial model is not valid.");
        }

        // Check row name
        if (!rowName) {
            throw new BadRequestError("getFinancialModelMatching: Row name is not valid.");
        }

        // Check row value
        if (!rowValue) {
            throw new BadRequestError("getFinancialModelMatching: Row value is not valid.");
        }

        // Check expression
        if (!expression) {
            throw new BadRequestError("getFinancialModelMatching: Expression is not valid.");
        }

        // Filter financial model data
        let newFinancialModel = financialModel.filter(data => {
            return eval(`${data[rowName]}
            ${expression}
            ${rowValue}`);
        });

        // Return success response
        return new OK({
            message: "Financial model data has been filtered successfully.",
            metadata: {financialModel: newFinancialModel}
        })
    }

}

module.exports = FinancialModelService;