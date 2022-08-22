let myLibrary = [{title:"Jurassic Park", author:"Michael Criton", pages: 458, read: true}, {title:"Harry Potter",author:"JKR", pages:315, read: true}];


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
    }


function displayLibrary () {

    let contents = document.getElementById("bookList").innerHTML

    for (let i=0; i < myLibrary.length; i++) {
        contents += myLibrary[i]
    }

    return contents
}


// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

document.addEventListener("load", displayLibrary);
