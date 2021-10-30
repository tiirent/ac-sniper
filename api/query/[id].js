import client from "../../src/services/poe-client.js";
import headers from "../../src/common/headers.js";

export default (req, res) => {
  const { id } = req.query;
  
  client
    .getPoeWebpage(id)
    .then((page) => client.getQueryFromPoePage(page))
    .then((query) => {
        res.writeHead(200, headers)
        res.end(JSON.stringify(query))
    })
    .catch((err) => {
        res.writeHead(500, headers);
        res.end(`omg ${err} queryId: ${queryId}`);
    });
};
