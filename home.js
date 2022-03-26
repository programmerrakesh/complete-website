
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-button')];
const preBtn = [...document.querySelectorAll('.pre-button')];

productContainers.forEach((item, i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;
        
    })
    preBtn[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth;
        
    })
});


//shirt-section
const shirtContainers = [...document.querySelectorAll('.shirt-container')];
const nxtButton = [...document.querySelectorAll('.nxt-btn')];
const preButton = [...document.querySelectorAll('.pre-btn')];

shirtContainers.forEach((item, i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtButton[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;
        
    })
    preButton[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth;
        
    })
});


//shoe -section

const shoeContainers = [...document.querySelectorAll('.shoe-container')];
const nButton = [...document.querySelectorAll('.n-button')];
const pButton = [...document.querySelectorAll('.p-button')];

shoeContainers.forEach((item, i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nButton[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;
        
    })
    pButton[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth;
        
    })
});