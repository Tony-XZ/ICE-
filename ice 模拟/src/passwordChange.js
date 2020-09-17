window.onload = function() {
    var oBtn = document.getElementById("btn");
    oBtn.onclick = function() {
        var oTxt = document.getElementById("txt");
        alert(oTxt.value)
    }

    var oBtn1 = document.getElementById("btn1");
    oBtn1.onclick = function() {
        var oTxt1 = document.getElementById("txt1");
        alert(oTxt1.value)
    }
}