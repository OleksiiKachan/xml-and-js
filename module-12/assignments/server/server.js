const http = require(`http`);

const lotr = require("./controller/lotr");

const server = http.createServer(async (req, res) => {
  const basePath = req.url;

  if (basePath === `/api/lotr/chapter`) {
    const { code, data } = await lotr.getChapter();
    res.writeHead(code, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: `Route not found` }));
  }
});

const PORT = 8888;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;
