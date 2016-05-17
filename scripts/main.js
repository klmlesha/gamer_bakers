console.log('I am Darth Vader. Welcome to my little corner of the web!')

var topSecret = function(){
  var name = window.prompt('Enter your name');
  if(name === "Luke Skywalker" || name == 'Luke'){
    alert("I am your father.");
  } else {
    alert("I am not your father.");
  }
}
