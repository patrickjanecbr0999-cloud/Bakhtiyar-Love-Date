const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = "100%";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.opacity = Math.random();
    heart.style.animation = "heartMove 6s linear";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(createHeart,500);