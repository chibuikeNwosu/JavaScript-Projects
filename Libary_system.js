// Understand the tasks and their requirements.

/* - Task 1 & 2. How do we add books & authors to the libary ? - Ans - we use the (Array.push()) method. but we are adding objects. since the books & authors contain additional information.
 */

const libary = []; // This is to store the books. hmm i wonder if i can store the authors here too? - nahh 🤠😭
const authors = []; // This is to store the authors and the list of books the have written.

function addBooks(bookLibary) {
  libary.push(bookLibary);
}

function addAuthors(authorsLibary) {
  authors.push(authorsLibary);
}

/* - Task 3 - How do we borrow books? - well the idea here is to put in the name of the book you want to borrow and then get it from the array (The array will no longer contain the book in this case). so i'm guessing we need to check if the book is available first of all(using conditional statement) and then remove it from the object in the array. 

 - SO WE ARE WORKING WITH.
 - objects - that is accessing them
 - loops - to scan for the book in the array - might not need them
 - if - else - satement - to handele situations like check availability & and return message if not available.
*/

const borrowedBooks = [];

function borrowBooks(title) {
  const book = libary.find((book) => book.title === title);
  if (book !== undefined) {
    console.log(`${title} is available.`);
    const index = libary.findIndex((book) => book.title === title);
    if (index !== -1) {
      const borrowedBook = libary.splice(index, 1);
      borrowedBooks.push(borrowedBook);
      console.log(`You have sucessfully borrowed ${title}`);
    }
  } else {
    console.log(`${title} is not available.`);
  }
}

/* - Task 4 - How do we return borrowed books ? - well we have to find out if the book was in the array in the first place. How do we do that? by checking if the book existed in the borrowedBooks array in the first place. the adding the book back into the array.
 */

function returnBook(title) {
  const index = borrowedBooks.findIndex((book) => book.title === title);
  if (index !== undefined) {
    const returnedBook = borrowedBooks.splice(index, 1);
    libary.push(returnedBook);
    console.log(`You have sucessfully retruned ${title}`);
  } else {
    console.log(`Book already exist in the libary or was not borrowed`);
  }
}

function viewBooks() {
  for (let i = 0; i < libary.length; i++) {
    console.log(`${libary[i]}`);
  }
}

function searchForBooksByTitle(title) {
  const byTitle = libary.find((book) => book.title === title);
  if (byTitle !== undefined) {
    console.log(`Your book ${title} was found`, byTitle);
  } else {
    console.log(`${title} not found`);
  }
}

function serachBookByAuthor(author) {
  const byAuthor = authors.find((book) => book.author === author);
  if (byAuthor !== undefined) {
    console.log(` ${author} published`);
  }
}
//TODO
