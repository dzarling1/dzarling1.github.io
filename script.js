var page_load = function() {
    console.log("Page loaded");
    var xmlhttp = new XMLHttpRequest();
    var url = "https://dzarling1.github.io/index.json";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("JSON loaded");
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(arr) {
        var out = "";
        var i;
        for(i = 0; i < arr.length; i++) {
            out += '<a href="' + arr[i].url + '">' +
            arr[i].display + '</a><br>';
        }
        document.getElementById("json").innerHTML = out;
    }
}
