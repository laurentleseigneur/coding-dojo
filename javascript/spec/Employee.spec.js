testSuite("employee tests", {

    before: function () {
        var james = new Employee("James", 34, 1000);
        window.james = james;
    },


    "raise": function () {
        james.raiseSalary("1.25");
        assertEqual(1250,james.salary,"should raise salary");
    }


});


