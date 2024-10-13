import express from 'express'
import helmet from 'helmet';
import path from 'path';


const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../../public')));


app.get('/',(req, res) => {
    let name = "vitor";
    let age = 25;

    res.json({name, age});

});


app.listen(3000, () =>{

    console.log("Server working on http://localhost:3000/")

});