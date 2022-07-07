//sound
// var sound = document.getElementById("sonido");
var sound = new Audio('./sound/sonido.mp3')
function reproducir(){
    sound.play();
}

// Collapsible
var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Hola! &#128075; <br> ¿Necesitas ayuda?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();
    reproducir();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}
greeting=false;
document.addEventListener("click",()=>{
    if(!greeting){
        greeting=true;
        let windw = document.getElementById("chat-content");
        windw.style.maxHeight="500px";
        firstBotMessage();
    }
})


function setLoading(){
    let botHtml = '<p class="spanMess" id="fakeMessage"><span> ... </span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}
function deleteLoading(){
    document.querySelector("#fakeMessage").outerHTML = ""
}

// Retrieves the response
function getHardResponse(userText) {
    setTimeout(() => {

        let botResponse = getBotResponse(userText);
        let time = getTime();
        let botHtml = `<p class="spanMess"><span> ${botResponse} <span class="time">${time}</span> </span></p>`;
        deleteLoading();
        $("#chatbox").append(botHtml);

        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        reproducir();
    }, 2000);
    
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        setLoading()
        getHardResponse(userText);
    }, 1000)
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});