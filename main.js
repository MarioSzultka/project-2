const header = document.querySelector("header")
const h1 = document.querySelector("h1");
const img = document.querySelector("img");
console.log(img.src)

let text = true;
let image = true;


const changeImage = () => {

  if (text && image) {
    text = !text
    header.textContent = "Pszczola"
    document.querySelector("img").src = "bee.jpg"
    image = !image;


  } else {
    text = !text
    header.textContent = "Balon"
    document.querySelector("img").src = "balloons.jpg"
    image = !image;



  }

}


header.addEventListener("click", changeImage)