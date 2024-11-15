"use strict";

// To-Do List App📃.

const userList = [];
const deletedItems = [];
const calendar = [];

// Create/Add a TO-DO list - This function takes of updating the list also.
function addList(userTask) {
  userList.push(userTask);
}

// Read/View list created.
function viewList() {
  if (userList.length === 0) {
    return `No item added yet`;
  }

  console.log("Created list 📃: ");
  for (let i = 0; i < userList.length; i++) {
    console.log(userList[i]);
  }
}

// Edit list.
function editList(task, editedTask) {
  const index = userList.indexOf(task);

  if (index !== -1) {
    // meaning book has been found. cuz of the index notation and stuff.
    userList.splice(index, 1);

    let updatedTask = editedTask; // I feel this was then not nessesary as i could have just used it directly in the splice method  instead of storing it in a variable. then again it dose help readablity.4

    userList.splice(index, 0, updatedTask);

    return "Your task has been updated sucessfully 📃🚀";
  } else {
    return "Task not found, try creating a new one";
  }
}

// Delete item from the list.
function deleteItems(task) {
  const index = userList.indexOf(task);

  if (index !== -1) {
    const deleteditems = userList.splice(index, 1);

    deletedItems.push(deleteditems);

    return "Item sucessfully deleted";
  } else {
    return "Cannot delete items that are not found";
  }
}

function viewDeletedItems() {
  for (let i = 0; i < deletedItems.length; i++) {
    console.log(deletedItems[i]);
  }
}

function restorDeleteditems(task) {
  const index = deletedItems.indexOf(task);

  if (index !== -1) {
    return "Item was not in the deleted list";
  } else {
    const [restoredItem] = deletedItems.splice(index, 1);
    for (let i = 0; i < restoredItem.length; i++) {
      userList.push(restoredItem[i]);
    }
    return "item has been sucessfully restored 🚀";
  }
}

function markAsFavourite(task, isFavourite) {
  const index = userList.indexOf(task);

  if (index !== -1) {
    if (isFavourite === "💖") {
      userList.splice(index, 1, task + isFavourite);
    } else {
      console.log("Cannot mark non-existing text as favorite"); // i dont know why this is not showing.
    }
  }
}

function setDateAndTime(task, date, time) {
  const index = userList.indexOf(task);

  if (index !== -1) {
    console.log("Your calendar 🗓️😤");
    calendar.push(
      `--> Task📃: ${task}. \n--> Date📅: ${date}. \n--> Time⌚: ${time}. \n`
    );
  } else {
    console.log("Task not found🤯");
  }
}

function viewCalendar() {
  for (let i = 0; i < calendar.length; i++) {
    console.log(calendar[i]);
  }
}

addList("Learn to dance the Furry dance");
addList("Write a film about a flying dog");
addList("Make a origami bird");
addList("Ride a bike");
addList("Go to costarica");

viewList();

console.log(editList("Ride a bike", "Ride a hores"));

viewList();

console.log(deleteItems("Learn to dance the Furry dance"));

viewList();
viewDeletedItems();

console.log(restorDeleteditems("Learn to dance the Furry dance"));

viewList();

markAsFavourite("Go to costarica", "💖");

viewList();

setDateAndTime("Make a origami bird", "Thursday", "11am - 1pm");

viewCalendar();

// ADD MORE FUNCTIONS.
