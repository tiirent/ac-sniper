import client from "../../src/services/poe-client.js";

export default (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  const { id } = req.query;
  client
    .getPoeWebpage(id)
    .then((page) => client.getQueryFromPoePage(page))
    .then((query) => res.status(200).json(query))
    .catch((err) => res.status(500).send(`omg ${err}`));
};