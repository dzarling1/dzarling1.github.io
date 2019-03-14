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
        var out = "Completed Courses: ";
        var i;
        for(i = 0; i < arr.Completed_Courses.length-1; i++) {
            out += arr.Completed_Courses[i].name+", ";
        }
        out += "and " + arr.Completed_Courses[i].name;
        var out2 = "Current classes: ";
        for(i = 0; i < arr.Current_Courses.length-1; i++) {
            out2 += arr.Current_Courses[i].name+", ";
        }
        out2 += "and " + arr.Current_Courses[i].name+"\n";
        console.log(out);
        console.log(out2);
        document.getElementById("json1").innerHTML = out;
        document.getElementById("json2").innerHTML = out2;
    }
}
