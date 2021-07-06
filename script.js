// const q = document.querySelector('#Q')
// const w = document.querySelector('#W')
// const e = document.querySelector('#E')
// const a = document.querySelector('#A')
// const s = document.querySelector('#S')
// const d = document.querySelector('#D')
// const z = document.querySelector('#Z')
// const x = document.querySelector('#X')
// const c = document.querySelector('#C')

let h1 = document.getElementById('keyplayed')
h1.innerText = ''


const btns = document.querySelectorAll('button')

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
        let sound = document.querySelector(`#${e.target.innerText}`)
        sound.play()
        btns[i].classList.add('active')
        h1.innerText = `${e.target.innerText} is played`
        setTimeout(() => {
            btns[i].classList.remove('active')
            h1.innerText = ''
        }, 500);
    })
}

document.addEventListener('keydown', (e) => {
    let key = e.key.toUpperCase()
    
    if(key == 'Q' || key == 'W' || key == 'E' || key == 'A' || key == 'S' || key == 'D' || key == 'Z' || key == 'X' || key == 'C') {
        let sound = document.querySelector(`#${key}`)
        sound.play()
        let button = document.querySelector(`.${key.toLowerCase()}`)
        button.classList.add('active')
        h1.innerText = `${key} is played`
        setTimeout(() => {
            button.classList.remove('active')
            h1.innerText = ''
        }, 500);
    }

})
