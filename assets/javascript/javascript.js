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

// MAKE ARRAY THAT PUTS ANSWERS IN ORDER


  //write a function that takes a number, asks the question associated with that number, verifies the answer for correctedness against users input, and returns true or false depending on the result

// var ansNum = ("What answer would you like to pick?")



    // var qTitle = qArr[qNum].title;
    // var options = qArr[qNum].choices;
    // var ans = qArr[qNum].answer;
    // alert(qTitle);
    // alert(options[0]);
    // alert(options[1]);
    // alert(options[2]);
    // alert(options[3]);
    // alert(ans);
    // alert(qNum);
    // alert("javascript is working");

    // return qTitle, options, ans
    
    // alert(qTitle);
    // alert(qTitle);
    // alert(options[0]);
    // alert(options[1]);
    // alert(options[2]);
    // alert(options[3]);
    // alert(ans);
    // alert(qNum);
    // alert("javascript is working");



function ansCheck1(){
  if (document.getElementById("ans" + 2).textContent === qArr[0].choices[1]){
    alert("the comparison works");
}
};

    // for verification for javascript click action try setting attribute (may add permanence). Otherwise make the answer array.
    // if (document.getElementById("ans" + (2)).textContent === qArr[0].choices[1]){
    //     alert("the comparison works");
    //     document.getElementById("ans1").addEventListener("click",next());
    // };
    
    // for(i = 0;) i < 2;)
// add on-click to take me to next question
return a
};

function next(){
    alert("next works");
    // if (ansUser === qArr[0].answer[qNum-1]){
    //     alert("Javascript got this far")
    //     return(true)
    // }
};


function init(){
for(i = 0; i < 4; i++){

  document.getElementById("ans" + (i + 1)).innerText = qArr[0].choices[i];
  document.getElementById("ans" + (i + 1)).innerText = qArr[0].choices[i];
  document.getElementById("ans" + (i + 1)).innerText = qArr[0].choices[i];
  document.getElementById("ans" + (i + 1)).innerText = qArr[0].choices[i];
  };

while()
init();


document.getElementById("ans1").addEventListener("click",next()