const BOT_TOKEN = "8191623659:AAFALAnLA1XuLe63SPdEf-fTJnAz28TPC4c";
const CHAT_ID = "8517345540";

const pages = document.querySelectorAll(".page");

function showPage(id){
    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


// ================= НАЧАЛО =================

document.getElementById("startBtn").onclick = () =>{
    showPage("login");
};


// ================= ПАРОЛЬ =================

// Здесь потом поменяем данные на твои

const correctName = "Айгерим";
const correctSurname = "Смайлова";
const correctFather = "Рашидовна";


document.getElementById("loginBtn").onclick = () =>{

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let father = document.getElementById("father").value;


    if(
        name === correctName &&
        surname === correctSurname &&
        father === correctFather
    ){
        showPage("question");
    }
    else{
        alert("Кажется, ты ввела что-то неправильно ❤️");
    }

};


// ================= ВОПРОС =================

document.getElementById("yesBtn").onclick = () =>{
    showPage("places");
};


const noBtn = document.getElementById("noBtn");

function moveButton() {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 250 + "px";
    noBtn.style.top = Math.random() * 250 + "px";
}

noBtn.onmouseenter = moveButton;
noBtn.ontouchstart = function(e) {
    e.preventDefault();
    moveButton();
};

// ================= МЕСТА =================

let selectedPlaces=[];

const cards=document.querySelectorAll(".card");


cards.forEach(card=>{

    card.onclick=()=>{

        card.classList.toggle("selected");


        let place=card.innerText;


        if(selectedPlaces.includes(place)){
            selectedPlaces =
            selectedPlaces.filter(item=>item!==place);
        }
        else{
            selectedPlaces.push(place);
        }

    }

});


document.getElementById("placeNext").onclick=()=>{

    if(selectedPlaces.length===0){
        alert("Выбери хотя бы одно место ❤️");
        return;
    }

    showPage("datePage");

};


// ================= ДАТА =================

let selectedDate="";

document.getElementById("dateNext").onclick=()=>{

    selectedDate =
    document.getElementById("date").value;


    if(!selectedDate){
        alert("Выбери дату ❤️");
        return;
    }


    showPage("timePage");

};


// ================= ВРЕМЯ =================

let selectedTime="";


document.getElementById("timeNext").onclick=()=>{

    selectedTime =
    document.getElementById("time").value;


    if(!selectedTime){
        alert("Выбери время ❤️");
        return;
    }


    showPage("giftPage");

};


// ================= ЖЕЛАНИЕ =================

let wish="";


document.getElementById("wishNext").onclick=()=>{

    wish =
    document.getElementById("wish").value;


    showPage("finishPage");

};


// ================= ОТПРАВКА =================

document.getElementById("sendBtn").onclick = async () => {

let message = `
❤️ Новое свидание ❤️

Места:
${selectedPlaces.join(", ")}

Дата:
${selectedDate}

Время:
${selectedTime}

Желание:
${wish}
`;

await fetch(
`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
chat_id:CHAT_ID,
text:message
})
}
);

alert("Отправлено ❤️"); 

};