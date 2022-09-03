var mainForm = document.getElementById("bookForm")
var ascNameButton= document.getElementById("ascName")
var dscNameButton= document.getElementById("dscName")
var bookLength= document.getElementById("bookLength")
 
 
mainForm.addEventListener("submit", onSubmit)

ascNameButton.addEventListener("click", ascendingAlphabeticalTitle)
dscNameButton.addEventListener("click", descendingAlphabeticalTitle)
bookLength.addEventListener("click", bookLengthFunction)
 
 
function onSubmit(x) {
     x.preventDefault()
 
    var userInputBooktitle = document.getElementById("bookTitle").value.toString()
    var userInputAuthor = document.getElementById("author").value.toString()
    var userInputPages = document.getElementById("pages").value
 
    var zzz = new Book(userInputBooktitle, userInputAuthor, userInputPages)
        books.push(zzz)
   
    /*console.log(zzz.upperCaseName())*/
    console.log(books)
 
    document.getElementById("bookTitle").value = ""
    document.getElementById("author").value = ""
    document.getElementById("pages").value = null
 
    let newDiv = document.getElementById("libraryDiv");
 
    let newContent = document.createTextNode(userInputBooktitle + ", by " + userInputAuthor + ", " + userInputPages + " pages long.")
 
    newDiv.appendChild(newContent);
 
    /*const currentDiv = document.getElementById("libraryDiv");
    currentDiv.appendChild(newDiv) */
    }


function bookDisplayText (){

    let text = ""

    for ( i = 0 ; i< books.length ; i++) {
        text += "<div>" + books[i].name + ", by " + books[i].author + ", " +books[i].pages + " pages long. " + "</div>"
    }

    document.getElementById("libraryDiv").innerHTML = text
}




function ascendingAlphabeticalTitle (){
/*sort books alphebetically ascending
 
write out in plain text the book

change inner html to match the the updated list*/ 
    function compare( a, b ) {
        if ( a.name < b.name ){
        return -1;
        }
        if ( a.name > b.name ){
        return 1;
        }
        return 0;
    }
    
    books.sort( compare );

    bookDisplayText()
}


function descendingAlphabeticalTitle (){
        function compare( a, b ) {
            if ( a.name < b.name ){
            return 1;
            }
            if ( a.name > b.name ){
            return -1;
            }
            return 0;
        }
        books.sort( compare );
        bookDisplayText()
    }

    function bookLengthFunction (){
        function compare( a, b ) {
          return b.pages - a.pages
        }
        books.sort( compare );
        bookDisplayText()
    }
 
 
class Book{
    constructor(name, author, pages){
        this.name = name
        this.author = author
        this.pages = pages
 
    }
 
/* upperCaseName(){
     return this.name.toUpperCase()
    } */
name
}
 
let jurrassicPark = new Book("Jurassic Park","Michael Criton",459)
let harryPotter = new Book("Harry Potter", "JKR", 480)
let gameOfThrones = new Book("Game of Thrones", "JRRM", 10000)

let books = [
    jurrassicPark,
    harryPotter,
    gameOfThrones,

]
 
 
 
 
 
 
 
 
 
/* let myLibrary = [
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
 
 
 
 
function submitBook(e) {
    e.preventDefault();
    console.log(document.getElementById("bookForm").elements['bookTitle'].value)
  }
 
 
 
 
const userInputBook = document.querySelector("#bookTitle")
 
const submitButton = document.querySelector("#submitButton")
 
 
// submitButton.addEventListener('click', () => {
//     document.getElementById("libraryDiv").innerText = "${userInputBook.value}";
// })
 
 
 
 
 
 
 
window.addEventListener("load", displayLibrary);
 
 
 
const form  = document.getElementById('bookForm');
 
function returnTitle() {
var title = form.elements['bookTitle']
var userInputTitle = title.value
console.log(userInputTitle)
}
 
// document.getElementById("bookForm").addEventListener('submit', returnTitle);
 
 
 
 
 
 
<!--
 
    <!--    <h1>Library App</h1>
    <div class="buttonDiv">
        <button type="button" id="toggleButton" onclick="displayPopup()">Click here to add a book!</button>
    </div>
   
    <div class="popup">
        <span class="popuptext" id="myPopup"> -->
 
            <div id="bookForm">
                <label for="bookTitle">Book Title</label>
                <input type="text" id="bookTitle" name="bookTitle">
 
                <label for="author">Author</label>
                <input type="text" id="author" name="author">
 
                <label for="pages">How many Pages?</label>
                <input type="number" id="pages" name="pages"><br>
               
                <input type="radio" id="haveRead" name="readquery" value="haveRead">
                <label for="haveRead">Read</label><br>
               
                <input type="radio" id="notRead" name="readquery" value="notRead">
                <label for="notRead">Not Read</label><br>
               
                <!-- <input type="submit" id="submitButton" onclick="submitBook()" value="Submit"> -->
                <button onclick="submitBook">save</button>
 
            </div>
 
        <!-- </span>
      </div> -->
     
      */
