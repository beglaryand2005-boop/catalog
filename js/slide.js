let active = 0;
const slides = document.querySelectorAll('.slide')
document.querySelectorAll('.slide-move').forEach(move => {
    move.onclick = function(){
        slides[active].classList.remove('active-slide')

        if(move.classList.contains('move-left')){
            active -= 1
        }
        else{
            active += 1;
        }

        if(active === slides.length){
            active = 0
        }
        if(active === -1){
            active = slides.length - 1
        }
        slides[active].classList.add('active-slide')

    }

})