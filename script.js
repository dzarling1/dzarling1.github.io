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
        var out = "Current classes: ";
        var i;
        for(i = 0; i < arr.Current_Courses.length; i++) {
            out += arr.Current_Courses[i]+", ";
        }
        console.log(out);
        document.getElementById("json").innerHTML = out;
    }
}
