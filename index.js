let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let userInputElement = document.getElementById("todoUserInput");
let clearTodoListElement = document.getElementById("clearListButton");
let searchBox = document.getElementById("search");
let menuButton = document.getElementById("menuButton");
let menuBar = document.getElementById("menuBar");
let homePage = document.getElementById("homePage");
let deletedNotesPage = document.getElementById("deletedNotesPage");
let archivedNotesPage = document.getElementById("archivedNotesPage");
let createNotesMenu = document.getElementById("createNotesMenu");
let archivedNotesMenu = document.getElementById("archivedNotesMenu");
let deletedNotesMenu = document.getElementById("deletedNotesMenu");
let deletedNotesListContainer = document.getElementById("deletedNotesListContainer");
let archivedNotesListContainer=document.getElementById("archivedNotesListContainer");
let myNotesMenu=document.getElementById("myNotesMenu");
let createNotePage=document.getElementById("createNotePage");
let clearDeletedListButton=document.getElementById("clearDeletedListButton");
clearDeletedListButton.onclick=function(){
    deletedNotesListContainer.textContent="";
    localStorage.removeItem("deletedTodoList");
};

createNotesMenu.onclick=function(){
    menuBar.classList.add("d-none");
    homePage.classList.remove("d-block");
    homePage.classList.add("d-none");
    deletedNotesPage.classList.remove("d-block");
    deletedNotesPage.classList.add("d-none");
    archivedNotesPage.classList.remove("d-block");
    archivedNotesPage.classList.add("d-none");
    createNotePage.classList.remove("d-none");
    createNotePage.classList.add("d-block");
}

myNotesMenu.onclick=function(){
    menuBar.classList.add("d-none");
    archivedNotesPage.classList.remove("d-block");
    archivedNotesPage.classList.add("d-none");
    deletedNotesPage.classList.remove("d-block");
    deletedNotesPage.classList.add("d-none");
    createNotePage.classList.remove("d-block");
    createNotePage.classList.add("d-none");
    homePage.classList.remove("d-none");
    homePage.classList.add("d-block");
}

menuButton.onclick = function() {
    menuBar.classList.toggle("d-none");
};

function getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null || parsedTodoList === undefined || parsedTodoList.length === 0 || parsedTodoList === "") {
        return [];
    } else {
        return parsedTodoList;
    }
}

function getDeletedTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("deletedTodoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null || parsedTodoList === undefined || parsedTodoList.length === 0 || parsedTodoList === "") {
        return [];
    } else {
        return parsedTodoList;
    }
}

function getArchivedTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("archivedTodoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null || parsedTodoList === undefined || parsedTodoList.length === 0 || parsedTodoList === "") {
        return [];
    } else {
        return parsedTodoList;
    }
}

let todoList = getTodoListFromLocalStorage();
let deletedTodosList = getDeletedTodoListFromLocalStorage();
let archivedTodosList=getArchivedTodoListFromLocalStorage();

function removeTodoPermanently(eachitem){
    let todoId="deleted"+eachitem.uniqueNo;
    let toRemoveElement=document.getElementById(todoId);
    deletedNotesListContainer.removeChild(toRemoveElement);
    const index=deletedTodosList.findIndex(function(eachitem){
        if(todoId==="deleted"+eachitem.uniqueNo){
            return true;
        }
    });
    deletedTodosList.splice(index,1);
    localStorage.setItem("deletedTodoList",JSON.stringify(deletedTodosList));
}

deletedNotesMenu.onclick = function() {
    homePage.classList.remove("d-block");
    homePage.classList.add("d-none");
    archivedNotesPage.classList.remove("d-block");
    archivedNotesPage.classList.add("d-none");
    menuBar.classList.remove("d-none");
    menuBar.classList.add("d-none");
    createNotePage.classList.remove("d-block");
    createNotePage.classList.add("d-none");
    deletedNotesPage.classList.remove("d-none");
    deletedNotesPage.classList.add("d-block");
    deletedNotesListContainer.textContent="";
    for (let eachitem of deletedTodosList) {
        let deletedNote = document.createElement("li");
        deletedNote.classList.add("deleted-note");
        deletedNote.id="deleted"+eachitem.uniqueNo;
        let deletedNoteText=document.createElement("p");
        deletedNoteText.textContent = eachitem.text;
        deletedNoteText.classList.add("deleted-note-text");
        deletedNote.appendChild(deletedNoteText);
        let deletedNoteRemoveButton=document.createElement("button");
        deletedNoteRemoveButton.textContent="X";
        deletedNoteRemoveButton.classList.add("x-icon");
        deletedNote.appendChild(deletedNoteRemoveButton);
        deletedNotesListContainer.appendChild(deletedNote);
        deletedNoteRemoveButton.onclick=function(){
            removeTodoPermanently(eachitem);
        };
}
};

function unarchiveNote(id){
    let element=document.getElementById("archived"+id);
    archivedNotesListContainer.removeChild(element);
    let index=archivedTodosList.findIndex(function(eachitem){
        if("archived"+id==="archived"+eachitem.uniqueNo){
            return true;
        }
    });
    let item=archivedTodosList[index];
    todoList.push(item)
    archivedTodosList.splice(index,1);
    localStorage.setItem("todoList",JSON.stringify(todoList));
    createAndAppendTodo(item);
    localStorage.setItem("archivedTodoList",JSON.stringify(archivedTodosList));
}

