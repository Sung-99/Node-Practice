import { RequestHandler } from 'express'

export const interferir: RequestHandler = (req, res, next) => {

    let logged = true;

    logged ? next(): res.status(403).json({error : "Middlaware not allowed"});
    
    
} 