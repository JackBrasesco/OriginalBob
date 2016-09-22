var gameInput = $("#game-input");
var gameOutput  = $("#game-output");
gameInput.keydown(function(keydownEvent) {
  // the key code for enter is 13

  if (keydownEvent.keyCode == 13) {  
    parseText(gameInput.val()); 
    gameInput.val();
    var str = gameInput.val();
    var isColor = str.indexOf("color");
    var isName = str.indexOf("name");
    if (isColor > 0) {
      gameOutput.html("My favorite color is blue")
    }
    else if (isName > 0) {
      var response
          =responses[Math.floor(Math.random()*responses.length)];
      gameOutput.html(response)
    }
    else
    console.log(isName)
    gameInput.val("")
  }  
})



function parseText(text) {  
  if (text === "hello") {
    gameOutput.html("Hi there!");
  }else if(find > 0) {
    gameOutput.html("blue");
  } else if(text === "How much do you weigh") {
    gameOutput.html("3 pounds");
  } else if(text === "help") {
    gameOutput.html("I'm not 'bob the help bot'... help thyself");
  } else if(text === "Hi") { 
    counter()
    if (inc < 3)
      gameOutput.html("Hi, how are you")
      else gameOutput.html("ur mum") 
        } else if(text === "What's your favorite class?") {
          gameOutput.html("Anything but programming!");
        } else if(text === "what is your name") {
          var response
          =responses[Math.floor(Math.random()*responses.length)];
          gameOutput.html(response);      
        } 

  else {gameOutput.html("What was that? Type 'help' for a list of things you can ask me!");
       }
}

var responses = ["Bot Bob!", "Bob", "My name is Bob","my name is henry vaugn bransten duex mobile chow meinington of wells, but you can call me Bob!","Barnaby Marmaduke Aloysius Benjy Cobweb Dartagnan Egbert Felix Gaspar Humbert Ignatius Jayden Kasper Leroy Maximilian Neddy Obiajulu Pepin Quilliam Rosencrantz Sexton Teddy Upwood Vivatma Wayland Xylon Yardley Zachary Usansky, just kidding... its bob"]

var inc = 0
function counter() {
  inc = inc + 1;
} 

