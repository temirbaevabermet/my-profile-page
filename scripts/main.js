const imgElement = document.querySelector("img");
const img1URL = "images/myPhoto.jpg";
const img2URL = "images/mySecondphoto.jpg";
function changePhoto(event){
    let current = imgElement.getAttribute("src");
    if(current == img1URL){
        imgElement.setAttribute("src", img2URL);
    }
    else{
        imgElement.setAttribute("src",img1URL);
    }
}
imgElement.onclick = changePhoto;