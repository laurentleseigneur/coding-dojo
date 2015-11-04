(function(){
    function assertEqual(expected,returned,message){
        var p = window.document.createElement("p");
        p.innerHTML=message+" : ";
        if (expected==returned){
            p.innerHTML+="SUCCESS";
            p.style.color="green";
        }
        else {
            p.innerHTML+="FAILED - got " +returned;
            p.style.color="red";
        }
        window.document.body.appendChild(p);
    }

    window.assertEqual=assertEqual;
})();

//display(true,"nice test");
//display(false,"wrong test");
