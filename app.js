const seedColor = document.getElementById("seed-color")
const mode = document.getElementById('mode')
const submitBtn = document.getElementById('btn')
const colorDiv = document.querySelector('.color-container')
const num = document.getElementById('0')
const footer = document.querySelector('.footer')
let hexColor = []



colorDiv.addEventListener('click', function(e){
    console.log(e.target.textContent)
})



function render(){
    for(let i = 0; i < hexColor.length; i++){
         document.getElementById(`${i}`).style.backgroundColor = hexColor[i]
         document.getElementById(`${i}`).innerHTML = `<div class="footer">${hexColor[i]}</div>`  
    }
   
}


submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    let hexValue = seedColor.value.substring(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${mode.value}`,{
        method: "GET"
        })
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.count; i++){
            hexColor[i] = data.colors[i].hex.value
        }
        render()
    })
})

