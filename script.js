let numSquares=6
let colors=[]
let pickedColor
let squares=document.querySelectorAll(".square")
let colorDisplay=document.getElementById("colorDisplay")
let messageDisplay= document.querySelector("#message")
let h1= document.querySelector("h1")
let resetBtn=document.querySelector("#reset")
let modeBtn= document.querySelectorAll(".mode")

init()

function init(){
    setUpModeBtns()
    setUpSquares()
    reset()
  }

  function setUpModeBtns(){
    for (var i = 0; i < modeBtn.length; i++) {
      modeBtn[i].addEventListener("click", function(){
        modeBtn[0].classList.remove("selected")
        modeBtn[1].classList.remove("selected")
        this.classList.add("selected")
          numSquares= (this.textContent==="Easy")?3:6
        reset()
      })
    }
  }

  function setUpSquares(){
    for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", function(){
        var clickedColor=this.style.background
        if(clickedColor===pickedColor){
          messageDisplay.textContent="Correct!"
          resetBtn.textContent="Play Again!"
          changeColors(clickedColor)
          h1.style.background=clickedColor
        }else{
          this.style.background="#232323"
          messageDisplay.textContent="Try Again"
        }
      })
    }
  }

      function reset(){
        colors= generateRandomColors(numSquares)
        pickedColor=pickColor()
        colorDisplay.textContent=pickedColor
        for (var i = 0; i < squares.length; i++) {
          if(colors[i]){
          squares[i].style.background=colors[i]
          squares[i].style.display="block"
        }else{
          squares[i].style.display="none"
        }
        }
        h1.style.background="steelblue"
        messageDisplay.textContent=""
        resetBtn.textContent="New Colors"
      }




      resetBtn.addEventListener("click", function(){
        reset()
      })



      function changeColors(color){
        for (var i = 0; i < squares.length; i++) {
          squares[i].style.background=color
        }
      }

      function pickColor(){
          var random=Math.floor(Math.random()*colors.length)
          return colors[random]
        }
      function generateRandomColors(num){
        var arr=[]
        for (var i = 0; i <num ; i++) {
          arr[i]=randomColor()
        }
        return arr
      }

      function randomColor(){
        var r=Math.floor(Math.random()*256)
        var b=Math.floor(Math.random()*256)
        var g=Math.floor(Math.random()*256)
        return "rgb("+r+", "+g+", "+b+")"

      }




//-----------------Funciones

//igual el color ganador con el color de fondo
// function changeColors(){  

//     for( let i = 0; i < asignarColor.length; i++){

//         asignarColor[i].style.backgroundColor = pickedColor

//     }
// }
// //elige el color ganador
// function pickColor(){
//     let random=Math.floor(Math.random()*colors.length)
//     return colors[random]
//   }
// //genera un color al azar
// function randomColor() {
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     return "rgb(" + r + ", " + g + ", " + b + ")";
// }
// //genera una lista de colores al azar
// function generateRandomColors(numeroDeCuadrados){
    
//     let col = []
//     for(let i = 0; i <= numeroDeCuadrados; i++){
//         col [i] = randomColor()
//     }
//     return col

// }


//--------------------------- remasterisasar

// easyBtn.addEventListener('click', function(){
//     hardBtn.classList.remove("selected")
//     easyBtn.classList.add("selected")
//     numeroDeCuadrados= 2
//     colors = generateRandomColors(numeroDeCuadrados)
//     pickedColor = pickColor()
//     colorDisplay.textContent=pickedColor 

//     for(i=0; i <asignarColor.length  ;i++){
//         if (colors[i]){
//             asignarColor[i].style.background =colors[i]
//         }else{
//             asignarColor[i].style.background = 'none'
//         }

//     }
// })

// hardBtn.addEventListener('click', function(){
//     hardBtn.classList.add("selected")
//     easyBtn.classList.remove("selected")    
//     numeroDeCuadrados = 6
//     colors = generateRandomColors(numeroDeCuadrados)
//     pickedColor = pickColor()
//     colorDisplay.textContent=pickedColor 

//     for(i=0; i <asignarColor.length  ;i++){
//         asignarColor[i].style.background =colors[i]        
//         asignarColor[i].style.background = 'block'
        
//     }
// })


//reseteal el moton para vover a actualizar los colores
// botonReset.addEventListener('click', function(){

//     //reinicia todo
//     colors = generateRandomColors(numeroDeCuadrados)
//     pickedColor = pickColor()
//     colorDisplay.textContent=pickedColor
   
//     for( let i = 0; i < asignarColor.length; i++){
//         asignarColor[i].style.backgroundColor =colors[i]
//     }

//     colorDeFondo.style.background='steelblue'
//     mensaje.textContent=""
//     botonReset.textContent="New Colors"
        
// })



// for( let i = 0; i < asignarColor.length; i++){
//     colorDisplay.textContent=pickedColor  //EL NUMERO RGB EN EL SPAN

//     asignarColor[i].style.backgroundColor =colors[i]
    
                    
//      asignarColor[i].addEventListener("click", function(){
            
//         let clickedColor = asignarColor[i].style.backgroundColor 
    
//     if(pickedColor === clickedColor){
    
//         mensaje.textContent = '!Correcto!'
//         botonReset.textContent = "Play Again"
//         changeColors(clickedColor)
//         colorDeFondo.style.backgroundColor = pickedColor
            
            
            
//     } else {
//         // cambiar todos el color de fondo de square
//         asignarColor[i].style.backgroundColor = '#232323'
//         mensaje.textContent = 'Intentalo de nuevo'
       
    
//     }
    
    
// })
// }


