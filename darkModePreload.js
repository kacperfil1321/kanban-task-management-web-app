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