document.getElementById("car-btn").addEventListener("click", function() {
    moveRickshaw();
});

function moveRickshaw() {
    const rickshaw = document.getElementById("rickshaw");
    rickshaw.style.opacity = "1";
    let position = 0;
    
    const interval = setInterval(() => {
        if (position >= window.innerWidth) {
            clearInterval(interval);
            alert("Daimyyy! Surpriseee! 🎉❤️");
        } else {
            position += 10;
            rickshaw.style.left = position + "px";
        }
    }, 50);
}
