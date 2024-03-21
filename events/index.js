// type , timeStamp, defaultPrevened, target, 
// toElement, clientx, screenX etc


// bubling   == botton se top pr jata hai   default false
//cepturing == top se bottam mai jata hai    true

document.querySelector("img").addEventListener('click',(e)=>{
console.log(e);
console.log("click");

},false)


document.querySelector("h").addEventListener('click',(e)=>{
    console.log(e);
    console.log("clicked");
    e.stopPropagation()
   
},false)


document.querySelector("img").addEventListener('click',(e)=>{
e.target.remove()
})


