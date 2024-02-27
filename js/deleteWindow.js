document.getElementById('delete').addEventListener('click', function (){
    if(this.innerText == 'Delete Board'){
        document.getElementById('deleteWindow').getElementsByClassName('title')[0].innerText = 'Delete this board?';
        document.getElementById('deleteWindow').getElementsByClassName('subtitle')[0].innerText = 'Are you sure you want to delete the \'' + localStorage.getItem('board' + localStorage.getItem('activeBoard')) + '\' board? This action will remove all columns and tasks and cannot be reversed.';
    }
    // else for task
    document.getElementById('blur').style.display = 'block';
    document.getElementById('deleteWindow').style.display = 'flex';

    if(document.getElementById('option').style.display == 'block'){
        document.getElementById('option').style.display = 'none';
    }
    else document.getElementById('option').style.display = 'block';
});

document.getElementById('deleteWindowDelete').addEventListener('click', function (){
    localStorage.removeItem('board' + localStorage.getItem('activeBoard'));
    localStorage.setItem('numberOfBoards', parseInt(localStorage.getItem('numberOfBoards')) - 1);

    for(var i = 1; i < parseInt(localStorage.getItem('numberOfBoards')) + 1; i++){
        if(!localStorage.getItem('board' + i)){
            localStorage.setItem('board' + i, localStorage.getItem('board' + (i + 1)));
            localStorage.removeItem('board' + (i + 1));
        }
    }

    document.getElementById('numberOfBoards').innerText = localStorage.getItem('numberOfBoards');
    document.getElementById('boards').innerHTML = '';
    for(var i = 0; i < localStorage.getItem('numberOfBoards'); i++){
        drawBoard(i + 1);
    }

    if(localStorage.getItem('numberOfBoards') > 0){
        localStorage.setItem('activeBoard', 1);
        selectBoard(1);
    }
    else{
        localStorage.setItem('activeBoard', 0);
        selectBoard(0);
    }

    document.getElementById('blur').style.display = 'none';
    document.getElementById('deleteWindow').style.display = 'none';
});

document.getElementById('deleteWindowCancel').addEventListener('click', function (){
    document.getElementById('blur').style.display = 'none';
    document.getElementById('deleteWindow').style.display = 'none';
})