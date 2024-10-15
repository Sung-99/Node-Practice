import express from 'express'
import helmet from 'helmet';
import path from 'path';
import router from '../routes';
import { errorHandler, notFoundRequest } from '../routes/errorhandler';


const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../../public')));

app.use('/', router); // main router more outer one
app.use(notFoundRequest);
app.use(errorHandler);

app.listen(3000, () =>{

    console.log("Server working on http://localhost:3000/")

});