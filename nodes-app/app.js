const notes = require('./notes.js');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
//console.log(process.argv);
//console.log(yargs.argv);
yargs.version('1.1.0');

//Create a add command
yargs.command({
    command: 'add',
    describe: 'Adding a new command',
    builder:{
        title:{
            describe: 'title notes',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
        console.log('Adding a new command in application00', argv);
        //node --inspect app.js add --title="priya" --body="btrrjhgjtnasdm"
        //in windows there are some problem -bbrk means break 
        //node --inspect-brk app.js add --title="priya" --body="btrrjhgjtnasdm"
        //debuggger;
        //console.log('debug..');
    }

}).argv;

//Create a remove command
yargs.command({
    command: 'remove',
    describe: 'removing a note',
    handler(argv){
        notes.removeNode(argv.title)
        console.log('Removing a node..', argv.title);
    }

}).argv;

//Print List node
yargs.command({
    command: 'list',
    describe: 'Printing list note a note',
    handler(){
        notes.listNote()
        console.log('Printing List note..');
    }

}).argv;


//Read List node
yargs.command({
    command: 'read',
    describe: 'Reading note',
    handler(argv){
        notes.readNote(argv.title)
        console.log('Reading List note..');
    }

}).argv;

// //create remove command
// yargs.command({
//     command: 'remove',
//     describe: 'removing a new command',
//     handler: function(){
//         console.log('removing a new command in application00');
//     }
// });

//const yargs = require('yargs');

// const argv = yargs
//     .command({
//         command: 'add',
//         describe: 'Adding command',
//         handler: argv => {
//             console.log('Adding notes');
//         }
//     })
//     .argv;


// //Create a add command
// yargs.command({
//     command: 'list',
//     describe: 'listing a new command',
//     handler: function(){
//         console.log('listing a new command in application00');
//     }

// });

// //reading a add command
// yargs.command({
//     command: 'read',
//     describe: 'reading a new command',
//     handler: function(){
//         console.log('reading a new command in application00');
//     }

// });


// const validator = require('validator');
// const chalk = require('chalk');
// console.log(validator.isEmail('priya@gmail.com'));
// console.log(validator.isURL('https:/priya@gmail.com'));
// console.log(chalk.green("Success..."))
// console.log(chalk.blue.bold("Priya......"))
// //passing multi aurgument =>  --title='priya ttututy jhgjghj'
// //priya ttututy jhgjghj   
// console.log(process.argv);
// if(process.argv[2] === 'priya'){
//     console.log("Hi Priyaaaa");
// }



// const fs = require('fs');
// fs.writeFileSync('nodes.txt', "load file")
// console.log(process.argv +'1');
// fs.appendFileSync('message.txt', 'data to append');
// console.log(process.argv +'2');
// fs.appendFileSync('nodes.txt', 'data to append');
// console.log(process.argv +'3');



// const fs = require('fs');

// let writeStream = fs.createWriteStream('secret.txt');

// // write some data with a base64 encoding
// writeStream.write('aef35ghhjdk74hja83ksnfjk888sfsf', 'base64');
// console.log(process.argv +'2');
// // the finish event is emitted when all data has been flushed from the stream
// writeStream.on('finish', () => {
//     console.log('wrote all data to file');
// });
// console.log(process.argv +'3');
// // close the stream
// writeStream.end();


// fs = require('fs');
// console.log(process.argv +'1');
// fs.writeFileSync('asynchronouss.txt', 'asynchronous write!', (err) => {
//   if (err){
//     console.log('The file has been saved!');
//   };
//   console.log('The file has been saved!');
// });
// console.log(process.argv +'2');