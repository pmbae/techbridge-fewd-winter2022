//scripts for problems
function resetFindInGrid() {
    //set tbNumberToFind to blank
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    tbNumberToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}

function resetFindInList() {
     //set tbTextToFind to blank
    let tbTextToFind = document.getElementById("tbTextToFind");
    tbTextToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}



function reloadPage() {
    window.location.reload();
    return false;
}


function findInGrid() {
 //find in grid
  
  let tbNumberToFind = document.getElementById("tbNumberToFind");
  let spans = document.getElementsByTagName('span');
  console.log("spans; ",spans);
  for (let index = 0; index < spans.length; index++)
 {
  if(tbNumberToFind.value == spans[index].innerHTML){
     spans[index].classList.add('spanHighlighted');
 }
}
}



let tbTextToFind = document.getElementById("tbTextToFind");

function findInList() {
   //find In List
   let tbTextToFind = document.getElementById("tbTextToFind");
  

  let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        if (tbTextToFind.value === spans[index].innerHTML){
            spans[index].classList.add('spanHighlighted');
            
        }
        
        }
        
      
        
        
        
        
    }
    
    function validateForm() {
            // Get the value of the input field with id="tbTextToFind"
            let x = document.getElementById("tbTextToFind").value;
            // If x is Not a Number or less than one or greater than 10
            let text;
            if (isNaN(x) || x < 1 || x > 10) {
              text = "Input not valid";
            } else {
              text = "Input OK";
            }
            document.getElementById("demo").innerHTML = text;
          
        
      }
   



  
   

// let i=0;
// function sortIt() {
//     let arr = [];
//     let content = document.getElementsByTagName("span");
//     console.log(content);
//     for (let i = 0; i < content.length; i++) {
//         arr.push(content[i].innerHTML)
//        }
//     console.log(arr);
    
//     arr.sort(function(a, b) {
//     return a - b;
// });
//     console.log(arr);
    


// }

let final = document.getElementById('resultsRow')
function sortIt() {
     let you = document.getElementById("row0").children;
     console.log(you)
     let newT = [];
    for (let t = 0; t < you.length; t++){
        console.log(you[t].innerText);
        newT.push(you[t].innerText);
        newT.sort()
    }
    console.log(newT);
    let gone = []
    for (let t =0; t < you.length; t++){
    for (let v =0; v < newT.length; v++){
        if (newT[t] == you[v].innerText)
    gone.push(you[v]) 
    }    
}for (let t=0; t < gone.length; t++){
    final.appendChild(gone[t])
} 
}
