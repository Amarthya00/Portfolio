import server from "../dist/server/server.js";

export default async function handler(req, res) {
  const url = new URL(req.url, `https://${req.headers.host}`);
  const request = new Request(url.toString(), {
    method: req.method,
    headers: req.headers,
    body: req.method !== "GET" && req.method !== "HEAD" ? req : undefined,
  });

  const response = await server.fetch(request, undefined, undefined);

  res.statusCode = response.status;
  response.headers.forEach((value, name) => {
    if (name.toLowerCase() === "transfer-encoding") return;
    res.setHeader(name, value);
  });

  if (response.body) {
    const buffer = Buffer.from(await response.arrayBuffer());
    res.end(buffer);
  } else {
    res.end();
  }
}
