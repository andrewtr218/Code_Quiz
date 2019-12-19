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

// var ansArr = [q[0].answer , q[1].answer];

var score = (0);
document.getElementById("score").textContent=("Score: " + score);
var a = 0;

function init(a){
    for(i = 0; i < 4; i++){


      // document.getElementById("");
      document.getElementById("ans" + (i + 1)).innerText = qArr[a].choices[i];
      document.getElementById("ans" + (i + 1)).innerText = qArr[a].choices[i];
      document.getElementById("ans" + (i + 1)).innerText = qArr[a].choices[i];
      document.getElementById("ans" + (i + 1)).innerText = qArr[a].choices[i];
      
      
      
    }
    
};

// function change_page(){
//     window.location.href = "highscores.html";
//   } 

// function wrong(){
//     alert("Wrong!");
//     if(a<2){ 
//         if (score > 0){

//             score -= 1;
//             a += 1;
//         };


        

        
        

        
//         document.getElementById("score").textContent = ("Score: " + score);
//         init(1);
//     }
//     else{
//         // change_page();
//         document.getElementById("score").textContent = ("Score: " + score);
//         init(1);
//     }
// };

// function right(){
//     alert("Right!");
//         init(1);
//         score += 1;
//         a +=1;
//         document.getElementById("score").textContent = ("Score: " + score);
// };

// function right{
//       alert("this path works");
// }

init(a);

document.getElementById("ans1").addEventListener("click" , function(){
  if (answered == qArr[currentQuestion].answer) {
    score += 1;
  } else {
    score -= 1;
    timeLeft -= 5;

    if (score < 0){
      score = 0;
    }
  }
  a += 1;
  init(a)
});    





// document.getElementById("ans2").addEventListener("click" , function(){
//   if(answer ==
//   }
//   if(a)
//   }
//   a += 1;
// }); 





document.getElementById("ans3").addEventListener("click" , function(event){
  if (answered == qArr[currentQuestion].answer) {
    score += 1;
  } else {
    score -= 1;
    timeLeft -= 5;

    if (score < 0)
      score = 0;
  }
  a += 1;
}); 






document.getElementById("ans4").addEventListener("click" , function(event){
  if (answered == qArr[currentQuestion].answer) {
    score += 1;
  } else {
    score -= 1;
    timeLeft -= 5;

    if (score < 0)
      score = 0;
  }
}); 