const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
    return "your notes.....";
}


const addNotes = (title, body) => {
    const notes = loadNotes();

    const duplicatesArray = notes.filter((note) => {
        return note.title === title;
    })

     //const isDuplicate = notes.find((note)=> {return note.title === title})
    //console.log('node' + duplicatesArray);
    //console.log('node ki length' + duplicatesArray.length);
    if(duplicatesArray){
        notes.push({
            title:  title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New Node Added...'))
    }
    else{
        console.log(chalk.red('title is already present...'))
    }
}

const saveNotes = (notes)=> {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const removeNode = (title) => {
    const notes = loadNotes();
    const nodeArray = notes.filter((note) => {
        return note.title != title;
    })
    saveNotes(nodeArray);
    console.log(chalk.red('Removed Successfully....'+ title))

}


const listNote = () => {
    const notes = loadNotes();
    notes.forEach((note)=>{
        console.log(note.title);
    })
    console.log(chalk.green('Listed Successfully....'))

}

const readNote = (title) => {
    const notes = loadNotes();
    const temmNote = notes.find((note)=>{
        return note.title === title;
    })
    if(temmNote){
        console.log(chalk.green('Listed Successfully....'))
        console.log(chalk.yellow(temmNote.title)+' body: '+ temmNote.body)
    }
    else{
        console.log(chalk.red('node not exist....'))
    }

    

}
const loadNotes = () => {
try
    {    
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
}
catch(e){
    return[];
}
}
//single function export
//module.exports = getNotes;

//exporting an object
module.exports ={
    getNotes: getNotes,
    addNotes: addNotes,
    removeNode: removeNode,
    listNote: listNote,
    readNote: readNote
}