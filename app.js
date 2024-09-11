
// const mult=require('./utils.js')
// const getnotes=require('./notes.js')
// mult(3,4)
// console.log(mult(3,4))
// console.log(getnotes())
 //const chalk=require('chalk')
 const yargs=require('yargs')
 const chalk =require('chalk')
 console.log(chalk.green('Working'))

yargs.command({
    command : 'add' ,
    describe : 'add a Note..' , 
    builder : {
        title : {
            describe : 'Note Title',
            demandOption   : true ,
            //it is optional and it is false by default .use to make givinf a title arg is necessary 
            type : 'string'
        },
        body : {
            describe : 'Body',
            demandOption : true,
            type : 'string'
        }

    },
    handler  : function(argv){
       // console.log('adding a note',argv)
       //above line print everything 
       console.log("Title : " + argv.title),
       console.log("Body : " + argv.body)
    }
})
yargs.command({
    command : 'remove' ,
    describe : 'remove a note' ,
    handler : function(){
        console.log('removing a note')
    }
})
yargs.command({
    command : 'read' ,
    describe : 'read a note' ,
    handler : function(){
        console.log('reading  a note')
    }
})
yargs.command({
    command : 'list' ,
    describe : 'list a note' ,
    handler : function(){
        console.log('listing  out all notes')
    }
})
//console.log(yargs.argv)
//instead of using above line we van use yargs.parse()
yargs.parse()