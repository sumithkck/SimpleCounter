var number;

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    text = document.getElementsByTagName("label")[0].innerHTML;
    number = parseInt(text);
    number -= 1;
    document.getElementsByTagName("label")[0].innerHTML = number;

    if (number > 0) {
        document.getElementsByTagName("label")[0].style = "color:green";
    } else if (number < 0) {
        document.getElementsByTagName("label")[0].style = "color:red";
    } else {
        document.getElementsByTagName("label")[0].style = "color:blue";
    }
});

document.getElementsByTagName("button")[1].addEventListener("click", function() {

    number = 0;
    document.getElementsByTagName("label")[0].innerHTML = number;
    document.getElementsByTagName("label")[0].style = "color:blue";
});


document.getElementsByTagName("button")[2].addEventListener("click", function() {
    text = document.getElementsByTagName("label")[0].innerHTML;
    number = parseInt(text);
    number += 1;
    document.getElementsByTagName("label")[0].innerHTML = number;
    if (number > 0) {
        document.getElementsByTagName("label")[0].style = "color:green";
    } else if (number < 0) {
        document.getElementsByTagName("label")[0].style = "color:red";
    } else {
        document.getElementsByTagName("label")[0].style = "color:blue";
    }
});