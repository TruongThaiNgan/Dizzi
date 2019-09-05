// header change background

const header = document.querySelector('.header');

window.addEventListener('scroll',()=>{
    if(window.pageYOffset>0){
        header.style.backgroundColor='#00d089';
    }
    else{
        header.style.backgroundColor='#00d08900';
    }
});

// icon menu

const icon_menu = document.querySelector('.icon_menu');
const menu_nav = document.querySelector('.menu_nav');
const next_ul = document.querySelector('.next_ul');
const list_pages = document.querySelector('.list_pages');
icon_menu.addEventListener('click',()=>{
    menu_nav.classList.toggle("menu_nav_active");
});

window.addEventListener('click',(event)=>{
    if(event.toElement === document.querySelector('.next_ul a')
    || event.toElement === document.querySelector('.next_ul a i')){
        list_pages.classList.add('list_pages_active');
        menu_nav.classList.add('h_300');
    }
    else{
        list_pages.classList.remove('list_pages_active');
        menu_nav.classList.remove('h_300');
    }
});

// project 

const nav_project = document.querySelector('.nav_project');
const nav_item = document.querySelectorAll('.nav_show');
const member1 =document.querySelectorAll('.member1');
const member2 =document.querySelectorAll('.member2');
const member3 =document.querySelectorAll('.member3');
var index_active_project = 0;

nav_project.addEventListener('click',(event)=>{
    switch (event.toElement) {
        case nav_item[0]:{
            un_dis_none(member1);
            un_dis_none(member2);
            un_dis_none(member3);
            nav_item[0].classList.add('nav_show_active');
            nav_item[index_active_project].classList.remove('nav_show_active');
            index_active_project = 0;
            break;
        }
        case nav_item[1]:{
            dis_none(member1);
            dis_none(member2);
            dis_none(member3);
            un_dis_none(member1);
            nav_item[1].classList.add('nav_show_active');
            nav_item[index_active_project].classList.remove('nav_show_active');
            index_active_project = 1;
            break;
        }
        case nav_item[2]:{
            dis_none(member1);
            dis_none(member2);
            dis_none(member3);
            un_dis_none(member2);
            nav_item[2].classList.add('nav_show_active');
            nav_item[index_active_project].classList.remove('nav_show_active');
            index_active_project = 2;
            break;
        }
        case nav_item[3]:{
            dis_none(member1);
            dis_none(member2);
            dis_none(member3);
            un_dis_none(member3);
            nav_item[3].classList.add('nav_show_active');
            nav_item[index_active_project].classList.remove('nav_show_active');
            index_active_project = 3;
            break;
        }
        default:
            break;
    }
})

function dis_none(element) {
    for (let index = 0; index < element.length; index++) {
        element[index].classList.add('display_none');
    }
}

function un_dis_none(element) {
    for (let index = 0; index < element.length; index++) {
        element[index].classList.remove('display_none');
    }
}