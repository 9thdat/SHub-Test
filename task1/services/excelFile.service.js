'use strict';

const fs = require('fs');
const axios = require('axios');
const xlsx = require('xlsx');

const {OK, Created} = require('../core/success.response');
const {BadRequestError, NotFoundError, FailedError} = require('../core/error.response');

const SHEET_NAME = "Sheet1";

class ExcelFileService {
    /**
     * Download Excel file
     * @param downloadLink - URL to download the Excel file
     * @param filePath - Path to save the Excel file
     * @returns {Promise<Created>} - Success response
     */
    static async downloadExcelFile(downloadLink, filePath) {
        // Check download link
        if (!downloadLink) {
            throw new BadRequestError("downloadExcelFile: Download link is not valid.");
        }

        // Check file path
        if (!filePath) {
            throw new BadRequestError("downloadExcelFile: File path is not valid.");
        }

        // Download file
        const response = await axios.get(downloadLink, {responseType: 'arraybuffer'});

        // Check response
        if (!response || !response.data) {
            throw new FailedError("downloadExcelFile: Cannot download the Excel file.");
        }

        // Save file
        fs.writeFileSync(filePath, response.data);

        // Check if file is created
        if (!fs.existsSync(filePath)) {
            throw new FailedError("downloadExcelFile: Cannot save the Excel file.");
        }

        // Return success response
        return new Created({
            message: "Excel file has been downloaded successfully.",
            options: {filePath}
        });
    }

    /**
     * Read Excel file
     * @param filePath - Path to read the Excel file
     * @param sheetName - Name of the sheet to read
     * @returns {Promise<OK>} - Success response
     */
    static async readExcelFile(filePath, sheetName = SHEET_NAME) {
        // Check file path
        if (!filePath) {
            throw new BadRequestError("readExcelFile: File path is not valid.");
        }

        // Check if file exists
        if (!fs.existsSync(filePath)) {
            throw new NotFoundError("readExcelFile: Excel file is not found.");
        }

        const workbook = xlsx.readFile(filePath);
        const sheet = workbook.Sheets[sheetName];

        if (!sheet) {
            throw new NotFoundError(`readExcelFile: Sheet "${sheetName}" is not found.`);
        }

        // Convert sheet to JSON
        let data = xlsx.utils.sheet_to_json(sheet);

        // Remove extra spaces from keys
        data = data.map(row => {
            const newRow = {};
            Object.keys(row).forEach(key => {
                const trimmedKey = key.trim();
                newRow[trimmedKey] = row[key];
            });
            return newRow;
        });

        // Check data
        if (!Array.isArray(data) || !data.length) {
            throw new NotFoundError("readExcelFile: Excel file is empty.");
        }

        return new OK({
            message: "Excel file has been read successfully.",
            metadata: data
        });
    }


    /**
     * Write Excel file
     * @param data - Data to write to the Excel file
     * @param filePath - Path to save the Excel file
     * @returns {Promise<Created>} - Success response
     */
    static async writeExcelFile(data, filePath) {
        // Check data
        if (!Array.isArray(data)) {
            throw new BadRequestError("writeExcelFile: Data is not valid.");
        }

        // Check file path
        if (!filePath) {
            throw new BadRequestError("writeExcelFile: File path is not valid.");
        }

        const worksheet = xlsx.utils.json_to_sheet(data);
        const workbook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(workbook, worksheet, SHEET_NAME);

        xlsx.writeFile(workbook, filePath);

        // Check if file is created
        if (!fs.existsSync(filePath)) {
            throw new FailedError("writeExcelFile: Cannot save the Excel file.");
        }

        // Return success response
        return new Created({
            message: "Excel file has been written successfully.",
            options: {filePath}
        });
    }
}


module.exports = ExcelFileService;