const toggleButton1 = document.querySelector("#btn1");
const mainHeader = document.querySelector("#main-header");

function toggleHeader() {
    if (mainHeader.textContent === "Hello World!") {
        mainHeader.textContent = "JavaScript is cool!";
    } else {
        mainHeader.textContent = "Hello World!";
    }
}

toggleButton1.addEventListener("click", toggleHeader);

const toggleButton2 = document.querySelector("#btn2");
const subheading = document.querySelector("#sub-header");

function toggleSubheadingColor() {
    if (subheading.style.color === "black") {
        subheading.style.color = "blue";
    } else {
        subheading.style.color = "black";
    }
}

toggleButton2.addEventListener("click", toggleSubheadingColor);

const button3 = document.querySelector("#btn3");
const listItems = document.querySelectorAll("li");

button3.addEventListener("click", () => {
    for (let i = 0; i < listItems.length; i += 2) {
        listItems[i].style.color = "grey";
    }
});

// const button4 = document.querySelector("#btn4");
// const listItems2 = document.querySelector( "li")
// const dbid = listItems2[i].getAttribute("data-dbid");
//
// button4.addEventListener("click", () => {
//     if (dbid === "1") {
//         listItems2[i].style.color = "blue";
//     }
// });

const button4 = document.querySelector("#btn4");
const listItem = document.querySelector("li[data-dbid='1']");

button4.addEventListener("click", () => {
    listItem.style.color = "blue";
});

const button5 = document.querySelector("#btn5");
const subParagraph = document.querySelector(".sub-paragraph");

button5.addEventListener("click", () => {
    subParagraph.innerText = "Mission Accomplished";
});
