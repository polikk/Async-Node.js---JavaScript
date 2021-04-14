'use strict';

const fs = require('fs');

fs.watch('./6-watch.js',(event,data)=>{
    console.dir({event,data})
})