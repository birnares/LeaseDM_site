// connect with news-cars
const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach((element) => {
    element.addEventListener('click', openTab)
})

function openTab(e) {
    const tabTarget = e.currentTarget
    const btn = tabTarget.dataset.button
    
    tabItem.forEach((item) => {
        item.classList.remove('tabs__btn-item--active')
    })

    tabTarget.classList.add('tabs__btn-item--active')

    tabContent.forEach((item) => {
        item.classList.remove('tabs__content-item--active')
    })

    document.querySelector(`#${btn}`).classList.add('tabs__content-item--active')
} 

const menuBtn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu__list')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
})
