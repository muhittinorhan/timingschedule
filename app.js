var nameInput = prompt("Lütfen İsmini Yaz :)");
const welcome = document.getElementById("welcome");
const clock = document.getElementById("clock");
const timingBox = document.getElementById("timing-box");
var counter = 0;

const boxCreate = () =>{
        if(counter < 60){
        const box =  document.createElement("div");
        box.id="box";
        timingBox.appendChild(box);
        counter++; 
    }
    else if(counter===60){
        timingBox.innerHTML="";
        counter=0;
    }

};

const loadFunction = () =>  {
    const date = new Date;
    const welcomeMessage = "Patika.dev'e Hoşgeldin " + nameInput;
    clock.innerHTML = "Şuan Saat : "+ date.getHours()+":"+ date.getMinutes()+":"+ date.getSeconds();
    welcome.innerHTML = welcomeMessage;
    boxCreate();

};

const myInterval = () => {
    setInterval(loadFunction,1000);
};

myInterval();

