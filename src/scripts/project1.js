const textToType= document.getElementById("textToType")
const phrases=['Hello, nice to meet you!!! What is your[>~HV9', ' name?!?','Do you like dancing?', 'Would you dance with me?']
const button=document.getElementById("fbutton")
let i=0;
let j=0;
let cont=0;
let array=[]

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
    setTimeout(loop,70)
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


window.addEventListener('scroll', chispa);


button.addEventListener('click',console.log("holaaaa perrillooo"))
