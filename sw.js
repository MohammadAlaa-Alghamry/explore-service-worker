
self.addEventListener("fetch", (event) => {
    console.log("fetch intercepted from sw.js");
    // console.log("event @sw.js:", event);
    // let req = event.request;
    // console.log("req:", req)
    console.log("disabled cache")
    const PORT = 5000
    console.log("redirect url:", "http://localhost:" + PORT)
    console.log("event.request.url:", event.request.url)

    event.respondWith(Response.redirect("http://localhost:" + PORT));
    // if (event.request.url.endsWith("sw_register.js")) {
    //     event.respondWith();
    // } else {
    // }
});
