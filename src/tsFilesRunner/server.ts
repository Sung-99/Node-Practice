import { createServer } from 'node:http'

const server = createServer((req,res)=>{

res.end("ola mundo");

});


server.listen(3000, ()=>{

  console.log(" server working on http://localhost:3000");  
});