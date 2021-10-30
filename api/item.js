import client from "../src/services/poe-client.js";

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

  if (req.method === "POST") {
    client
      .getItemResultList(req.body)
      .then((data) => {
        res.writeHead(200, headers);
        res.end(JSON.stringify(data));
      })
      .catch((err) => {
        res.writeHead(500, headers);
        res.end(`omg ${err}`);
      });
    return;
  }

  res.writeHead(405, headers);
  res.end(`${req.method} is not allowed for the request.`);
};
