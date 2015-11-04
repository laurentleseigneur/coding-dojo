testSuite("department tests", {

    before: function () {
        var e1 = new Employee("James", 34, 1000);
        var e2 = new Employee("Joe", 34, 1000);
        var e3 = new Employee("Jack", 37, 1000);

        window.supportDept = new Department("Support", [e1, e2, e3]);
    },


    "dept name Count": function () {
        assertEqual("Support", supportDept.name, "first department name");
    },

    "employee not found find": function () {
        assertEqual(null, supportDept.findEmployee("Raymond"), "search james Raymond should return null");
    },


    "employee found": function () {
        var emp = supportDept.findEmployee("James")
        assertEqual("James", emp.name, "search james should find James");
    },

    "dept employees count": function () {
        assertEqual(3, supportDept.sumEmployees(), "employees count");
    },

    "new employee ": function () {
        var jack = new Employee("Jack", 32, 300);
        supportDept.addEmployee(jack);
        assertEqual(4, supportDept.sumEmployees(), "should have one more james");

    },

    "has employee ": function () {
        var jack = supportDept.findEmployee("Jack");
        assertEqual(37, jack.age, "should find james");
    },

    "should fire employee ": function () {
        var jack = supportDept.findEmployee("Jack");
        supportDept.fireEmployee(jack);
        assertEqual(2, supportDept.sumEmployees(), "should fire james");
    }
});