archivedNotesMenu.onclick=function(){
    homePage.classList.remove("d-block");
    homePage.classList.add("d-none");
    menuBar.classList.remove("d-block");
    menuBar.classList.add("d-none");
    createNotePage.classList.remove("d-block");
    createNotePage.classList.add("d-none");
    deletedNotesPage.classList.remove("d-block");
    deletedNotesPage.classList.add("d-none");
    archivedNotesPage.classList.remove("d-none");
    archivedNotesPage.classList.add("d-block", "archived-notes-page");
    archivedNotesListContainer.textContent="";
    for(let eachitem of archivedTodosList){
        let archivedElement=document.createElement("li");
        archivedElement.classList.add("archived-element");
        archivedElement.id="archived"+eachitem.uniqueNo;
        archivedNotesListContainer.appendChild(archivedElement);
        
        let archivedElementHeading=document.createElement("h1");
        archivedElementHeading.textContent=eachitem.text;
        archivedElementHeading.classList.add("archived-element-heading");
        archivedElement.appendChild(archivedElementHeading);
        
        let archivedElementButton=document.createElement("button");
        archivedElementButton.classList.add("archived-element-button");
        archivedElementButton.textContent="Unarchive Note";
        archivedElementButton.onclick=function(){
            unarchiveNote(eachitem.uniqueNo)
        }
        archivedElement.appendChild(archivedElementButton);
    }
};

function onTodoStatusChange(checkboxId, labelId, todoId) {
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");
    let todoObjectIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });
    if (todoObjectIndex >= 0) {
        if (todoList[todoObjectIndex].isChecked === true) {
            todoList[todoObjectIndex].isChecked = false;
        } else {
            todoList[todoObjectIndex].isChecked = true;
        }
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }
}

function onArchiveNote(todoId){
    let todoElement=document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
    let index=todoList.findIndex(function(eachitem){
        if(todoId==="todo"+eachitem.uniqueNo){
            return true;
        }
    });
    let todoItem=todoList[index];
    archivedTodosList.push(todoItem);
    todoList.splice(index,1);
    localStorage.setItem("archivedTodoList",JSON.stringify(archivedTodosList));
    localStorage.setItem("todoList",JSON.stringify(todoList));
}

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
    let deleteElementIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });
    if (deleteElementIndex >= 0) {
        let deletedElement = todoList[deleteElementIndex];
        let obj = {
            isChecked: deletedElement.isChecked,
            text: deletedElement.text,
            uniqueNo: deletedElement.uniqueNo
        };
        deletedTodosList.push(obj);
        todoList.splice(deleteElementIndex, 1);
        localStorage.setItem("deletedTodoList", JSON.stringify(deletedTodosList));
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }
}

clearTodoListElement.onclick = function() {
    localStorage.clear("todoList");
    todoItemsContainer.textContent = "";
};

function createAndAppendTodo(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.checked = todo.isChecked;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId, todoId);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label", "w-100");
    labelElement.textContent = todo.text;
    if (todo.isChecked === true) {
        labelElement.classList.add("checked");
    }
    labelContainer.appendChild(labelElement);

    let optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options-container");
    labelContainer.appendChild(optionsContainer);

    let deleteNoteButton = document.createElement("button");
    deleteNoteButton.classList.add("delete-note-button");
    deleteNoteButton.textContent = "Delete Note";
    deleteNoteButton.onclick = function() {
        onDeleteTodo(todoId);
    };
    optionsContainer.appendChild(deleteNoteButton);

    let archiveNoteButton = document.createElement("button");
    archiveNoteButton.classList.add("archive-note-button");
    archiveNoteButton.textContent = "Archive Note";
    archiveNoteButton.onclick=function(){
        onArchiveNote(todoId);
    }
    optionsContainer.appendChild(archiveNoteButton);
}

addTodoButton.onclick = function() {
    let userInputValue = userInputElement.value;
    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    } else {
        let newTodo = {
            text: userInputValue,
            uniqueNo: userInputValue,
            isChecked: false,
            createdDate:new Date()
        };
        todoList.push(newTodo);
        createAndAppendTodo(newTodo);
        userInputElement.value = "";
        localStorage.setItem("todoList", JSON.stringify(todoList));
        menuBar.classList.add("d-none");
        deletedNotesPage.classList.remove("d-block");
        deletedNotesPage.classList.add("d-none");
        archivedNotesPage.classList.remove("d-block");
        archivedNotesPage.classList.add("d-none");
        createNotePage.classList.remove("d-block");
        createNotePage.classList.add("d-none");
        homePage.classList.remove("d-none");
        homePage.classList.add("d-block");
    }
};

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

searchBox.addEventListener("input", function(event) {
    todoItemsContainer.textContent = "";
    let searchText = event.target.value;
    todoList.forEach((eachitem) => {
        if (eachitem.text.toLowerCase().includes(searchText.toLowerCase())) {
            createAndAppendTodo(eachitem);
        }
    });
});
