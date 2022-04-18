document.getElementById('growButton').onclick = function growButton() {
        document.getElementById("box").style.height = "300px"
}
document.getElementById('blueButton').onclick = function blueButton() {
        document.getElementById("box").style.backgroundColor = "blue"

}
document.getElementById('fadeButton').onclick = function fadeButton() {
        document.getElementById('box').style.opacity = .25
}
document.getElementById('Reset').onclick = function Reset() {
        document.getElementById("box").style.height = "150px"
        document.getElementById("box").style.backgroundColor = "orange"
        document.getElementById('box').style.opacity = 1
}