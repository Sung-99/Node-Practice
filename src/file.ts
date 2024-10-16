import { readFile } from "fs/promises";
import { writeFile } from "fs/promises";

const writing = async () => {

    console.log('Writing ... ');

    const list = ['boni', 'vitor', 'pedro'];

    const listTxt = list.join('\n');

    await writeFile('./test.txt', listTxt);


    console.log('finished... ');
}

//writing();

const reading = async () => {

    const filetexto = await readFile('./test.txt', {encoding: 'utf8'});

    const list = filetexto.split("\n");

    console.log(list);
}

//reading();


const updateFile = async () => {
    const fileName = './test.txt'
    const filetexto = await readFile(fileName, {encoding: 'utf8'});

    const list = filetexto.split("\n");
    list.push('jao');

    const listTxt = list.join("\n");

    await writeFile(fileName, listTxt);
    //console.log(list);
}

updateFile();