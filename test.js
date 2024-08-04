import Tester from "./index.js";

const url = "http://localhost:5000";

// // POST

// Tester.test("post", "testing post api", async () => {
//     let data = {
//         username: "123",
//         password: "pass",
//     };
//     let resp = await Tester.post({ baseUrl: url, data: data });
//     console.log(resp);
// });

// // GET

// Tester.test("get", "testing get api", async () => {
//     let resp = await Tester.get(url);
// });

// // GET WITH QUERY

// Tester.test("getByQuery", "testing get api with query", async () => {
//     let resp = await Tester.getByQuery({
//         baseUrl: url,
//         endpoint: "/query",
//         query: { sample: 123 },
//     });
//     console.log(resp.data);
// });

// // GET WITH PARAMETER

// Tester.test("getByParams", "testing get api with query", async () => {
//     let resp = await Tester.getByParams({
//         baseUrl: url,
//         endpoint: "/params",
//         params: "hello",
//     });
// });

// // PATCH

// Tester.test("patch", "testing patch api", async () => {
//     let resp = await Tester.patch({
//         baseUrl: url,
//         endpoint: "/patch",
//         params: "id1",
//         data: { username: "abc", password: "123" },
//     });
//     console.log(resp.data);
// });

// // DELETE

// Tester.test("delete", "testing delete api", async () => {
//     let resp = await Tester.delete({
//         baseUrl: url,
//         endpoint: "/delete",
//         params: "1",
//     });
//     console.log(resp);
// });
