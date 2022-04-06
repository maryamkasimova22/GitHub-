
function creatSnow(){
    const snow = document.createElement("i");
    snow.classList.add("fa-solid");
    snow.classList.add("fa-snowflake");
    document.body.append(snow);
    snow.style.fontSize = Math.random() * 10 + 10 + "px";
    snow.style.animationDuration = Math.random() * 3 + 2 + "s";
    snow.style.opacity = Math.random();
    snow.style.left = Math.random()* window.innerWidth + "px";
}
setInterval(creatSnow, 100);
