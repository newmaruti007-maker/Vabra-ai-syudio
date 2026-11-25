export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>VABRA AI STUDIO</title></head>
<body>
  <h1>VABRA AI STUDIO</h1>
  <p>Deployment is live.</p>
</body>
</html>`;
    return new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }
};
