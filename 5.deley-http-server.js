//import the http module
const http = require("http");

try {
  // create a server
  const server = http.createServer((request, response) => {
    // check the http method and url
    if (request.method === "GET" && request.url.includes("/delay/")) {
      // set the header
      response.setHeader("content-type", "text/plain");
      // take the value from the url
      const time = parseInt(request.url.split("/")[2]);
      // check the number or not
      if (typeof time === "number") {
        // creating promise
        new Promise((resolve, reject) => {
          // set time out
          setTimeout(() => {
            resolve("ok");
          }, time * 1000);
        })
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((error) => {
            response.write(error);
            response.end();
          });
      } else {
        response.write("Not a Number ");
        response.end();
      }
    } else {
      response.statusCode = 404;
      response.write("Not Found");
      response.end();
    }
  });
  // server listener
  server.listen(8000, () => {
    console.log("server running1..!");
  });
} catch (error) {
  console.log(error);
}

