// Dark mode
if(!localStorage.getItem('darkMode')){
    localStorage.setItem('darkMode', 0);
}

if(localStorage.getItem('darkMode') == 1){
    document.querySelector(':root').style.setProperty('--barMain', '#2B2C37');
    document.querySelector(':root').style.setProperty('--boardHoverBg', '#FFF');
    document.querySelector(':root').style.setProperty('--border', '#3E3F4E');
    document.querySelector(':root').style.setProperty('--main', '#20212C');
    document.querySelector(':root').style.setProperty('--titleColor', '#FFF');
}
else{
    document.querySelector(':root').style.setProperty('--barMain', '#FFF');
    document.querySelector(':root').style.setProperty('--boardHoverBg', '#E4EBFA');
    document.querySelector(':root').style.setProperty('--border', '#E4EBFA');
    document.querySelector(':root').style.setProperty('--main', '#F4F7FD');
    document.querySelector(':root').style.setProperty('--titleColor', '#000112');
}

// Sidebar
if(!localStorage.getItem('sidebarMode')){
    localStorage.setItem('sidebarMode', 1);
}

/*
if(localStorage.getItem('sidebarMode') == 0){
    document.getElementById('board').classList.add('hidden');
    document.getElementById('eyeIcon').classList.add('eyeHidden');
    document.getElementById('eyeIcon').innerHTML = '<path d="M15.815 4.434A9.055 9.055 0 0 0 8 0 9.055 9.055 0 0 0 .185 4.434a1.333 1.333 0 0 0 0 1.354A9.055 9.055 0 0 0 8 10.222c3.33 0 6.25-1.777 7.815-4.434a1.333 1.333 0 0 0 0-1.354ZM8 8.89A3.776 3.776 0 0 1 4.222 5.11 3.776 3.776 0 0 1 8 1.333a3.776 3.776 0 0 1 3.778 3.778A3.776 3.776 0 0 1 8 8.89Zm2.889-3.778a2.889 2.889 0 1 1-5.438-1.36 1.19 1.19 0 1 0 1.19-1.189H6.64a2.889 2.889 0 0 1 4.25 2.549Z" fill="#FFF"/>';
}
*/