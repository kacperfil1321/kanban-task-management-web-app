document.getElementById('delete').addEventListener('click', function (){
    document.getElementById('blur').style.display = 'block';
    document.getElementById('deleteBoard').style.display = 'flex';

    if(document.getElementById('option').style.display == 'block'){
        document.getElementById('option').style.display = 'none';
    }
    else document.getElementById('option').style.display = 'block';
});

document.getElementById('deleteBoardDelete').addEventListener('click', function (){
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
});