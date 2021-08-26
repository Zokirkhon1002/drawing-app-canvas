let canvas = document.getElementById("canvas"),
  btnDec = document.getElementById("decrease"),
  btnInc = document.getElementById("increase"),
  hajm = document.getElementById("hajm"),
  rang = document.getElementById("color"),
  tozalash = document.getElementById("clear");

const mavzuHolati = canvas.getContext("2d");

// let obyekt = {
//     size = 10,
//     isPressed = false,
//     color = 'green',
//     x,
//     x,
// }
// const { size, isPressed, color, x, y } = obyekt.

let size = 10,
  isPressed = false,
  color = "green",
  x,
  y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e)=>{
    if(isPressed){
        let x2 = e.offsetX;
        let y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
})

function drawCircle(x,y){
    mavzuHolati.beginPath();
    mavzuHolati.arc(x, y, size, 0, Math.PI * 2);
    mavzuHolati.fillStyle = color;
    mavzuHolati.fill();
}

function drawLine(x1, y1, x2, y2) {
    mavzuHolati.beginPath();
    mavzuHolati.moveTo(x1, y1);
    mavzuHolati.lineTo(x2, y2);
    mavzuHolati.strokeStyle = color;
    mavzuHolati.lineWidth = size * 2;
    mavzuHolati.stroke();
}

function updateSizeOnScreen() {
    hajm.innerHTML = size;
}

btnInc.addEventListener('click', ()=> {
    size += 5;

    if(size > 50){
        size = 50;
    }
    updateSizeOnScreen();
})

btnDec.addEventListener('click', ()=> {
    size -= 5;

    if(size < 5){
        size = 5;
    }
    updateSizeOnScreen();
})

rang.addEventListener('click', (e)=> color = e.target.value);
tozalash.addEventListener('click', ()=>{
    mavzuHolati.clearRect(0,0, canvas.width, canvas.height)
})