let libreria= document.getElementById("asciiArt")


let libroCerrado=["                           ______","                          /  Li  /,","                         /  bro //","                        /______//","                       (______(/"]
 
let libroAbierto=["___________________   ___________________","  .-/|            78                     ~~**~~      /  /      ~~**~~   79  |/-.","  ||||                    :                    ||||","                  // ~ ~ ~~ | ~~~ ~~ $$","                 //________.|.________%%","                `----------`-'----------'"]
 

function ascii(libro){
    let i=0;
    let j=0;
    let libroHtml=[]

    while(libro.length>i){
        while(libro[i].length>j){
            
            if(libro[i][j]===" "){
                
                libro[i][j]="&nbsp;"
            }
            
            j++
        }



        libroHtml.push(libro[i])
        libroHtml.push('<br>')
        libreria.innerHTML=libroHtml
        console.log(libro[i])
        i++
    }
}




//ascii(libroCerrado)
ascii(libroAbierto)
