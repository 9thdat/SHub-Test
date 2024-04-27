'use strict';

const {fetchData, sendData} = require('./services/access.service');
const {Type1, Type2} = require('./services/array.service');

const GET_LINK = 'https://share.shub.edu.vn/api/intern-test/input'; // link to get data
const POST_LINK = 'https://share.shub.edu.vn/api/intern-test/output'; // link to send data

let response = {}; // response from the server
let token = ''; // token to authenticate
let array = []; // array of numbers
let query = []; // query to process
let result = []; // result to send
const main = async () => {
    // Get data from the server
    try {
        response = await fetchData(GET_LINK);
        
        token = response.token;
        array = response.data;
        query = response.query;

        console.log(response);
    } catch (error) {
        console.log(error);
    }

    // Check if the data is valid
    if (!array || !query) {
        return;
    }

    // Process the data
    query.forEach((value, index) => {
        let left = value.range[0];
        let right = value.range[1];

        if (value.type === '1') {
            let res = Type1(array, left, right);
            result.push(res.metadata.result);
        } else {
            let res = Type2(array, left, right);
            result.push(res.metadata.result);
        }
    })

    console.log("result: ", result);

    // Send the result to the server
    try {
        const response = await sendData(POST_LINK, result, token);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

main();