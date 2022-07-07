// insert HTML Chat into page 
const htmlChat = document.createElement("div");
htmlChat.innerHTML=`<div class="chat-bar-collapsible">
<button id="chat-button" type="button" class="collapsible">&#128075;Chatea con nosotros!
    <i id="chat-icon" style="color: #fff;" class="fa fa-fw fa-comments-o"></i>
</button>

<div class="content" id="chat-content">
    <div class="full-chat-block">
        <!-- Message Container -->
        <div class="outer-container">
            <div class="chat-container">
                <!-- Messages -->
                <div id="chatbox">
                    <h5 id="chat-timestamp"></h5>
                    <p id="botStarterMessage" class="botText"><span>Loading...</span></p>
                </div>

                <!-- User input box -->
                <div class="chat-bar-input-block">
                    <div id="userInput">
                        <input id="textInput" class="input-box" type="text" name="msg" placeholder="Escribe un mensaje" required>
                        <p></p>
                    </div>

                    <div class="chat-bar-icons">
                        <i id="chat-icon" style="color: crimson;" class="fa fa-fw fa-heart"
                            onclick="heartButton()"></i>
                        <i id="chat-icon" style="color: #333;" class="fa fa-fw fa-send"
                            onclick="sendButton()"></i>
                    </div>
                </div>

                <div id="chat-bar-bottom">
                    <p></p>
                </div>

            </div>
        </div>

    </div>
</div>

</div>`
const body=document.body;
body.appendChild(htmlChat);


// insert scriptsChat into HTML 
const scritJquery = document.createElement('script');
scritJquery.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
document.body.appendChild(scritJquery);

const scritResponse = document.createElement('script');
scritResponse.setAttribute('src','static/js/responses.js');
document.body.appendChild(scritResponse);

const scritChat = document.createElement('script');
scritChat.setAttribute('src','static/js/chat.js');
document.body.appendChild(scritChat);




