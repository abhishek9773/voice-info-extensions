let body = document.querySelector("body");

let mybtn = document.createElement("button");
mybtn.setAttribute("id", "mybtn");
mybtn.addEventListener("click", doSomething);
body.appendChild(mybtn);

// webkit speech api =>https://www.section.io/engineering-education/text-to-speech-in-javascript/
let speechRecognition = new webkitSpeechRecognition();  
speechRecognition.continuous = true;
speechRecognition.interimResults = true;
speechRecognition.lang = "en-us";

let transcript = "";
speechRecognition.onresult = function(even){
    transcript ="";
    for(let  i =0; i< even.results.length; ++i){
        transcript += even.results[i][0].transcript;
    }
};

document.addEventListener("keypress",hendlekbd);

function handlekbd(event){
    if(event.shiftkey && event.altkey && event.code === 'key0'){
        mybtn.click();
    }
}


function doSomething(){
    if(mybtn.hasAttribute("listening") == false){
        mybtn.setAttribute("listening", true);
        speechRecognition.start();
    }
    else{
        mybtn.removeAttribute("listening");
        speechRecognition.stop();
        // this is the popup library => https://popup.js.org/
        const myPopup = new Popup({
            id: "my-popup",
            title : "Here is what you said",
            content: transcript
        });
        myPopup.show();
    }

}