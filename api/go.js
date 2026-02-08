export default function handler(req, res) {
  const ua = req.headers["user-agent"] || "";
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket?.remoteAddress ||
    "";

  if (req.method !== "POST" || ua.length < 10) {
    res.writeHead(302, { Location: "/chala-jaa-bsdk.html" });
    return res.end();
  }

  const now = Date.now();
  if (!global.last) global.last = {};
  if (global.last[ip] && now - global.last[ip] < 3000) {
    res.writeHead(302, { Location: "/chala-jaa-bsdk.html" });
    return res.end();
  }
  global.last[ip] = now;

  res.writeHead(302, {
    Location: "https://get2short.com/XIJvwM0d"
  });
  res.end();
}
