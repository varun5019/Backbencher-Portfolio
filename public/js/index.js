function fucn1(){
    console.log("hello")
    $("#Option1").addClass("chosen");
    $("#Option2").removeClass("chosen");
    $("#Option3").removeClass("chosen");

    $("#text1").addClass("Disp");
    $("#text2").removeClass("Disp");
    $("#text3").removeClass("Disp");

    // document.getElementById('text1').style.display = "block";
    // document.getElementById('text2').style.display = "none";
    // document.getElementById('text3').style.display = "none";

}

function fucn2(){
    console.log("hello2")
    $("#Option1").removeClass("chosen");
    $("#Option2").addClass("chosen");
    $("#Option3").removeClass("chosen");

    $("#text1").removeClass("Disp");
    $("#text2").addClass("Disp");
    $("#text3").removeClass("Disp");

    // document.getElementById('text1').style.display = "none";
    // document.getElementById('text2').style.display = "block";
    // document.getElementById('text3').style.display = "none";
}

function fucn3(){
    console.log("hello3")
    $("#Option1").removeClass("chosen");
    $("#Option2").removeClass("chosen");
    $("#Option3").addClass("chosen");

    $("#text1").removeClass("Disp");
    $("#text2").removeClass("Disp");
    $("#text3").addClass("Disp");

    // document.getElementById('text1').style.display = "none";
    // document.getElementById('text2').style.display = "none";
    // document.getElementById('text3').style.display = "block";

}