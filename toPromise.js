const toPromise = fn => (...args) => new Promise ((resolve)=> resolve(fn(...args)));

const f1 = par => par;
const f2 = par => par;
const f3 = par => par;
const f4 = par => par;

console.log(f1(f2(f3(f4('value')))));

const pf1 = toPromise(f1);
const pf2 = toPromise(f2);
const pf3 = toPromise(f3);
const pf4 = toPromise(f4);

Promise.resolve()
.then(pf1.bind(null,'value'))
.then(pf2())
.then(pf3())
.then(pf4())
.then(data=>{
    console.log(data)
})