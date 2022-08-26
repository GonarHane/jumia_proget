let image_slider= document.getElementsByClassName("image_slider");
/* console.log(image_slider); */
let etape = 0;
let nbr_img=image_slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function EnleverActiveImages () {
    for (let i=0; i<nbr_img; i++) {
        image_slider[i].classList.remove('active');
    }

}
suivant.addEventListener('click', function(){
    etape++;
    if(etape >= nbr_img){
        etape=0;
    }
    EnleverActiveImages();
    image_slider[etape].classList.add('active');

})  

precedent.addEventListener('click', function() {
    etape --;
    if (etape < 0){
        etape = nbr_img -1;
    }
        image_slider[etape].classList.add('active');
    
})
setInterval(function () {
    etape++;
    if(etape >= nbr_img){
        etape=0;
    }
    EnleverActiveImages();
    image_slider[etape].classList.add('active');
    
},3000)