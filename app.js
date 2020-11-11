const currentImage = document.querySelector('#image')
const images = ['img/pilt1.jpg', 'img/pilt2.jpg', 'img/pilt3.jpg', 'img/pilt4.jpg'];
function changeImage(){
    console.log("Hello from script file");
    let rnd = Math.floor(Math.random() * images.length);
    currentImage.src = images[rnd];
    console.log(rnd);

}