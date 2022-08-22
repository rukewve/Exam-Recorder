function totall(exam, firstCA, SecondCA) {
    let totalscore = exam + firstCA + SecondCA;
    if (totalscore <= 50) {
        console.log("Your score is:" + totalscore);
        console.log("Your Grade is: C ");
    }
    else if (totalscore <= 70 && total > 50) {
        console.log("Your score is:" + totalscore);
        console.log("Your Grade is: B");

    }
    else {
        console.log("Your score is: " + totalscore);
        console.log("Your Grade is: A");
    }
}

totall(parseInt(prompt("Input Your Examscore")), parseInt(prompt("input Your firstCA")), parseInt(prompt("input Your SecondCA"))
)
