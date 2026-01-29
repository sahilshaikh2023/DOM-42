const h1 = document.querySelector("h1");
const btn = document.querySelector("button");


let ipl = [
    {
        name: "Chennai Super Kings",
        bgColor: "#F7C700",
        textBg: "#FFD700"
    },
    {
        name: "Mumbai Indians",
        bgColor: "#004BA0",
        textBg: "#0078BC"
    },
    {
        name: "Royal Challengers Bangalore",
        bgColor: "#A51C30",
        textBg: "#DA291C"
    },
    {
        name: "Kolkata Knight Riders",
        bgColor: "#2E0854",
        textBg: "#3A225D"
    },
    {
        name: "Rajasthan Royals",
        bgColor: "#EA1A85",
        textBg: "#FF69B4"
    },
    {
        name: "Delhi Capitals",
        bgColor: "#17479E",
        textBg: "#2561AE"
    }
];

btn.addEventListener("click", ()=>{


    h1.innerHTML = "change";
    let num = Math.floor(Math.random()*ipl.length);
    let team = ipl[num];
    h1.innerText = team.name ;

    document.body.style.backgroundColor = team.bgColor;

    // text background
    h1.style.backgroundColor = team.textBg;


})
