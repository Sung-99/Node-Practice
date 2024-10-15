import express from 'express';

const router = express.Router();


//dinamic address

router.get('/:id',(req, res) => {
    console.log(req.params);
   
    //or const = { id } = req.params;
    //res.json({id, name: sacola, price: 55})
    res.json({name: 'sacola', price: 55});

});
/* ------------------------------------------ */

export default router;