// slider üçün şəkilləri array-də daxil et //
let images = [
    'image1.png', 'image2.png', 'image3.png','image4.png'
]
let i = 0;

//"canvas" id-li div-i seç //
let canvas = document.getElementById('canvas');
// "canvas" id-li divin bg image-ni array-dən seç və tətbiq et //
canvas.style.background = `url(./images/${images[0]})`

//şəkilləri dəyişmək üçün "arrow" class-lı div-ləri seç //
let arrows = document.querySelectorAll('.arrow');

// hər arrow üçün funksiya //
arrows.forEach(function(arrow){
    arrow.addEventListener('click', function(e){

                if (e.target.id === "left"){
            //click olunan icon "left" id-lidirsə i-nin dəyərini 1 vahid azalt //
            i--;
            if (i < 0){
                i = images.length -1;
            }
            // i-nin aldığı dəyərə uyğun yerdə duran şəkli bg image olaraq təyin et //
            canvas.style.background = `url(./images/${images[i]})`;
        } else if (e.target.id === "right") {
            //click olunan icon "right" id-lidirsə i-nin dəyərini 1 vahid artır //
            i++;
            if (i >= images.length ){
                i = 0;
            }
            // i-nin aldığı dəyərə uyğun yerdə duran şəkli bg image olaraq təyin et
            canvas.style.background = `url(./images/${images[i]})`;
        }
    })
});
    
