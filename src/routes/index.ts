import express from 'express'
import routerProduct from '../routes/products'
import routerflights from '../routes/flights'
import { interferir } from '../middlwares/interferir';


const router = express.Router();

router.use(interferir);//Test Red to see if something is ok before allowed a connection

router.use('/products', routerProduct);        //specif router 
router.use('/flights', routerflights);        //specif router 



router.get('/ping', (req, res) => {
    console.log("executou ping");
    res.json({pong: true});

});


router.get('/',(req, res) => {
    let name = "vitor";
    let age = 25;

    res.json({name, age});

});

export default router