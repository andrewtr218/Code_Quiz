var qArr = [
    {
      title: "What common ghost phrase do ghost programmers say to startle humans?",
      choices: ["Top of the mornin' to ya!", "BoOOooOOoOoolean!", "Great job sport!", "Aaaaaaaaaaaaaaaaaaaaaaaaagh"],
      answer: "BoOOooOOoOoolean!"
    },
    {
      title: "What is the combined number of unique letters and numbers on a standard keyboard?",
      choices: ["6", "46", "Qwerty 2", "43"],
      answer: "46"
    },
    ///etc.
];

var aArr = [qArr[0] , qArr[1]];
var a=0;

var score = (0);

function init(a){
    for(i = 0; i < 4; i++){
    
      document.getElementById("ans" + (i + 1)).innerText = qArr[a].choices[i];
      document.getElementById("ans" + (i + 1)).innerText = qArr[a].choices[i];
      document.getElementById("ans" + (i + 1)).innerText = qArr[a].choices[i];
      document.getElementById("ans" + (i + 1)).innerText = qArr[a].choices[i];
      
      
      
    }
    
};

function wrong(){
    alert("Wrong!");
};

function right(){
    alert("Right!");
        init(1);
        score += 1;
        document.getElementById("score").textContent = ("Score: " + score);
};

init(0);


document.getElementById("ans1").addEventListener("click" ,wrong);
document.getElementById("ans2").addEventListener("click" ,right);
document.getElementById("ans3").addEventListener("click" ,wrong);
document.getElementById("ans4").addEventListener("click" ,wrong);