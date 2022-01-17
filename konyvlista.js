function print(){
    let author = document.getElementById("author").value
    let title = document.getElementById("title").value

    const starWrapper = document.querySelector(".stars");
    const stars = document.querySelectorAll(".stars a");

    stars.forEach((star, clickedIdx) =>{
    star.addEventListener("click",() => {
        starWrapper.classList.add("disabled");
        stars.forEach((otherStar, otherIdx) => {
            if (otherIdx <= clickedIdx) {
                otherStar.classList.add("active");
            }
        })
        console.log(`star if index ${clickedIdx + 1} was clicked`)
    })
})
//csillagokat megjeleníteni?
    result = "<li>"+ author + ": " + title


    document.getElementById("result").innerHTML += result
    input_torlese()
}
//újra elhalványítani a csillagokat?
function input_torlese(){
    document.getElementById("author").value =""
    document.getElementById("title").value =""
}