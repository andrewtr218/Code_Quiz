var qArr = [
    {
      title: "What common ghost phrase do ghost programmers say to startle humans?",
      choices: ["Top of the mornin' to ya!", "BoOOooOOoOoolean!", "Great job sport!", "Aaaaaaaaaaaaaaaaaaaaaaaaagh"],
      answer: "BoOOooOOoOoolean!"
    },
    {
      title: "What is the combined number of unique letters and numbers on a standard keyboard?",
      choices: ["6", "43", "Qwerty 2", "46"],
      answer: "46"
    },
    ///etc.
];

  //write a function that takes a number, asks the question associated with that number, verifies the answer for correctedness against users input, and returns true or false depending on the result

var qNum = prompt("Enter the number of the question you would like to pick") - 1;

function ask(qNum){
    var qTitle = qArr[qNum].title;
    var options = qArr[qNum].choices;
    var ans = qArr[qNum].answer;
    alert(qTitle);
    alert(options[0]);
    alert(options[1]);
    alert(options[2]);
    alert(options[3]);
    alert(ans);
    alert(qNum);
    alert("javascript is working");

    // return qTitle, options, ans
};


ask(qNum);