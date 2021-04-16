'use strict';

api.console.log('From application1 gloval context');

module.exports =()=>{
    api.fs.readFile('../../README.md',(err,data)=>{
        if(err){
            console.log(err.message);
            return;
        }
        api.console.log(data.toString());
    });

    api.timers.setTimeout(() => {
        api.console.log('From application1 exported function');
    }, 5000);
}