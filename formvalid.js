function valid(event) {
    event.preventDefault();
    
    const a = document.getElementById('name').value;
    const b = document.getElementById('email').value;
    const c = document.getElementById('add').value;
    const d = document.getElementById('no').value;
    const e = document.getElementById('textArea').value;

    var e1 = "" ;
    var e2 = "" ;
    var e3 = "" ;
    var e4 = "" ;
    var e5 = "" ;

    if(a == "") {
        e1 += "Name Should not be empty";
    }

    if(b == "") {
        e2 += "Email should not be empty";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b)) {
        e2 += "Enter a valid email!";
    }

    if(c == "") {
        e3 += "Address should not be empty";
    }

    if(d == "") {
        e4 += "Number should not be empty";
    } else if(d.length != 10 || isNaN(d)) {
        e4 += "Enter a valid number";
    }

    if(e == "") {
        e5 += "Text should not be empty";
    }

    document.getElementById("t1").innerText = e1;
    document.getElementById("t2").innerText = e2;
    document.getElementById("t3").innerText = e3;
    document.getElementById("t4").innerText = e4;
    document.getElementById("t5").innerText = e5;

    

    if(e1 || e2 || e3 || e4 || e5) {
        return false;
    }

    alert("submitted sucessfully");

    return true;
}
