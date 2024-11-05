import z from 'zod'

const schema = z.object({

    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(120)
});

let data = {
    
    name : "Vitao",
    email : "Vitor@hotmail.com",
    age: 25
}

const result = schema.safeParse(data);
if(result.success){
    console.log('Deu certo, continue...');
    console.log(result.data);

}else {

    console.log('Deu erro')
}