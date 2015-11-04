function display(result,message){
    var p = window.document.createElement("p");
    p.innerHTML=message+":";
    if (result){
        p.innerHTML+="SUCCESS";
        p.style.color="green";
    }
    else {
        p.innerHTML+="FAILED";
        p.style.color="red";
    }
    window.document.body.appendChild(p);
}

display(true,"nice test");
display(false,"wrong test");
