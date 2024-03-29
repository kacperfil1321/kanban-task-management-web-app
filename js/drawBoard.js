var board = document.getElementById('board');

function drawBoard(){
    board.innerHTML = '';
    document.getElementById('statusList').innerHTML = '';

    if(localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column0')){
        var column = 0;
        while(localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column' + column)){
            var task = 0, tasks= '';
            while(localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column' + column + 'task' + task)){
                var subtask = 0, subtasksComplete = 0;
                while(localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column' + column + 'task' + task + 'subtask' + subtask)){
                    if(localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column' + column + 'task' + task + 'subtask' + subtask + 'status') == 1){
                        subtasksComplete++;
                    }
                    subtask++;
                }
                tasks += '' +
                '<div class="task">' +
                '   <div class="taskTitle">' + localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column' + column + 'task' + task) + '</div>' +
                '   <div class="counter">' + subtasksComplete + ' of ' + subtask + ' subtasks</div>' +
                '</div>';
                task++;
            }
            board.innerHTML += '' +
            '<div class="column">' +
            '    <div class="title" data-value="' + task + '">' + localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column' + column) + ' (' + task + ')</div>' +
            '    <div class="tasks">' +
                    tasks +
            '    </div>' +
            '</div>';
            if(document.getElementById('status').getElementsByClassName('input')[0].innerText == ''){
                document.getElementById('status').getElementsByClassName('input')[0].innerText = localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column' + column);
            }
            document.getElementById('statusList').innerHTML += '<div class="listColumn" onclick="statusSelectColumn(' + column + ')">' + localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column' + column) + '</div>';
            column++;
        }
        board.innerHTML += '<div class="add">+ New Column</div>';
    }
    else{
        board.innerHTML = '' +
        '<div class="deafult">' +
        '   <div class="title">This board is empty. Create a new column to get started.</div>' +
        '   <button id="addNewColumn">+Add New Column</button>' +
        '</div>';
    }
}