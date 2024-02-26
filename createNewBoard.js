// Show/hide create new board window
document.getElementsByClassName('topSide')[0].getElementsByClassName('add')[0].addEventListener('click', function (){
    document.getElementById('blur').style.display = 'block';
    document.getElementById('boardWindow').style.display = 'flex';
});

document.getElementById('blur').addEventListener('click', function (){
    document.getElementById('blur').style.display = 'none';
    document.getElementById('boardWindow').style.display = 'none';
});

var columns = document.getElementById('columns');
var column = document.createElement('div')
column.classList.add('column');
column.innerHTML = '' +
'<input class="boardColumn" placeholder="Todo">' +
'<svg onclick="removeColumn(this)" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>';

// Add new column
document.getElementById('addNewColumn').addEventListener('click', function (){
    var clone = column.cloneNode(true);
    columns.append(clone);
});

function removeColumn(x){
    x.parentNode.remove();
}

// Add new board
document.getElementById('createNewBoard').addEventListener('click', function (){
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
    drawBoard(numberOfBoards);
    selectBoard(numberOfBoards);

    for(var i = 0; i < document.getElementById('boardWindow').getElementsByTagName('input').length; i++){
        document.getElementById('boardWindow').getElementsByTagName('input')[i].value = '';
    }
});

// Show hide top bar options
document.getElementById('options').getElementsByTagName('span')[0].addEventListener('click', function (){
    if(document.getElementById('option').style.display == 'block'){
        document.getElementById('option').style.display = 'none';
    }
    else document.getElementById('option').style.display = 'block';
});