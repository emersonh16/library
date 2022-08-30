let myLibrary = [
    {
    title:"Jurassic Park",
    author:"Michael Criton",
    pages: 458,
    read: true,
    }
    , 
    {
    title:"Harry Potter",
    author:"JKR",
    pages:315,
    read: true,
    }
    ];

let jurassicPark = myLibrary[0]
let harryPotter = myLibrary[1]


function bookConstructor(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {

        var readStatus = "empty" ;

            if(read == true){
                readStatus = "already read."
                }
            else {
                readStatus = "not read yet."
            }

         return title + " by " + author + ", " + pages + " pages, " + readStatus
    }
}

function addBookToLibrary(bookConstructor) {
    var newBook = bookConstructor;

    myLibrary.push(newBook)

    console.log(myLibrary)
    }





// When the user clicks on <div>, open the popup
function displayPopup() {
    var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");

    var x = document.getElementById("toggleButton")
    
        if (x.innerHTML === "Click here to add a book!"){
                x.innerHTML = "Click here to hide popup!"
        }
        else {
                x.innerHTML = "Click here to add a book!"
        }
  }


//displays myLibrary contents in the libraryDiv
function displayLibrary () {

    let contents = document.getElementById("libraryDiv")

    for (let i=0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
        
        const bookContainer = document.createElement("div");

            bookContainer.innerHTML = JSON.stringify(myLibrary[i])

            bookContainer.classList.add('bookContainer');

            contents.appendChild(bookContainer);

    }

    return contents
}




function submitBook() {
    document.getElementById("bookForm").submit();
    console.log(document.getElementById("bookForm").elements['bookTitle'].value)
  }




const userInputBook = document.querySelector("#bookTitle")

const submitButton = document.querySelector("#submitButton")


submitButton.addEventListener('click', () => {
    document.getElementById("libraryDiv").innerText = "${userInputBook.value}";
})







//window.addEventListener("load", displayLibrary);



const form  = document.getElementById('bookForm');

function returnTitle() {
var title = form.elements['bookTitle']
var userInputTitle = title.value
console.log(userInputTitle)
}

document.getElementById("bookForm").addEventListener('submit', returnTitle);