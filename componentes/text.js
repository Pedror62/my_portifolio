const el = document.querySelector("#text");
const text = "Desenvolvedor  Web";
const interval = 100;
function showText(el, text, interval){

    const char = text.split("").reverse();

 const typer = setInterval(()=>{
    
    if(!char.length){
        return clearInterval(typer);
    }
    const next= char.pop();
    el.innerHTML += next;

 }, interval);
}

showText(el, text, interval);

