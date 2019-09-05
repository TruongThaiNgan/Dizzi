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

// introduction

const article_home = document.querySelectorAll('.special');
const section_intro = document.querySelector('.introduction');

window.addEventListener('click',(event)=>{
    if (event.toElement === article_home[0]
        || event.toElement.parentNode === article_home[0]
        || event.toElement.parentNode.parentNode === article_home[0]
        || event.toElement.parentNode.parentNode.parentNode === article_home[0]) {
            article_home[0].classList.add('special_active');
            article_home[1].classList.remove('special_active');
            article_home[2].classList.remove('special_active');    
        }
    else if(event.toElement === article_home[1]
        || event.toElement.parentNode === article_home[1]
        || event.toElement.parentNode.parentNode === article_home[1]
        || event.toElement.parentNode.parentNode.parentNode === article_home[1]){
            article_home[1].classList.add('special_active');
            article_home[0].classList.remove('special_active');
            article_home[2].classList.remove('special_active');
        }
    else if(event.toElement === article_home[2]
        || event.toElement.parentNode === article_home[2]
        || event.toElement.parentNode.parentNode === article_home[2]
        || event.toElement.parentNode.parentNode.parentNode === article_home[2]){
        article_home[2].classList.add('special_active');
        article_home[1].classList.remove('special_active');
        article_home[0].classList.remove('special_active');
    }
    else{
        article_home[2].classList.remove('special_active');
        article_home[1].classList.remove('special_active');
        article_home[0].classList.remove('special_active');
    }
});

// project 

const nav_project = document.querySelector('.nav_project');
const nav_item = document.querySelectorAll('.nav_show');
const img_project = document.querySelectorAll('.img_project img')
var index_active_project = 0;

nav_project.addEventListener('click',(event)=>{
    switch (event.toElement) {
        case nav_item[0]:{
            img_project[0].style.display = 'block';
            img_project[1].style.display = 'block';
            nav_item[0].classList.add('nav_show_active');
            nav_item[index_active_project].classList.remove('nav_show_active');
            index_active_project = 0;
            break;
        }
        case nav_item[1]:{
            img_project[0].style.display = 'block';
            img_project[1].style.display = 'none';
            nav_item[1].classList.add('nav_show_active');
            nav_item[index_active_project].classList.remove('nav_show_active');
            index_active_project = 1;
            break;
        }
        case nav_item[2]:{
            img_project[0].style.display = 'none';
            img_project[1].style.display = 'block';
            nav_item[2].classList.add('nav_show_active');
            nav_item[index_active_project].classList.remove('nav_show_active');
            index_active_project = 2;
            break;
        }
        default:
            break;
    }
})

// carousel
const body = document.body;
const btn_nav_ca = document.querySelectorAll('.btn_cir');
const list_carousel = document.querySelector('.list_ar_comment');
const btn1 = document.querySelector('#btn_cir_1');
const btn4 = document.querySelector('#btn_cir_4');
var index_btn_ca, isSmall;
var n;

check_width();
window.addEventListener('resize',()=>{
    check_width();
});
function check_width() {
    if (body.clientWidth<860) {
        index_btn_ca = 0;
        n = 4;
        showCarousel(index_btn_ca);
        btn1.style.display = 'inline-block';
        btn4.style.display = 'inline-block';
    } else {
        index_btn_ca = 1;
        n = 2;
        showCarousel(index_btn_ca);
        btn1.style.display = 'none';
        btn4.style.display = 'none';
    }
    
}


for (let index = 0; index < btn_nav_ca.length; index++) {
    const element = btn_nav_ca[index];
    element.addEventListener('click',()=>{
        btn_nav_ca[index_btn_ca].classList.remove('btn_cir_active');
        index_btn_ca = index;
        btn_nav_ca[index_btn_ca].classList.add('btn_cir_active');
        showCarousel(index_btn_ca);
    })
}

function showCarousel(i) {
    list_carousel.style.transform = 'translateX('+(152-(101*index_btn_ca))+'vw)';
}

setInterval(()=>{
    if (body.clientWidth<860) {
        n = 4;
    } else {
        n = 3;
    }    
    if(index_btn_ca <n-1){
        btn_nav_ca[index_btn_ca++].classList.remove('btn_cir_active');
        btn_nav_ca[index_btn_ca].classList.add('btn_cir_active');
        showCarousel(index_btn_ca);
    }
    else {
        btn_nav_ca[index_btn_ca].classList.remove('btn_cir_active');
        if (body.clientWidth<860){
            index_btn_ca = 0;
        }
        else {
            index_btn_ca = 1;
        }
        btn_nav_ca[index_btn_ca].classList.add('btn_cir_active');
        showCarousel(index_btn_ca);
    }
},1000);
