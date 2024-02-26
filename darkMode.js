document.getElementById('toogle').addEventListener('click', change);

function change(){
    if(localStorage.getItem('darkMode') == 0){
        localStorage.setItem('darkMode', 1);
    }
    else{
        localStorage.setItem('darkMode', 0);
    }
    change2();
}

function change2(){
    if(localStorage.getItem('darkMode') == 1){
        document.getElementById('logo').getElementsByTagName('img')[0].src = 'assets/logo-light.svg';
        document.getElementById('toogle').getElementsByClassName('point')[0].style.left = '22px';
        document.querySelector(':root').style.setProperty('--barMain', '#2B2C37');
        document.querySelector(':root').style.setProperty('--boardHoverBg', '#FFF');
        document.querySelector(':root').style.setProperty('--border', '#3E3F4E');
        document.querySelector(':root').style.setProperty('--main', '#20212C');
        document.querySelector(':root').style.setProperty('--titleColor', '#FFF');
    }
    else{
        document.getElementById('logo').getElementsByTagName('img')[0].src = 'assets/logo-dark.svg';
        document.getElementById('toogle').getElementsByClassName('point')[0].style.left = '3px';
        document.querySelector(':root').style.setProperty('--barMain', '#FFF');
        document.querySelector(':root').style.setProperty('--boardHoverBg', '#E4EBFA');
        document.querySelector(':root').style.setProperty('--border', '#E4EBFA');
        document.querySelector(':root').style.setProperty('--main', '#F4F7FD');
        document.querySelector(':root').style.setProperty('--titleColor', '#000112');
    }
}

if(localStorage.getItem('darkMode') == 1){
    document.getElementById('logo').getElementsByTagName('img')[0].src = 'assets/logo-light.svg';
    document.getElementById('toogle').getElementsByClassName('point')[0].style.left = '22px';
}
else{
    document.getElementById('logo').getElementsByTagName('img')[0].src = 'assets/logo-dark.svg';
    document.getElementById('toogle').getElementsByClassName('point')[0].style.left = '3px';
}