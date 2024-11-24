// import the uuid module
const uuid = require("uuid");
// import the http module
const http = require("http");

try {
  // create a server by using the http
  const server = http.createServer((request, response) => {
    // check the http method a nd url
    if (request.method === "GET" && request.url === "/uuid") {
      response.statusCode = 200;
      response.setHeader("content-type", "text/uuid");
      // get the uuid v4 from the module
      const id = uuid.v4();
      response.write(id);
      response.end();
    } else {
      response.statusCode = 404;
      response.end("Not found");
    }
  });

  server.listen(8080, () => {
    console.log("server running...!");
  });
} catch (error) {
  console.log(error);
}
