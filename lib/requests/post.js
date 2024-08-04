import axios from "axios";

export const post = async ({
    baseUrl,
    endpoint = "",
    data = {},
    headers = {},
} = {}) => {
    try {
        const response = await axios.post(baseUrl + endpoint, data, {
            headers,
        });

        return { data: response.data, statusCode: response.status };
    } catch (error) {
        throw new Error(
            `POST request to ${baseUrl}${endpoint} failed: ${error.message}`
        );
    }
};
