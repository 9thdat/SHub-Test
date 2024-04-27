'use strict';

const {fetchData, sendData} = require('./services/access.service');
const {Type1, Type2} = require('./services/array.service');

const GET_LINK = 'https://share.shub.edu.vn/api/intern-test/input';
const POST_LINK = 'https://share.shub.edu.vn/api/intern-test/output';

let response = {};
let token = '';
let array = [];
let query = [];
let result = [];
const main = async () => {
    // Get data from the server
    try {
        response = await fetchData(GET_LINK);
        token = response.token;
        array = response.data;
        query = response.query;

        console.log(array);
        console.log(query);
    } catch (error) {
        console.log(error);
    }

    if (!array || !query) {
        return;
    }
    // Process the data
    query.forEach((value, index) => {
        let left = value.range[0];
        let right = value.range[1];

        if (value.type === '1') {
            result.push(Type1(array, left, right));
        } else {
            result.push(Type2(array, left, right));
        }
    })

    console.log(result);

    // Send the result to the server
    try {
        const response = await sendData(POST_LINK, result, token);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

main();