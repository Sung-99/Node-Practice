import z from 'zod'

const schema = z.object({

    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(120),
    status: z.boolean(),
    characteristics: z.array(
        z.object({
            name: z.string(),
            value: z.number()
        })
    )
});

let data = {
    
    name : "Vitao",
    email : "Vitor@hotmail.com",
    age: 25,
    status: true,
    characteristics: [
        {name: 'Mana', value: 10},
        {name: 'Shielding', value: 100}
    ]
}

type user = z.infer<typeof schema>

const result = schema.safeParse(data);
if(result.success){
    console.log('Deu certo, continue...');
    console.log(result.data);

}else {

    console.log('Deu erro')
}