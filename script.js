document.querySelector(".btn").addEventListener("click", function () {
    alert("Welcome to Nona’s Donuts! Enjoy your visit!");
});



  let number = document.querySelectorAll(".contact-content");
  number.forEach((event) => {
    event.addEventListener("click", () => {
        if (event.classList.contains("active")) {
            event.classList.remove("active"); 
        } else {
            event.classList.add("active"); 
        }
    });
});