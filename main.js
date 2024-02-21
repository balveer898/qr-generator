let input=document.querySelector("input")
let button =document.querySelector("button")
let img=document.querySelector("img")
let box=document.querySelector("box")
// console.log(img);

 async function getQr (){
    const response= await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${input.value}`)
    // console.log(response);
    let qrImageUrl= response.url
    // console.log(qrImageUrl);
    img.setAttribute('src',qrImageUrl);
    img.style.width="250px"
    // box.reset()

}
button.addEventListener("click",getQr)