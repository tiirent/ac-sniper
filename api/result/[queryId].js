import client from "../../src/services/poe-client.js";

export default (req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "http://localhost:8080",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    "Access-Control-Allow-Headers":
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  };

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
