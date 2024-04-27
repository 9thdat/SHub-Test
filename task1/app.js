'use strict';

const {downloadExcelFile, readExcelFile, writeExcelFile} = require('./services/excelFile.service');
const {getFinancialModelMatching} = require('./services/financialModel.service');

const downloadLink = "https://go.microsoft.com/fwlink/?LinkID=521962"; // The link which contains the Excel file
const downloadFilePath = "task1.xlsx"; // The path to save the downloaded Excel file
const outputFilePath = "task1_output.xlsx"; // The path to save the output Excel file
const rowName = "Sales"; // The row name to compare
const rowValue = 50_000; // The row value to compare
const expression = ">"; // The expression to compare

async function main() {
    try {
        // Download Excel file
        const response = await downloadExcelFile(downloadLink, downloadFilePath);
        console.log(response);

        // Read Excel file
        const excelDataResponse = await readExcelFile(downloadFilePath);
        const financialModel = excelDataResponse.metadata;

        // Get financial model data matching the row name, row value and expression
        const newFinancialModelResponse = await getFinancialModelMatching(financialModel, rowName, rowValue, expression);
        const newFinancialModel = newFinancialModelResponse.metadata.financialModel;

        // Write new financial model data to Excel file
        const writeExcelFileResponse = await writeExcelFile(newFinancialModel, outputFilePath);
        console.log(writeExcelFileResponse);
    } catch (error) {
        console.error("An error occurred: " + error.message);
    }
}

main();
