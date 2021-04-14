'use strict';

const fs = require('fs');

const output = (err,files)=>{
    if(err) console.log(err)
    else console.dir(files)
};
fs.readdir('.', output)