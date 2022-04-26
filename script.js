let container = document.getElementsByClassName('container')[0]
let images=[]
let a = [1,2,3,4,5,6,7,8,9]



for(let i=1; i<13; i++){
    images.push('0 ('+i+').jpg')
    images.push('0 ('+i+').jpg')
}
for(let i=0; i<24; i++){
    let img = document.createElement('img')
    img.src='рубашка.webp'
    img.onclick=function(event){
        flipImage(event.target, images[i]);
        
    }
    container.appendChild(img)

}
function flipImage(img, image){
    img.src=image;

    // img.src='0 ('+Math.floor(Math.random()*12+1)+').jpg';

}
for(let i = a.length-1; i>0; i--){
    let randomNumber = Math.floor(Math.random()*(i+1))
    let vremenaya = a[i]
    a[i]=a[randomNumber]
    a[randomNumber]=vremenaya;
}





