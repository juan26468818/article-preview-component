const shareContainer = document.getElementById("share-view")
const shareI = document.getElementById("share-i")
const shareB = document.getElementById("share-b")
let isActive = false;

shareB.addEventListener("click", ()=>{
        shareI.className += " active-i"
        shareB.className += " active-b"
        if(isActive === true){
            shareI.classList.remove("active-i")
            shareB.classList.remove("active-b")
            isActive = false
        }else{
            isActive = true
        }
})