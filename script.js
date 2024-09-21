const scrollUp = document.querySelector('#go-to-top')
const horiontalLines = document.querySelector('#horisontal-lines-id')
const listOptions = document.querySelector('.nav-options')
const navBarContainer = document.querySelector('.navbar-container')
const listItems = document.querySelector('.list-items')

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
})

scrollUp.addEventListener('click', (e) => {
    e.stopPropagation()
    window.scrollTo({
        top: -(document.body.scrollHeight),
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
})
listOptions.addEventListener('click', () => {
    horiontalLines.parentElement.classList.remove('expand')
    horiontalLines.classList.remove('position-lock')
    listOptions.classList.add('display-none-phone')
})