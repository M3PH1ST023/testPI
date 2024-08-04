import axios from "axios";

export const get = async (baseUrl, endpoint = "", headers = {}) => {
    try {
        const url = baseUrl + endpoint;
        const response = await axios.get(url, { headers });
        return { data: response.data, statusCode: response.status };
    } catch (error) {
        throw new Error(`GET request to ${url} failed: ${error.message}`);
    }
};

export const getByParams = async ({
    baseUrl,
    endpoint = "",
    params = "",
    headers = {},
} = {}) => {
    try {
        const url = baseUrl + endpoint + "/" + params;

        const response = await axios.get(url, {
            headers,
        });
        return { data: response.data, statusCode: response.status };
    } catch (error) {
        throw new Error(`GET request to ${url} failed: ${error.message}`);
    }
};

export const getByQuery = async ({
    baseUrl,
    endpoint = "",
    query = {},
    headers = {},
} = {}) => {
    try {
        let queryString = [];
        for (let key in query) {
            queryString.push(`${key}=${query[key]}`);
        }
        queryString[0] = "?" + queryString[0];
        queryString = queryString.join("&");

        const url = baseUrl + endpoint + queryString;

        const response = await axios.get(url, {
            headers,
        });
        return { data: response.data, statusCode: response.status };
    } catch (error) {
        throw new Error(`GET request to ${url} failed: ${error.message}`);
    }
};
