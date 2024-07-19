<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/5f59ca6ad3.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="todos-bg-container">
        <nav class="navbar" id="navbar">
            <p class="navbar-heading">Todo's</p>
            <button class="menu-buttton" id="menuButton">
                <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
            </button>
        </nav>
        <div class="mobile-menu-bg-container d-none" id="menuBar">
            <button class="menu-heading" id="myNotesMenu">
                <svg class="option-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                </svg>
             My Note's
            </button>
            <br/>
            <button class="menu-heading" id="createNotesMenu">
                <svg class="option-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                </svg>
                Create Note
            </button>
            <br />
            <button class="menu-heading" id="archivedNotesMenu">
                <svg class="option-icon" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z" />
                </svg>
                Archived Note's
            </button>
            <br />
            <button class="menu-heading" id="deletedNotesMenu">
                <svg class="option-icon" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
                Deleted Note's
            </button>
        </div>
        <div id="createNotePage" class="create-note-page d-none">
            <h1 class="create-task-heading">
                Create <span class="create-task-heading-subpart">New Task's</span>
            </h1>
            <input type="text" id="todoUserInput" class="todo-user-input" placeholder="Add tasks to be done?" />
            <button class="add-task-button btn btn-primary" id="addTodoButton">Add Task</button>
        </div>
        <div id="homePage" class="home-page">
            <div class="search-container">
                <h1 class="todo-items-heading">
                    My <span class="todo-items-heading-subpart">Task's</span>
                </h1>
                <input type="text" id="search" class="search-input" placeholder="Search Todos" />
            </div>
            <ul class="todo-items-container" id="todoItemsContainer"></ul>
            <button class="clear-list-button btn btn-danger" id="clearListButton">Clear List</button>
        </div>
        <div id="deletedNotesPage" class="d-none">
            <ul class="deleted-notes-list-container" id="deletedNotesListContainer"></ul>
            <div class="text-center">
                <button id="clearDeletedListButton" class="btn btn-danger">Clear List</button>
            </div>
        </div>
        <div id="archivedNotesPage" class="d-none">
            <ul class="archived-notes-list-container" id="archivedNotesListContainer"></ul>
        </div>
    </div>
</body>

</html>
