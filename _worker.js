export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (
      url.hostname === "www.psaglobal.com.au" ||
      url.hostname === "psa-study-visa.pages.dev"
    ) {
      const target = new URL(request.url);
      target.protocol = "https:";
      target.hostname = "psaglobal.com.au";
      target.port = "";
      return Response.redirect(target.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  }
};
