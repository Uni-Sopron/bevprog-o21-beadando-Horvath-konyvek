var book_stars = 0;

function mystars(){    
    const starWrapper = document.querySelector(".stars");
    const stars = document.querySelectorAll(".stars a");
    stars.forEach((star, clickedIdx) =>{
        star.addEventListener("click",() => {
            book_stars = clickedIdx + 1;
            starWrapper.classList.add("disabled");
            star.forEach((otherStar, otherIdx) => {
                if (otherIdx <= clickedIdx) {
                    otherStar.classList.add("active");
                }
            })
            console.log(`star if index ${clickedIdx + 1} was clicked`)
        })
    })
}

function print(){
    let author = document.getElementById("author").value
    let title = document.getElementById("title").value

    result = "<li>"+ author + ": " + title + book_stars

    document.getElementById("result").innerHTML += result
    input_torlese()
}

function input_torlese(){
    document.getElementById("author").value =""
    document.getElementById("title").value =""

}
