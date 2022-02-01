//GLOBALS - No window

//__dir_name- path to cd
//__filename - filename
//require - func to use modules in CommonJS
//module - info about current module(file)
//process- info about env where process is executed

console.log(__dirname)
// console.log(__filename)
// console.log(module)
// console.log(process)

setInterval(() => {
    console.log('hello world')
}, 1000)
