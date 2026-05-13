const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || 4173);
const root = __dirname;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function resolveFile(url) {
  const requestPath = decodeURIComponent(new URL(url, `http://localhost:${port}`).pathname);
  const normalized = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, normalized === "/" ? "index.html" : normalized);
  return filePath.startsWith(root) ? filePath : path.join(root, "index.html");
}

const server = http.createServer((req, res) => {
  const filePath = resolveFile(req.url);
  fs.readFile(filePath, (error, content) => {
    if (error) {
      fs.readFile(path.join(root, "index.html"), (fallbackError, fallbackContent) => {
        if (fallbackError) {
          res.writeHead(500);
          res.end("Internal server error");
          return;
        }
        res.writeHead(200, { "Content-Type": contentTypes[".html"] });
        res.end(fallbackContent);
      });
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": contentTypes[extension] || "application/octet-stream",
      "Cache-Control": extension === ".html" ? "no-store" : "public, max-age=31536000, immutable",
    });
    res.end(content);
  });
});

server.listen(port, () => {
  console.log(`RE/MAX CRM listening on port ${port}`);
});
