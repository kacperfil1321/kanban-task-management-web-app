var subtasks = document.getElementById('subtasks');
var subtask = document.createElement('div')
subtask.classList.add('subtask');
subtask.innerHTML = '' +
'<div class="input">' +
'   <input placeholder="e.g. Make coffee" oninput="checkInput(this)">' +
'   <span class="errorText">Can\'t be empty</span>' +
'</div>' +
'<svg onclick="removeColumn(1, this)" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>';

// Add new column
document.getElementById('addNewSubtask').addEventListener('click', function (){
    if(document.getElementById('subtasks').getElementsByClassName('subtask').length == 0){
        document.getElementById('subtasks').getElementsByClassName('subtitle')[0].style.display = 'block';
    }
    var clone = subtask.cloneNode(true);
    subtasks.append(clone);
});