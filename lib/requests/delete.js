import axios from "axios";

export const deleteApi = async ({
    baseUrl,
    endpoint = "",
    params = "",
    headers = {},
} = {}) => {
    try {
        const url = baseUrl + endpoint + "/" + params;
        console.log(url);

        const response = await axios.delete(url, { headers });
        return { data: response.data, statusCode: response.status };
    } catch (error) {
        throw new Error(`GET request to ${url} failed: ${error.message}`);
    }
};
