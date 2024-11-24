// import the http module
const http = require("http");
const { parse } = require("path");

try{
    // create the http server
    const server = http.createServer((request, response) =>{
        // check the http method and url
        if(request.method === "GET" && request.url.includes("/status/")){
            response.setHeader("content-type", "text/plain");
            //take the status code
            const code = parseInt(request.url.split("/")[2]);
            if(typeof code === "number"){
                switch(code){
                    case 100:
                        response.write("Continue");
                        response.end();
                        break;
                    case 200:
                        response.write("Ok");
                        response.end();
                        break;
                    case 300:
                        response.write("Multiple Choices");
                        response.end();
                        break;
                    case 400:
                        response.write("Bad Request");
                        response.end();
                        break;
                    case 500:
                        response.write("Internal Server Error");
                        response.end();
                        break;
                    default:
                        response.write("Enter correct value");
                        response.end();
                        break;
                }
            }else{
                response.end("not a Number");
            }
        }else{
            response.end("Not Found");
        }
    });
    //
    server.listen(8080, () =>{
        console.log("Server runing...!");
    });
}catch(error){
    console.log(error);
}