(function () {

    function display(expected, returned, message) {
        var p = window.document.createElement("p");
        p.innerHTML = message + " : ";
        if (expected == returned) {
            p.innerHTML += "SUCCESS";
            p.style.color = "green";
        }
        else {
            p.innerHTML += "FAILED - expected:" + expected + " - got:" + returned;
            p.style.color = "red";
        }
        window.document.body.appendChild(p);
    }

    function assertEqual(expected, returned, message) {
        display(expected, returned, message);
        if (expected != returned) {
            throw new Error("failed test:" + message);
        }
    }

    function testSuite(title, tests) {
        var h2 = window.document.createElement("h2");
        h2.innerHTML = title;
        window.document.body.appendChild(h2);

        var hasBefore = (typeof tests.before === "function");
        var hasAfter = (typeof tests.after === "function");

        var success = 0;
        var failed;
        var skip = 0;
        var total = 0;
        for (var test in tests) {
            if (test != "before" && test != "after") {
                if (failed) {
                    skip++;
                    total++;
                }
                else {
                    try {
                        if (hasBefore) {
                            console.log("run '" + title + "'.before");
                            tests["before"]();
                        }
                        console.log("run test '" + title + "'." + test);
                        tests[test]();
                        success++;
                        if (hasAfter) {
                            console.log("run '" + title + "'.after");
                            tests["after"]();
                        }
                    }
                    catch (err) {
                        var pe = window.document.createElement("pre");
                        pe.innerHTML = ": " + err.message + "\n";
                        pe.innerHTML += "ERROR in test:'" + title + "." + test + "' : " + err.message + "\n";
                        pe.innerHTML += "STACK: " + err.stack;
                        pe.style.color = "red";
                        window.document.body.appendChild(pe);
                        failed = test;
                    } finally {
                        total++;
                    }
                }
            }

        }
        var p = window.document.createElement("p");
        p.innerHTML = "Tests: " + total + " success:" + success + " failed test:<b>" + failed + "</b> skip:" + skip;
        window.document.body.appendChild(p);

    }

    window.assertEqual = assertEqual;
    window.testSuite = testSuite;
})();

//display(true,"nice test");
//display(false,"wrong test");
