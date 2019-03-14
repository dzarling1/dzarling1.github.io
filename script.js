var page_load = function() {
    console.log("Page loaded");
    var xmlhttp = new XMLHttpRequest();
    var url = "index.json";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("JSON loaded");
            console.log(this.responseText);
            var myArr = JSON.parse(this.responseText);
            console.log(myArr);
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
