var page_load = function() {
    console.log("hello world");
    alert("Page loaded");
    var x = 10;
    var y = 5;
    var z = 1;
    var avg = (x + y + z)/3;
    console.log(avg);
    if(avg == 5+1/3) {
        console.log("equal");
    }
    var zero = 0;
    var boolean_false = false;
    if(zero === boolean_false) {
        console.log("error");
    }
    else{
        console.log("fine");
    }
    var p_new = document.createElement("p");
    p_new.textContent = "inserted a new paragraph!";
    document.body.appendChild(p_new);
    //p_new onclick="console.log(\"clicked on p1\")";
    
    class Math {
        constructor(i, j) {
            this.x = i;
            this.y = j;
            this.sum = i + j;
        }
        print() {
            console.log(this.x, this.y, this.sum);
        }
    }
    var XY = new Math(1, 3);
    XY.print()
}
