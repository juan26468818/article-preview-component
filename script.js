const shareContainer = document.getElementById("share-view")
const shareI = document.getElementById("share-i")
const shareB = document.getElementById("share-b")
const shareT = document.getElementById("t-share")

let isActive = false;

shareB.addEventListener("click", ()=>{
        shareI.className += " active-i"
        shareB.className += " active-b"
        shareContainer.classList.remove("hidden")
        shareT.classList.remove("hidden")
        if(isActive === true){
            shareI.classList.remove("active-i")
            shareB.classList.remove("active-b")
            shareContainer.className += " hidden"
            shareT.className += " hidden"
            isActive = false
        }else{
            isActive = true
        }
})