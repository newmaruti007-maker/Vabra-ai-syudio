export default {
  async fetch(request, env) {
    return new Response("VABRA AI STUDIO WORKER IS RUNNING!", {
      headers: {
        "content-type": "text/plain"
      }
    });
  }
};
