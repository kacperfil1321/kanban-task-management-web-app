var board = document.getElementById('board');

function drawBoard(){
    board.innerHTML = '';
    if(localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column0')){
        var column = 0;
        while(localStorage.getItem('board' + localStorage.getItem('activeBoard') + 'column' + column)){
            board.innerHTML += '' +
            '<div class="column">' +
            '    <div class="title">Todo (4)</div>' +
            '    <div class="tasks">' +
            '       <div class="task">' +
            '           <div class="taskTitle">Build UI for onboarding flow</div>' +
            '           <div class="counter">0 of 3 subtasks</div>' +
            '       </div>' +
            '       <div class="task">' +
            '           <div class="taskTitle">Build UI for onboarding flow</div>' +
            '           <div class="counter">0 of 3 subtasks</div>' +
            '       </div>' +
            '    </div>' +
            '</div>';
        }
    }
    else{
        //deafult
    }
}