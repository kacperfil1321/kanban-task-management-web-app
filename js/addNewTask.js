document.getElementById('addNewTask').addEventListener('click', function (){
    document.getElementById('blur').style.display = 'block';
    document.getElementById('taskWindow').style.display = 'flex';
});

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