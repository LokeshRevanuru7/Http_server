// import the http module
const http = require("http");

// import the uuid module
const uuid = require("uuid");

try {
    // create the server by using http
    const server = http.createServer((request, response) =>{
        // check the http method and url
        if(request.method == "GET" && request.url == "/html"){
            response.statusCode = 200;
            // set the header
            response.setHeader("content-type", "text/html");
            // html code
            response.write(
                `<html>
                <head>
                </head>
                <body>
                    <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
                    <p> - Martin Fowler</p>
                </body>
              </html>` 
            );
            // end the server
            response.end();
        }else if(request.method === "GET" && request.url === "/json"){
            // set the header
            response.setHeader("content-type", "appplication/json");
            // json data
            let data ={
                slideshow :{
                    author:"Yours Truly",
                    date: "date of publications",
                    slides:[
                        {
                            title: "Wake up to WonderWidgets!",
                            type: "all",
                          },
                          {
                            items: [
                              "Why <em>WonderWidgets</em> are great",
                              "Who <em>buys</em> WonderWidgets",
                            ],
                            title: "Overview",
                            type: "all",
                          },              
                    ],
                    title: "Sample Slide Show",
                },
            };
            response.write(JSON.stringify(data));
            response.end("NOT found");
        }else if(request.method === "GET" && request.url === "/uuid"){
            response.statusCode =200;
            response.setHeader("content-type", "text/uuid");
            // get the uuid v4 from the module
            const id = uuid.v4();
            response.write(id);
            response.end();
        }else if(request.method === "GET" && request.url.includes("/status/")){
            // take the status code
            const code = parseInt(request.url.split("/")[2]);
            if(typeof code === "number"){
                console.log(code)
                response.write(http.STATUS_CODES[code]);
                response.end();
            }else{
                response.end("not a Number");
            }
        }
        // check the http method and url
        else if(request.method === "GET" && request.url.includes("/delay")){
            // set the header
            response.setHeader("content-type", "text/plain");
            // take the number or not
            const time = parseInt(request.url.split("/")[2]);
            // check the number or not
            if(typeof time === "number"){
                // createing promise
                new Promise((resolve, reject) =>{
                    setTimeout(() => {
                        resolve("ok");
                    }, time*1000);
                })
                .then((data) =>{
                    response.write(data);
                    response.end();
                })
                .catch((error) =>{
                    response.write(error);
                    response.end();
                });
            }else{
                response.write("Not a Number");
                response.end();
            }
        }else{
            response.statusCode =404;
            response.write("Not Found");
            response.end();
        }
    });
    // server listener
    server.listen(8080, () =>{
        console.log("Server Runing....!");
    });
}catch(error){
    console.log(error);
}

server();