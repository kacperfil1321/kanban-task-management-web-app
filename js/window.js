// WINDOW COMMON PART
// Show hide top bar options
document.getElementById('options').getElementsByTagName('span')[0].addEventListener('click', function (){
    if(document.getElementById('option').style.display == 'block'){
        document.getElementById('option').style.display = 'none';
    }
    else document.getElementById('option').style.display = 'block';
});

// Show/hide window
// board
document.getElementsByClassName('topSide')[0].getElementsByClassName('add')[0].addEventListener('click', function (){
    document.getElementById('blur').style.display = 'block';
    document.getElementById('boardWindow').style.display = 'flex';
});

// task
document.getElementById('addNewTask').addEventListener('click', function (){
    document.getElementById('blur').style.display = 'block';
    document.getElementById('taskWindow').style.display = 'flex';
});

document.getElementById('blur').addEventListener('click', function (){
    document.getElementById('blur').style.display = 'none';
    document.getElementById('boardWindow').style.display = 'none';
    document.getElementById('taskWindow').style.display = 'none';
    document.getElementById('deleteWindow').style.display = 'none';
});

// Remove column/subtask
function removeColumn(x, y){
    y.parentNode.remove();
    if(x == 0){
        if(document.getElementById('columns').getElementsByClassName('column').length == 0){
            document.getElementById('columns').getElementsByClassName('subtitle')[0].style.display = 'none';
        }
    }
    else{
        if(document.getElementById('subtasks').getElementsByClassName('subtask').length == 0){
            document.getElementById('subtasks').getElementsByClassName('subtitle')[0].style.display = 'none';
        }
    }
}

// Remove error class from input
function checkInput(x){
    if(x.value.length > 0){
        x.classList.remove('error');
    }
}

// BOARD
var columns = document.getElementById('columns');
var column = document.createElement('div')
column.classList.add('column');
column.innerHTML = '' +
'<div class="input">' +
'   <input class="boardColumn" placeholder="Todo" oninput="checkInput(this)">' +
'   <span class="errorText">Can\'t be empty</span>' +
'</div>' +
'<svg onclick="removeColumn(0, this)" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>';

// Add new column
document.getElementById('addNewColumn').addEventListener('click', function (){
    if(document.getElementById('columns').getElementsByClassName('column').length == 0){
        document.getElementById('columns').getElementsByClassName('subtitle')[0].style.display = 'block';
    }
    var clone = column.cloneNode(true);
    columns.append(clone);
});

// Add new board
document.getElementById('createNewBoard').addEventListener('click', function (){
    var input = document.getElementById('boardWindow').getElementsByTagName('input');
    for(var i = 0; i < input.length; i++){
        if(input[i].value.length == 0){
           input[i].classList.add('error');
           var errorBoard = 1;
        }
    }

    if(errorBoard != 1){
        var numberOfBoards = parseInt(localStorage.getItem('numberOfBoards')) + 1;
        localStorage.setItem('numberOfBoards', numberOfBoards);
        localStorage.setItem('board' + numberOfBoards, document.getElementById('boardName').value);
    
        var boardColumn = document.getElementsByClassName('boardColumn');
    
        for(var i = 0; i < boardColumn.length; i++){
            localStorage.setItem('board' + numberOfBoards + 'column' + i, boardColumn[i].value);
        }
    
        document.getElementById('blur').style.display = 'none';
        document.getElementById('boardWindow').style.display = 'none';
    
        document.getElementById('numberOfBoards').innerText = numberOfBoards;
        localStorage.setItem('activeBoard', numberOfBoards);
        drawBoardList(numberOfBoards);
        selectBoard(numberOfBoards);
    
        document.getElementById('boardName').value = '';
        document.getElementById('columns').innerHTML = '' +
        '<div class="subtitle">Board Columns</div>' +
        '<div class="column">' +
          '<div class="input">' +
            '<input class="boardColumn" placeholder="Todo" oninput="checkInput(this)">' +
            '<span class="errorText">Can\'t be empty</span>' +
          '</div>' +
          '<svg onclick="removeColumn(this)" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>' +
        '</div>';
    }
});

// TASK
var subtasks = document.getElementById('subtasks');
var subtask = document.createElement('div')
subtask.classList.add('subtask');
subtask.innerHTML = '' +
'<div class="input">' +
'   <input placeholder="e.g. Make coffee" oninput="checkInput(this)">' +
'   <span class="errorText">Can\'t be empty</span>' +
'</div>' +
'<svg onclick="removeColumn(1, this)" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>';

// Dropdown and select status
document.getElementById('status').addEventListener('click', function(){
    if(document.getElementById('statusList').style.display == 'none'){
        document.getElementById('status').style.borderColor = '#635FC7';
        document.getElementById('statusList').style.display = 'block';
    }
    else{
        document.getElementById('status').style.borderColor = '';
        document.getElementById('statusList').style.display = 'none';
    }
});

var selectedStatus = 0;

function statusSelectColumn(x){
    selectedStatus = x;
    document.getElementById('status').getElementsByClassName('input')[0].innerText = localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column' + x);
}

// Add new subtask
document.getElementById('addNewSubtask').addEventListener('click', function (){
    if(document.getElementById('subtasks').getElementsByClassName('subtask').length == 0){
        document.getElementById('subtasks').getElementsByClassName('subtitle')[0].style.display = 'block';
    }
    var clone = subtask.cloneNode(true);
    subtasks.append(clone);
});

// Add new task
document.getElementById('createTask').addEventListener('click', function (){
    var input = document.getElementById('taskWindow').getElementsByTagName('input');
    for(var i = 0; i < input.length; i++){
        if(input[i].value.length == 0){
           input[i].classList.add('error');
           var errorTask = 1;
        }
    }

    if(errorTask != 1){
        var activeBoard = localStorage.getItem('activeBoard');
        var taskNumber = document.getElementById('board').getElementsByClassName('column')[selectedStatus].getElementsByClassName('title')[0].dataset.value;

        localStorage.setItem('board' + activeBoard + 'column' + selectedStatus + 'task' + taskNumber, document.getElementById('taskName').value);
        localStorage.setItem('board' + activeBoard + 'column' + selectedStatus + 'task' + taskNumber + 'description', document.getElementById('taskDescription').value);
    
        var subtaskInput = document.getElementsByClassName('subtaskInput');
    
        for(var i = 0; i < subtaskInput.length; i++){
            localStorage.setItem('board' + activeBoard + 'column' + selectedStatus + 'task' + taskNumber + 'subtask' + i, subtaskInput[i].value);
        }
    
        document.getElementById('blur').style.display = 'none';
        document.getElementById('taskWindow').style.display = 'none';
    
        selectBoard(activeBoard);
    
        // TODO wyczyszczenie inputów
        /*
        document.getElementById('boardName').value = '';
        document.getElementById('columns').innerHTML = '' +
        '<div class="subtitle">Board Columns</div>' +
        '<div class="column">' +
          '<div class="input">' +
            '<input class="boardColumn" placeholder="Todo" oninput="checkInput(this)">' +
            '<span class="errorText">Can\'t be empty</span>' +
          '</div>' +
          '<svg onclick="removeColumn(this)" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>' +
        '</div>';
        */
    }
});