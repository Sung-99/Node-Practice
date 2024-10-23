import express from 'express'

/*import { createServer } from 'node:http'

const server = createServer((req,res)=>{

res.end("hello World");

});


server.listen(3000, ()=>{

  console.log(" server working on http://localhost:3000");  
});*/

//Now using express



const app = express();

app.get('/',(req, res) => {
  
    res.send(`Hello World by express`);

});


app.listen(3000, () =>{

    console.log("Server working on http://localhost:3000/")

});