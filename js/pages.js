// Handle submission

document.getElementById("submit").onclick = function () {
  console.log('hhh');
  // Save story to show off in next screen
  var story = document.getElementById("story").value;
  sessionStorage.setItem('story', story);

  location.href = "http://localhost:8000/stats.html";

    //location.href = "http://localhost:8000/giotto.html";
    //https://adamgyee12.github.io/Portfolio/giotto.html
};

document.getElementById("btn1").onclick = function () {
  var txt;
  var person = prompt("Enter the name of who you would like to tag:");
  if (person == null || person == "") {
      txt = "User cancelled the prompt.";
  } else {
      txt = "Hello " + person + "! How are you today?";
  }
};

document.getElementById("btn2").onclick = function () {
  var txt;
  var person = prompt("Enter the name of who you would like to tag:");
  if (person == null || person == "") {
      txt = "User cancelled the prompt.";
  } else {
      txt = "Hello " + person + "! How are you today?";
  }
};

document.getElementById("btn3").onclick = function () {
  var txt;
  var person = prompt("Enter the name of who you would like to tag:");
  if (person == null || person == "") {
      txt = "User cancelled the prompt.";
  } else {
      txt = "Hello " + person + "! How are you today?";
  }
};
