const canvas = document.querySelector("canvas");
const brushWidth = document.querySelector("#brush-width")
const brushColor = document.querySelector("#color-picker")
const brush = document.querySelector(".brush")
const eraser = document.querySelector(".eraser")
const ctx = canvas.getContext("2d")

let isDrawing = false

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    ctx.lineWidth = brushWidth.value
})

canvas.addEventListener("mousedown", () => {
    isDrawing = true
    ctx.beginPath()
})
canvas.addEventListener("mouseup", () => {
    isDrawing = false
})

canvas.addEventListener("mousemove", (e) => {
    if(!isDrawing) return
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
})

brushWidth.addEventListener("change", () => {
    ctx.lineWidth = brushWidth.value
})

brushColor.addEventListener("change", () => {
    ctx.strokeStyle = `${brushColor.value}`
    if(eraser.className == "eraser active"){
        brush.classList.add("active");
        eraser.classList.remove("active");
        ctx.strokeStyle = `${brushColor.value}`
    }
})

brush.addEventListener("click", () => {
    brush.classList.add("active");
    eraser.classList.remove("active");
    ctx.strokeStyle = `${brushColor.value}`
})

eraser.addEventListener("click", () => {
    brush.classList.remove("active");
    eraser.classList.add("active");
    ctx.strokeStyle = "#fff"
})