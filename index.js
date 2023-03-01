const topRow = document.getElementsByClassName("top-row")[0]
const bottomRow = document.getElementsByClassName("bottom-row")[0]

const clickLeft = document.getElementsByClassName("click-left")[0]
const clickRight = document.getElementsByClassName("click-right")[0]

const leftBtnImg = document.querySelector("#left")
const rightBtnImg = document.querySelector("#right")

let translateVal = 0

rightBtnImg.src = "./assets/arrow-gray-right.png"
clickRight.style.borderColor = "gray"

const imagesNum = topRow.querySelectorAll("img").length
let slideNum = 0

clickLeft.addEventListener("click",() => {
    if(slideNum < imagesNum - 1){
        translateVal -= topRow.querySelectorAll("img")[slideNum].width + 12
        topRow.style.translate = `${translateVal}px`
        bottomRow.style.translate = `${translateVal}px`
        rightBtnImg.src = "./assets/arrow-blue-right.png"
        clickRight.style.borderColor = "#134880"
        slideNum += 1
    }
    if(slideNum === imagesNum - 1){
        rightBtnImg.src = "./assets/arrow-blue-right.png"
        leftBtnImg.src = "./assets/arrow-gray-left.png"
        clickLeft.style.borderColor = "gray"
    }
})

clickRight.addEventListener("click",() => {
    if(slideNum > 0){
        translateVal += topRow.querySelectorAll("img")[slideNum].width
        topRow.style.translate = `${translateVal}px`
        bottomRow.style.translate = `${translateVal}px`
        leftBtnImg.src = "./assets/arrow-blue-left.png"
        clickLeft.style.borderColor = "#134880"
        slideNum -= 1
    }   
    if(slideNum === 0){
        translateVal = 0
        topRow.style.translate = `${translateVal}px`
        bottomRow.style.translate = `${translateVal}px`
        rightBtnImg.src = "./assets/arrow-gray-right.png"
        leftBtnImg.src = "./assets/arrow-blue-left.png"
        clickRight.style.borderColor = "gray"
    }
})