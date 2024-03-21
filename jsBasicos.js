const input = document.querySelector("input");
const log= document.getElementById("log");

input.addEventListener("keydown", logKey);

function logKey(e)
{
    if(e.code == "ArrowLeft")
    {
        console.log("Ha ido a la izquierdini");
    }
    else
    {
        if(e.code == "ArrowUp")
        {
            console.log("Saltó");
        }
        else
        {
            if(e.code =="ArrowDown")
            {
                console.log("Se agachò");
            }
            else
            {
                if(e.code =="ArrowRight")
            {
                console.log("Se fue a la derechini");
            }
            }
        }
       
    }
    
}