
console.log('Starting..');

//execute this method after the time
setTimeout(()=> {
    console.log('2 second timmer...');
}, 2000);

// 0 second time still call after Stopped
//Reason: setTimeout is function in node not in javascript. as It needs Node API to run 
// java script is a single treaded 
// javascript will try to run setTimeout but it needs Node API so it registed in node API.
// then when Node API run this function using C++ then it added in event loop
// once javascript call stack get empty
// then it try to find fu8nction in event loop
//so 0 sec called at the end.
setTimeout(()=> {
    console.log('0 second timmer...');
}, 0);

console.log('Stopped..');