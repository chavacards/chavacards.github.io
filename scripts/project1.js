const textToType= document.getElementById("textToType")
const textToType2= document.getElementById("textToType2")
const phrases=['Hello, nice to meet you!!! What is your[>~HV9', ' name?!?', ' do you like dancing?', 'Would you dance with me?'];

let i=0;
let j=0;
let cont=0;
let array=[];

textToType2.style.hidden = true;

function loop(){
    
    textToType.innerHTML=array.join('')
    
    if(i<phrases[0].length ){
        array.push(phrases[0][i])
        i++
    }

    else if(i<phrases[0].length + 6){
        array.pop()
        i++
    }
    else if(i<phrases[0].length + 16){
        
        array.push(phrases[1][j])
        j++
        i++
    }
    else{
        i++
        
    } 
    setTimeout(loop,55)
}

///loop()

function chispa(){
    const scrollable = document.documentElement.scrollHeight-window.innerHeight;
    const scrolled = window.scrollY;
    const punto_rico= scrolled/scrollable;
    //console.log(punto_rico);

    if(punto_rico>=.58 && cont<1){
        //console.log('js')
        loop()
        cont++
    }
    
}

function primeraRespuesta(input){
    let name= input;
    let respuesta = [name+phrases[2]]
    console.log('erroooor')
    textToType2.style.hidden = false;

}


window.addEventListener('scroll', chispa);




document.getElementById("fbutton").addEventListener('click',primeraRespuesta())
