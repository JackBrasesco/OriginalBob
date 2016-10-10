$("#signin").click(function() {
  $(".siscreen").css({display: "inline"});
})

$("#signup").click(function() {
  $(".sustuff").css({display: "inline"});
})

var newUser = $("#suur");

var newPassword = $("#supwone");

$("#suenter").click(function(userEnter) {
  addListItem("UserDatabase",newUser)
  
  
})
  