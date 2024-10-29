import express from 'express';
import  { writeFile  } from 'fs/promises';
import { createContact, deleteContact, getContacts } from '../services/contact';


const dataSource = './data/list.txt'
const router = express.Router();

//write
router.post('/contato', async (req, res) => {
    const { name } = req.body;
    
    if (!name || name.length < 2) {
         res.json({error: 'name need at least 2 character'});
         return;
    }
    
    //data process

    await createContact(name);
    res.status(201).json({contato: name});
});


//read
router.get('/contatos', async(req, res) =>{
    let list =  await getContacts();

    res.json({contatos: list});
});

router.delete('/contatos', async (req, res) => {
    const { name } = req.query;
    if(!name){
       res.json({error: "No name inserted"});
    }
    await deleteContact(name as string);
    res.json({contato: name});
});

export default router;