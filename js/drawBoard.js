var board = document.getElementById('board');

function drawBoard(){
    board.innerHTML = '';
    if(localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column0')){
        var column = 0;
        while(localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column' + column)){
            var task = 0, tasks= '';
            while(localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column' + column + 'task' + task)){
                var subtask = 0, subtasks = 0, subtasksComplete = 0;
                while(localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column' + column + 'task' + task + 'subtaskStatus' + subtask)){
                    if(localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column' + column + 'task' + task + 'subtaskStatus' + subtask) == 1){
                        subtasksComplete++;
                    }
                    subtasks++;
                }
                tasks += '' +
                '<div class="task">' +
                '   <div class="taskTitle">' + localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column' + column + 'task' + task) + '</div>' +
                '   <div class="counter">' + subtasksComplete + ' of ' + subtasks + ' subtasks</div>' +
                '</div>';
                task++;
            }
            board.innerHTML += '' +
            '<div class="column">' +
            '    <div class="title">Todo (' + task + ')</div>' +
            '    <div class="tasks">' +
            tasks +
            '    </div>' +
            '</div>';
            column++;
        }
    }
    else{
        //deafult
    }
}