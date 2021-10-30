import client from "../../src/services/poe-client.js";
import headers from "../../src/common/headers.js";

export default (req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  const { queryId } = req.query;

  //note however many items you give me i only take 9
  client
    .getItemResult(queryId, req.body)
    .then((result) => {
      res.writeHead(200, headers);
      res.end(JSON.stringify(result));
    })
    .catch((err) => {
      res.writeHead(500, headers);
      res.end(`omg ${err} queryId: ${queryId}`);
    });
};
