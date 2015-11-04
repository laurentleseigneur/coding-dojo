(function(){

   function display(expected,returned,message){
        var p = window.document.createElement("p");
        p.innerHTML=message+" : ";
        if (expected==returned){
            p.innerHTML+="SUCCESS";
            p.style.color="green";
        }
        else {
            p.innerHTML+="FAILED - expected:"+ expected +" - got:" +returned;
            p.style.color="red";
        }
        window.document.body.appendChild(p);
    }

    function assertEqual(expected,returned,message){
        display(expected,returned,message);
        if (expected!=returned){
        throw new Error("failed test:"+ message);
        }
    }

     function testSuite(title, tests){
            var h2 = window.document.createElement("h2");
            h2.innerHTML=title;
            window.document.body.appendChild(h2);

            var success=0;
            var failed;
            var skip=0;
             var total=0;
            for (var test in tests)
            {
                if (failed){
                    skip++;
                     total++;
                }
                else{
                    try{
                        tests[test]();
                        success++;
                    }
                        catch(e){
                        failed=test;
                    }  finally
                    {
                    total++;
                    }
                }
            }
             var p = window.document.createElement("p");
             p.innerHTML="Tests: " + total + " success:"+success+" failed test:<b>"+failed+"</b> skip:"+skip;
             window.document.body.appendChild(p);

        }

    window.assertEqual=assertEqual;
    window.testSuite=testSuite;
})();

//display(true,"nice test");
//display(false,"wrong test");
