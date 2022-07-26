console.log(global);
global.setTimeout(()=>{
    console.log('In the timeout');
},3000);

const int =setInterval(() => {
    console.log('In the interval')
}, 1000);