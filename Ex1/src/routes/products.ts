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



router.get('/',(req, res) => {
    console.log(req.params);
   
    //or const = { id } = req.params;
    //res.json({id, name: sacola, price: 55})
    res.json({name: 'pó do cabana', price: 30});

});

router.post('/',(req, res) => {

    console.log('Params', req.params);
    console.log('query', req.query);
    console.log('body', req.body);

    res.json({prod: []});

});

export default router;