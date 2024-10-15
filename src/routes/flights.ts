import express from 'express'

const router = express.Router();

//dinamic address

router.get('/:from/:to',(req, res) => {
    const { from, to } = req.params;
    
    
    res.json({
        from: from.toUpperCase(),
        to: to.toUpperCase(),
        price: 55
    });

});
/* ------------------------------------------ */


export default router