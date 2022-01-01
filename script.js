const harmburger = document.querySelector('.harmburger')
const ul = document.getElementById('ul')

harmburger.addEventListener('click', ()=>{
    harmburger.classList.toggle('active')
    ul.classList.toggle('active')
})

document.querySelectorAll('.dropbtn').forEach(n => n.addEventListener('click', () => {
    harmburger.classList.remove('active')
    ul.classList.remove('active')
}))