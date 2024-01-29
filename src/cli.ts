import { createServer } from "./server";

(async function () {
    const server = await createServer();
    server.listen(9999);
})();