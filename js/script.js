const burger = document.querySelector('.burger');
const navLink = document.querySelector('.header__link');
const linkNav = document.querySelectorAll('.nav-link');
const blockText = document.querySelector('.block-text');

function closeMenu(){
    burger.classList.remove('active');
    navLink.classList.remove('active');
    document.body.style.overflow = 'scroll';
}

linkNav.forEach((item) =>{
    item.addEventListener('click', closeMenu);
})

function openMenu(){
   let open = burger.classList.toggle('active');
    navLink.classList.toggle('active');
    blockText.classList.toggle('active');
    if(open){
        document.body.style.overflow = 'hidden';
    }if(!open){
        document.body.style.overflow = 'scroll';
    }
}

burger.addEventListener('click', openMenu);


const header = document.querySelector('.header-header');

window.addEventListener('scroll', ()=>{
    let scrollDistance = window.scrollY;
  
    if(scrollDistance >= 80){
      header.classList.add('header-fixed');
    }else{
      header.classList.remove('header-fixed');
    }
  })


const windowOne = document.querySelector('.info__content-left');
const windowTwo = document.querySelector('.info__content-right');

function magic(){
  windowOne.classList.add('active');
  windowTwo.classList.add('active');
}

document.addEventListener("DOMContentLoaded", magic);


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }else{
      change.target.classList.remove('element-show');
    }
  });
}
let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
};

let swiper = new Swiper(".swiper1",{
    // spaceBetween: 30,
  
    centerSlides: 'true',
    fade: 'true',
    breakpoints: {
        320: {
            slidesPerView: 1,
            centerSlides: 'true',
            loop: true,
        },
        950: {
            slidesPerView: 2,
            loop: true,
        },
        1095: {
            slidesPerView: 4,
            loop: true,
        },
        1290:{
          slidesPerView: 5,
        }
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
     
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }

  });


// tabs

const tabsBtn = document.querySelectorAll('.swiper-btn');
const tabsItems = document.querySelectorAll('.works__content')

tabsBtn.forEach(function(item){
  item.addEventListener('click', function(){
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
   

    tabsBtn.forEach(function(item){
      item.classList.remove('active')
    });

    tabsItems.forEach(function(item){
      item.classList.remove('active')
    });

    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  })
})
