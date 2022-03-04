
let lis = document.querySelectorAll("ul li");
let box = document.querySelector(".box");



if(window.localStorage.getItem("color")) {
    //[1] If there is color
    box.style.backgroundColor = window.localStorage.getItem("color");
    //[2] Remove class active from all lis
    lis.forEach((li) => {
        li.classList.remove("active");
    });
    // Add active class to current color
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
} 

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        // console.log(e.currentTarget.dataset.color);
        lis.forEach((li) => {
            li.classList.remove("active");
        });
        // Add class active to Current element 
        e.currentTarget.classList.add("active");
        // Add current color to localStorage
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        // Change Div Background-color
        box.style.backgroundColor = e.currentTarget.dataset.color;
    })
})


