function selectBoard(x){
    if(x == 0){
        document.getElementById('titleBar').getElementsByClassName('title')[0].innerText = '';
    }
    else{
        localStorage.setItem('activeBoard', x);
        document.getElementById('titleBar').getElementsByClassName('title')[0].innerText = localStorage.getItem('board' + x);
        if(document.getElementsByClassName('active')[0]){
            document.getElementsByClassName('active')[0].classList.remove('active');
        }
        document.getElementsByClassName('board')[x - 1].classList.add('active');
    }
}

if(!localStorage.getItem('activeBoard')){
    if(localStorage.getItem('board1')){
        localStorage.setItem('activeBoard', 1);
        selectBoard(1);
    }
}
else selectBoard(localStorage.getItem('activeBoard'));