import client from "../src/services/poe-client.js";
import headers from "../src/common/headers.js";

export default (req, res) => {
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
