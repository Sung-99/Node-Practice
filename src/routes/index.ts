import express from 'express'
import routerProduct from '../routes/products'
import routerflights from '../routes/flights'


const router = express.Router();


router.use('/products', routerProduct);        //specif router 
router.use('/flights', routerflights);        //specif router 

router.get('/',(req, res) => {
    let name = "vitor";
    let age = 25;

    res.json({name, age});

});

export default router