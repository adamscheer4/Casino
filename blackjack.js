
const backhomeButtonEl = document.getElementById("back-button");
backhomeButtonEl.addEventListener("click", backHome)

let cards = ["A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "k",
    "q",
    "j"
];

let randomCard = Math.floor(Math.random()*cards.length)
// console.log(randomCard);
alert(randomCard)
let userHand = []
let dealerHand = []

function backHome() {
    window.location.href = "index.html"
}