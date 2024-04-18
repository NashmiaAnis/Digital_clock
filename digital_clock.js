const box= document.querySelector('#box');
setInterval(function() {
    const date = new Date();
    // console.log(date.toLocaleTimeString); 
    box.innerHTML= date.toLocaleTimeString();
}, 1000);