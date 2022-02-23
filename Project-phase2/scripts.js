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
   
  
//collect the spans in a collection
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {    //loop through to find the match between the given text and spans[index].innerHTML
        if (tbTextToFind.value === spans[index].innerHTML){
            spans[index].classList.add('spanHighlighted');
            break;
        }

       
        }
        
      
        
        
        
        
    }
    
    function validateInput() {
            // Get the value of the input field with id="tbTextToFind"
            let x = document.getElementById("tbTextToFind").value;
            console.log(x);
            // 
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
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }