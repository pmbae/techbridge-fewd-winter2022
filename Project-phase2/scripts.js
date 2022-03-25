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
 function FindInGrid() { //trying to tweak original code to fit booklist
  //find in grid
   
   let txtToFind = document.getElementById("myInput");
   let words = document.getElementsByTagName('p');
   console.log("words; ",words);
   for (let index = 0; index < words.length; index++)
  {
    if(txtToFind.value == words[index].innerHTML){
      words[index].classList.add('spanHighlighted');
    }
  }
 }




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
    
//for sortitems page. Sort the grid row
let final = document.getElementById('row0')
function sortIt() {
     let you = document.getElementById("row0").children;
     console.log("you",you)
     let newT = [];
    for (let t = 0; t < you.length; t++){
        console.log(you[t].innerText);
        newT.push(you[t].innerText);
        newT.sort()
    }
    console.log("newT", newT);
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
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   function filterFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     div = document.getElementById("myDropdown");
//     a = div.getElementsByTagName("a");
//     for (i = 0; i < a.length; i++) {
//       txtValue = a[i].textContent || a[i].innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         a[i].style.display = "";
//       } else {
//         a[i].style.display = "none";
//       }
//     }
//   }


//check the username and password and log the user in
 var form = document.getElementById('formlog');
    if (form){
      form.addEventListener('submit',function(event){
      event.preventDefault();
    var username=document.getElementById('username').value;
      console.log(username);
    var pwd=document.getElementById('pwd').value;
      console.log(pwd);
    })
  }
function userLogin(){
    var username=document.forms['formlog']['username'].value;
    var pwd=document.forms['formlog']['pwd'].value
        if(username=="employee" && pwd=="1234"){
          window.location.href="../Project-phase2/employee.html";
      }
        else if(username=="manager" && pwd=="5678"){
          window.location.href="../Project-phase2/manager.html";
      }
        else{
          alert("Invalid Login Credentials");
        }
      }

//filter and search through the grid of books for users search input
// function myFunction() {
//   // Declare variables
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("mygrid");
//   boxx = table.getElementsByTagName("article");

//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }
const captions = document.querySelectorAll(".article p");
console.log("captions", captions);
console.log("p", captions[0].innerText);
const myArray = [];
let counter = 1;
 
for (const caption of captions) {
  myArray.push({
    id: counter++,
    text: caption.textContent
  });
}


const searchInput = document.querySelector('input[type="text"]');
const booklistitems = document.querySelectorAll(".archive article");
const dNone = "d-none";
 
if (searchInput) {
  searchInput.addEventListener("keyup", keyupHandler);

}

 
function keyupHandler() {
  //debugger;
  // 1
  for (const item of booklistitems) {
    item.classList.add(dNone);
    console.log("item", item);
  } 
  // 2
  const text = document.getElementById("myInput").value;
  console.log("Text", text);
  // 3
  const filteredArray = myArray.filter(el => el.text.includes(text));
  console.log("Filtered Array", filteredArray);
  // 4
  if (filteredArray.length > 0) {
    for (const el of filteredArray) {
      console.log("el", el);
      debugger;
      let arr = document.querySelector(`.archive article:nth-child(${el.id})`);
       console.log("arr", arr);
      
      arr.classList.remove(dNone);
      
    }
  } 
  
}


//pull all the paragraphs with genre in it
//look through the paragraphs and put the contents in an array
//look through the array to find the words romance
//if romance is found, let the article box with matching cter number show
//else hide the box
function romanceBooks(){
  const collections = document.querySelectorAll("p.genre");
  console.log("collections", collections);
  let counter = 0;
  
  for (counter; counter < collections.length; counter++) {
    let text = collections[counter].innerText;
    let boxes = document.querySelectorAll(".article");
    if (text !== "Romance"){
      
      console.log("boxes", boxes);
      boxes[counter].classList.add(dNone);
    } else {
      boxes[counter].classList.remove(dNone);

    }

    
  }
  document.getElementById("allbks").innerText = "All Romance Books";
}

function scifiBooks(){
  const collections = document.querySelectorAll("p.genre");
  console.log("collections", collections);
  let counter = 0;
  
  for (counter; counter < collections.length; counter++) {
    let text = collections[counter].innerText;
    let boxes = document.querySelectorAll(".article");
    if (text !== "Science - Fiction"){
      
      console.log("boxes", boxes);
      boxes[counter].classList.add(dNone);
    } else {
      boxes[counter].classList.remove(dNone);

    }

    
  }
  document.getElementById("allbks").innerText = "All Science - Fiction Books";
}

function mysteryBooks(){
  const collections = document.querySelectorAll("p.genre");
  console.log("collections", collections);
  let counter = 0;
  
  for (counter; counter < collections.length; counter++) {
    let text = collections[counter].innerText;
    let boxes = document.querySelectorAll(".article");
    if (text !== "Mystery"){
      
      console.log("boxes", boxes);
      boxes[counter].classList.add(dNone);
    } else {
      boxes[counter].classList.remove(dNone);

    }

    
  }
  document.getElementById("allbks").innerText = "All Mystery Books";
}

function HistBooks(){
  const collections = document.querySelectorAll("p.genre");
  console.log("collections", collections);
  
  let counter = 0;
  
  for (counter; counter < collections.length; counter++) {
    let text = collections[counter].innerText;
    let boxes = document.querySelectorAll(".article");
    if (text !== "Historical Fiction"){
      
      console.log("boxes", boxes);
      boxes[counter].classList.add(dNone);
    } else {
      boxes[counter].classList.remove(dNone);

    }

    
  }
  document.getElementById("allbks").innerText = "All Historical Fiction Books";
}

function FictionBooks(){
  const collections = document.querySelectorAll("p.genre");
  console.log("collections", collections);
  let counter = 0;
  
  for (counter; counter < collections.length; counter++) {
    let text = collections[counter].innerText;
    let boxes = document.querySelectorAll(".article");
    if (text !== "Fiction"){
      
      console.log("boxes", boxes);
      boxes[counter].classList.add(dNone);
    } else {
      boxes[counter].classList.remove(dNone);

    }

    
  }
  document.getElementById("allbks").innerText = "All Fiction Books";
}
//get gridbox
const pricelh = document.getElementById("pricelh");
const pricehl = document.getElementById("pricehl");
const publiyr = document.getElementById("pubyr");
let sorted = document.getElementById('mygrid');

// function sortgrid() {
//      const you = document.getElementById("mygrid").children;
//      console.log("you",you)
//      let newT = [];
//     for (let t = 0; t < you.length; t++){
//         const pricetag = you.getElementsByClassName("price")[t];
//         console.log("you.getElementByClassName(price)", pricetag);
//         newT.push(pricetag[t].innerText);  
//     }
//     console.log("newT", newT);
    
//     if(pricelh.checked ==true & pricehl.checked==false && publiyr.checked==false) {
//       newT.sort(function(a, b){return a-b});
//       let newer = [];
      
//     for (let t =0; t < you.length; t++){
//     for (let v =0; v < newT.length; v++){
//         if (newT[t] == you.getElementsByClassName("price")[v].innerText)
//     newer.push(you[v]) 
//     }    
// }for (let t=0; t < newer.length; t++){
//     sorted.appendChild(newer[t])
// }
//      } else if (pricelh.checked ==false & pricehl.checked==true && publiyr.checked==false)
//     newT.sort(function(a, b){return b-a});
//     let neww = []
//     for (let t =0; t < you.length; t++){
//     for (let v =0; v < newT.length; v++){
//       if (newT[t] == you.getElementsByClassName("price")[v].innerText)
//     neww.push(you[v]) 
//     }    
//     }for (let t=0; t < neww.length; t++){
//     sorted.appendChild(neww[t])
// }
// }

// function sortgrid(){
//   const prices = document.querySelectorAll("p.price");
//   console.log("prices", prices);
  
//   let counter = 0;
//   let array = [];
//   // if(pricelh.checked ==true & pricehl.checked==false && publiyr.checked==false) {
  
//     for (counter; counter < prices.length; counter++) {
//       let text = prices[counter].innerText;
//       array.push(text);
    
      
//           let sortedarray = array.sort();
          
//           let newer = [];
            
//           for (let t =0; t < prices.length; t++){
//           for (let v =0; v < sortedarray.length; v++){
//               if (sortedarray[t] == prices[v].innerText)
//               newer.push(prices[v]) 
//             }    
//         }for (let t=0; t < newer.length; t++){
//             sorted.appendChild(newer[t])
//         }
//         console.log("array", sortedarray);
//     }
//     // let boxes = document.querySelectorAll(".article");
//     // if (text !== "Fiction"){
      
//     //   console.log("boxes", boxes);
//     //   boxes[counter].classList.add(dNone);
//     // } else {
//     //   boxes[counter].classList.remove(dNone);

//     // }

    
//   }


  
// }

function sortgrid() {
     let you = document.getElementById("mygrid").children;
     console.log("you",you)
     let newT = [];
    for (let t = 0; t < you.length; t++){
        console.log(you[t].innerText);
        newT.push(you[t].innerText);
        newT.sort()
    }
    console.log("newT", newT);
    let gone = []
    for (let t =0; t < you.length; t++){
    for (let v =0; v < newT.length; v++){
        if (newT[t] == you[v].innerText)
    gone.push(you[v]) 
    }    
}for (let t=0; t < gone.length; t++){
    sorted.appendChild(gone[t])
} 
}

class MyBook {
  constructor(title, author, genre, price, condition, imageSrc) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
    this.condition = condition;
    this.imageSrc = imageSrc;
    
  }
}

var bookArray = [];

var AddBook = () => {

  let tbTitle = document.getElementById("bkname");
  let authors = document.getElementById("authname");
  let genres = document.getElementById("genre");
  let prices = document.getElementById("price");
  let conditions = document.getElementById("condition");
  let image = document.getElementById("imgsrc");

  let aBook = new MyBook(
    tbTitle.value,
    authors.value,
    genres.value,
    prices.value,
    conditions.value,
    image.value
    
  );

  bookArray.push(aBook);
};

var makeFlex = () => {
  AddBook();
  //find the bookList
  let bookList = document.getElementById("mygrid");
  debugger;

  let count = bookList.childNodes.length - 1;
  while (bookList.childNodes.length > 0) {
    bookList.childNodes[count].remove();
    count--;
  }

  for (let i = 0; i < bookArray.length; i++) {
    let aBook = bookArray[i];
    //create element for the new row div
    let newRow = document.createElement("article");
    newRow.classList.add("article");

    //create an element for each div that represents a portion of a book
    let divTitle = document.createElement("p");
    divTitle.innerText = aBook.title;
    let divAuthor = document.createElement("p");
    divAuthor.innerText = aBook.author;
    let divGenre = document.createElement("p");
    divGenre.innerText = aBook.genre;
    divGenre.classList.add("genre")
    //create div for image and add html that represents the image
    let images = document.createElement("img");
    images.innerHTML = "<img src=" + aBook.imageSrc + ' alt="Girl in a jacket">';
    images.classList.add("image")
    let pricess = document.createElement("p");
    pricess.innerText = aBook.price;

    //add the inner divs for each of the portions of the book that were created
    newRow.appendChild(divTitle);
    newRow.appendChild(divAuthor);
    newRow.appendChild(divGenre);
    newRow.appendChild(images);
    newRow.appendChild(pricess);

    //add the row to the booklist
    bookList.appendChild(newRow);
  }
};