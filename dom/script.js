function addstr (addperson){
    let addsub = document.createElement("li")
    addsub.innerHTML  =`${addperson}`
document.querySelector(".names").appendChild(addsub)

}
addstr("manish")
addstr("ankit")  /// 1 methods

function optamize(addperson){
    let li = document.createElement("li") 
    li.appendChild(document.createTextNode(addperson))
    document.querySelector(".names").appendChild(li)
}
optamize("rahul") 
optamize("vijay ")  // 2 method


//changes name

let nameschange = document.querySelector("li:nth-child(2)")
let newname  = document.createElement("li")
newname.textContent = 'sharthak'
nameschange.replaceWith(newname)

//changes name 2 method
let nameschange2 = document.querySelector("li:nth-child(4)")
nameschange2.outerHTML = "<li>mojo</>"

//remove 

let nameschang = document.querySelector("li:last-child")
nameschang.remove()


// forloops

let months = document.querySelector(".month")
for (let i = 0; i < months.children.length; i++) {
    console.log(months.children[i].innerHTML);  
}
let monthsall = document.querySelector(".months")
console.log(monthsall);
console.log(monthsall.parentElement);
console.log(monthsall.nextElementSibling)


// element adds

let div = document.createElement("div")
console.log(div);
div.className = "main"
div.id = "myid"
div.id = Math.round(Math.random()* 10 + 1) 
div.innerText = "hello world"
let text =document.createTextNode("hello world2")
div.appendChild(text)
document.body.appendChild(div)
div.style.backgroundColor = "green"
div.style.color = "white"



