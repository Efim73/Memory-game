let container = document.getElementsByClassName('container')[0]
let images=[]
let a = [1,2,3,4,5,6,7,8,9]
let counter=0;
let pair = [];


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
    counter++;
    pair.push(img)
    img.style.pointerEvents='none'
    if(counter==2){

        if(pair[0].src==pair[1].src){
            console.log('win');
            counter=0;
            pair=[];

        }
        else{
            toggleCards()

            
            setTimeout(function(){
                pair[0].src='рубашка.webp'
                pair[1].src='рубашка.webp'
                pair=[];
                counter=0;
                toggleCards();
            },1000)
        }
    }
    // img.src='0 ('+Math.floor(Math.random()*12+1)+').jpg';

}
for(let i = a.length-1; i>0; i--){
    let randomNumber = Math.floor(Math.random()*(i+1))
    let vremenaya = a[i]
    a[i]=a[randomNumber]
    a[randomNumber]=vremenaya;
}
function toggleCards(){
        let cards=  container.children
        console.log(cards);  
        for(let card of cards){
            if(counter==2){

                card.style.pointerEvents='none'
            }
            else{
                card.style.pointerEvents='auto'

            }
        }
}




