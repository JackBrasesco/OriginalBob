$("#signin").click(function() {
  $(".siscreen").css({display: "inline"});
})

$("#signup").click(function() {
  $(".sustuff").css({display: "inline"});
})

var newUser = $("#suur");

var newPassword = $("#supwone");

var extUser = $("siun");

var extPassword = $("sipw");

// This is where accounts are created.

$("#suenter").click(function(accountCreate) {
  addListItem("UserDatabase",newUser);
  addListItem("passwordDatabase",newPassword);
  $(".sustuff").css({display: "none"})
})

// This is where you log in
$("#sienter").click(function(accountSignIn) {
  console.log("hi")
  var userReal = extUser.indexOf(UserDatabase);
  var passReal =  extPassword.indexOf(passwordDatabase);
  if (userReal > -1) {
    var uReal = 3
  }
  if (passReal > -1) {
    var pReal = 4
  }
  else {
    $("#wrong").css({display: "inline"})
  }
  
  var isLegit = (pReal + uReal)
  if (isLegit = 7) {
  }
  
})