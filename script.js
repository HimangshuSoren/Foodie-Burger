const scrollUp = document.querySelector('#go-to-top')
const horiontalLines = document.querySelector('#horisontal-lines-id')
const listOptions = document.querySelector('.nav-options')

horiontalLines.addEventListener('click',(e)=>{
    e.target.parentElement.classList.toggle('expand')

    if([...e.target.parentElement.classList].includes('expand')){
        setTimeout(()=>{
            listOptions.style = 'display:block !important;'
        },300)

    }
    else{
        listOptions.style = 'display:none !important;'

    }
    e.target.classList.toggle('position-lock')
})









scrollUp.addEventListener('click',()=>{
    window.scrollTo({
        top : -(document.body.scrollHeight),
        behavior: 'smooth'
    })
})