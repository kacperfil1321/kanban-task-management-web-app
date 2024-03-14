// Show/hide create new board window
document.getElementsByClassName('topSide')[0].getElementsByClassName('add')[0].addEventListener('click', function (){
    document.getElementById('blur').style.display = 'block';
    document.getElementById('boardWindow').style.display = 'flex';
});

document.getElementById('blur').addEventListener('click', function (){
    document.getElementById('blur').style.display = 'none';
    document.getElementById('boardWindow').style.display = 'none';
    document.getElementById('taskWindow').style.display = 'none';
    document.getElementById('deleteWindow').style.display = 'none';
});

var columns = document.getElementById('columns');
var column = document.createElement('div')
column.classList.add('column');
column.innerHTML = '' +
'<div class="input">' +
'   <input class="boardColumn" placeholder="Todo" oninput="checkInput(this)">' +
'   <span class="errorText">Can\'t be empty</span>' +
'</div>' +
'<svg onclick="removeColumn(this)" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>';

// Add new column
document.getElementById('addNewColumn').addEventListener('click', function (){
    if(document.getElementById('columns').getElementsByClassName('column').length == 0){
        document.getElementById('columns').getElementsByClassName('subtitle')[0].style.display = 'block';
    }
    var clone = column.cloneNode(true);
    columns.append(clone);
});

// Remove error class from input
function checkInput(x){
    if(x.value.length > 0){
        x.classList.remove('error');
    }
}

// Remove column
function removeColumn(x){
    x.parentNode.remove();
    if(document.getElementById('columns').getElementsByClassName('column').length == 0){
        document.getElementById('columns').getElementsByClassName('subtitle')[0].style.display = 'none';
    }
}

// Add new board
document.getElementById('createNewBoard').addEventListener('click', function (){
    var input = document.getElementById('boardWindow').getElementsByTagName('input');
    for(var i = 0; i < input.length; i++){
        if(input[i].value.length == 0){
           input[i].classList.add('error');
           var error = 1;
        }
    }

    if(error != 1){
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

// Show hide top bar options
document.getElementById('options').getElementsByTagName('span')[0].addEventListener('click', function (){
    if(document.getElementById('option').style.display == 'block'){
        document.getElementById('option').style.display = 'none';
    }
    else document.getElementById('option').style.display = 'block';
});