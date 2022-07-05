let display = document.getElementById('display');

let Buttons = Array.from(document.getElementsByClassName("Button"));

Buttons.map( Button => {
    Button.addEventListener("click", (e) => {
       switch(e.target.innerText){
           case 'AC':
               display.innerText = '';
               break;
            case '←':
                if(display.innerText) {
                display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                        display.innerText = eval(display.innerText);
                    }catch {
                        display.innerText = "Error!";
                    }
                    break;
                default:
                    display.innerText += e.target.innerText;
       }
    });
});