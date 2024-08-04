import axios from "axios";

export const patch = async ({
    baseUrl,
    endpoint = "",
    params = "",
    data = {},
    headers = {},
} = {}) => {
    try {
        const url = baseUrl + endpoint + "/" + params;

        const response = await axios.patch(url, data, { headers });
        return { data: response.data, statusCode: response.status };
    } catch (error) {
        throw new Error(`GET request to ${url} failed: ${error.message}`);
    }
};
