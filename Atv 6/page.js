let imgs = document.querySelectorAll('img')

imgs.forEach((item)=>{
    let widthImg = item.width 
    let heightImg = item.height

    item.src = 'https://thumbs.dreamstime.com/z/macaco-gritando-31723797.jpg'
    item.height = heightImg
    item.width = widthImg
})

const counterImg = document.createElement('h1')
counterImg.textContent = 'Há ' + imgs.length + ' imagens'
counterImg.style.backgroundColor= 'black'
counterImg.style.color = 'white'
counterImg.style.textAlign = 'center'
document.body.insertBefore(counterImg, document.body.firstChild)