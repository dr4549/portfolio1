// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight =header.getBoundingClientRect().height;
document.addEventListener('scroll',() =>{
    //Header에 페이지 아래로 스크롤시 다크 스타일링 적용
    if(window.scrollY > headerHeight ) {
        header.classList.add('header--dark');
    } else {
        header.classsList.remove('header--dark');
    }
})

//Home 섹션을 아래로 스크롤시 투명하게처리함
const home =document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll',()=> {
    console.log(1 - window.scroolY/ homeHeight);
    home.style.opacity = 1 - window.scroolY/ homeHeight;
});