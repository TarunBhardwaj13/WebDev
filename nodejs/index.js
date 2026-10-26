// http =require("http");
// url=require("url");
// const main=(req,res)=>{
//     const parsedUrl=url.parse(req.url);
//     const path=parsedUrl.pathname;
//     if(path==="/")
//     {
//     res.writeHead(200,{"content-type":"text/txt"})
//     res.write("Welcome to node js server!\n")
//     res.end("this is second line");
//     } else if (path==="/about"){
//         res.writeHead(200,{"content-type":"text/html"})
//         res.write("<h3>This is about page</h3>")
//         res.end("<p>In KIET MCA Section D</p>")
//     }

// };
// const server=http.createServer(main);
// server.listen(3000,(error)=>{
//    if(error){
//     console.log(error)
//    }
//    console.log("Running server on:http://127.0.0.1:3000")
// })


const express=require("express");

const app=express();
app.get("/",(req,res)=>{
    res.send("Welcome to express js in GET");
})

app.get("/product/:id/:name",(req,res)=>{
    const PID=req.query.id;
    const name=req.query.name;
    res.send("product ID:"+PID+ "<br>Name:"+name);
})

app.post("/",(req,res)=>{
    res.send("Welcome to express js in POST");
})

app.put("/",(req,res)=>{
    res.send("Welcome to express js in PUT");
})

app.delete("/",(req,res)=>{
    res.send("Welcome to express js in DELETE");
})

app.listen(3001,(error)=>{
    if(error){
        console.log(error)
    }
    console.log("Running server on:http://127.0.0.1:3001")
}
)

