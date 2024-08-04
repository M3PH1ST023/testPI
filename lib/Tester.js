import { post } from "./requests/post.js";
import { get, getByParams, getByQuery } from "./requests/get.js";
import { compareJson } from "./utils/Compare.js";
import { patch } from "./requests/patch.js";
import { put } from "./requests/put.js";
import { deleteApi } from "./requests/delete.js";

async function test(topic, description, callback) {
    try {
        await callback();
        console.log(`✅ ${topic} : ${description}`);
    } catch (error) {
        console.error(`❌ ${topic} : ${error}`);
    }
}

const Tester = {
    baseUrl: "",
    test: test,
    post: post,
    get: get,
    getByParams: getByParams,
    getByQuery: getByQuery,
    put: put,
    patch: patch,
    delete: deleteApi,
    compareJson: compareJson,
};

export default Tester;
