// import the http module
const http = require("http");

try{
    // create the server
    const server = http.createServer((request, response) =>{
        // check the http method and url
        if(request.method === "GET" && request.url === "/json"){
            // setthe header
            response.setHeader("content-type", "application/json");
            //json data
            let data ={
                slideshow: {
                    author: "Yours Truly",
                    date: "date of publication",
                    slides: [
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
            response.end("Not found");
        }else{
            response.statusCode = 404;
            response.end("Not Found..!");
        }
    });
    //server listen
    server.listen(8080, () =>{
        console.log("server running...!");
    });
}catch(error){
    console.log(error);
}