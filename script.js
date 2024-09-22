const scrollUp = document.querySelector('#go-to-top')
const horiontalLines = document.querySelector('#horisontal-lines-id')
const listOptions = document.querySelector('.nav-options')
const navBarContainer = document.querySelector('.navbar-container')
const listItems = document.querySelector('.list-items')
const overlay = document.querySelector('.overlay')

horiontalLines.addEventListener('click', (e) => {
    e.stopPropagation()
    e.target.parentElement.classList.toggle('expand')

    if ([...e.target.parentElement.classList].includes('expand')) {
        setTimeout(() => {
            listOptions.classList.remove('display-none-phone')
        }, 300)
        

    }
    else {
        listOptions.classList.add('display-none-phone')

    }
    e.target.classList.toggle('position-lock')
    document.body.classList.toggle('over-flow-hidden')
    overlay.classList.toggle('dis-block')
})

scrollUp.addEventListener('click', (e) => {
    e.stopPropagation()
    window.scrollTo({
        // top: -(document.body.scrollHeight),
        top:0,
        behavior: 'smooth'
    })
})

navBarContainer.addEventListener('click',(e)=>{
    e.stopPropagation()
})


window.addEventListener('click', () => {
    horiontalLines.parentElement.classList.remove('expand')
    horiontalLines.classList.remove('position-lock')
    listOptions.classList.add('display-none-phone')
    overlay.classList.remove('dis-block')
    document.body.classList.remove('over-flow-hidden')
})
listOptions.addEventListener('click', () => {
    horiontalLines.parentElement.classList.remove('expand')
    horiontalLines.classList.remove('position-lock')
    listOptions.classList.add('display-none-phone')
    document.body.classList.remove('over-flow-hidden')
    overlay.classList.remove('dis-block')
})