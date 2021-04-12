'use strict';
 function chain (prev = null){
     const cur = ()=>{
         if(cur.prev){
             cur.prev.next = cur;
             cur.prev();
         } else {
             cur.forward();
         }
     };
     cur.prev = prev;
     cur.fn = null;
     cur.args = null;
     cur.do = function(fn, ...args){
        cur.fn = fn;
        cur.args = args;
        return chain(cur)
     };
     cur.forward = () =>{
         if(cur.fn) cur.fn(cur.args ,()=>{
             if(cur.next) cur.next.forward();
         });
     };
     return cur

 }

