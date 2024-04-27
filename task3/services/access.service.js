const axios = require('axios');

class AccessService {
    /**
     * Fetch data from the server
     * @param url
     * @returns {Promise<any>}
     */
    static async fetchData(url) {
        try {
            const response = await axios.get(url);

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Send data to the server
     * @param url - URL to send data
     * @param data - data to send
     * @param token - token to authenticate
     * @returns {Promise<any>} - response from the server
     */
    static async sendData(url, data, token) {
        try {
            const response = await axios.post(url, data, {
                headers: {Authorization: `Bearer ${token}`}
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AccessService;