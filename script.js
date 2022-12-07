const circle = document.querySelector("#circ")
let dy = 0

function start() {
    window.requestAnimationFrame(update)
}

function update() {

    let cy = parseFloat(circle.getAttribute("cy"))
    cy = cy + 1
    circle.setAttribute ("cy", cy)
    window.requestAnimationFrame(update)
}