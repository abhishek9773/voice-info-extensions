let body = document.querySelector("body");

let mybtn = document.createElement("button");
mybtn.setAttribute("id", "mybtn");
mybtn.addEventListener("click", doSomething);
body.appendChild(mybtn);


function doSomething(){
    if(mybtn.hasAttribute("listening") == false){
        mybtn.setAttribute("listening", true);
        console.log("I am all ears");
    }
    else{
        mybtn.removeAttribute("listening");
        console.log("I am not listening any more");
    }

}