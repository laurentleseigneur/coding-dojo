function Employee(name, age, salary) {
    this.name = name;
    this.age;
    this.salary = salary;

    this.toString = function () {
        return ret = name + "(" + salary + "$) - age:" + age;
    };
};

function Department(name, employees) {
    this.name = name;
    this.employees = employees;

    this.averageSalary = function () {
        return this.sumSalary() / this.sumEmployees();
    };

    this.sumEmployees = function () {
        return this.employees.length;
    };

    this.sumSalary = function () {
        var sum = 0;
        this.employees.forEach(function (employee) {
                sum += employee.salary;
            }
        );
        return sum;
    };

    this.toString = function () {
        var ret = "**************\n"
        ret += "departement name:" + this.name + "\n";
        ret += "has " + employees.length + " employees ";
        ret += "with average salary:" + this.averageSalary() + "$\n";
        this.employees.forEach(function (employee, index, array) {
            ret += employee.toString();
            if (index < array.length - 1) {
                ret += ",\n";
            }
        });
        ret += "\n";
        return ret;
    }
};

function Company(name, departments) {
    this.name = name;
    this.departments = departments;


    this.sumEmployees = function () {
        var ret = 0;
        this.departments.forEach(function (department) {
                ret += department.sumEmployees();
            }
        );
        return ret;
    }

    this.sumSalaries = function () {
        var ret = 0;
        this.departments.forEach(function (department) {
            ret += department.sumSalary();
        });
        return ret;
    }

    this.toString = function () {
        var ret = "company name:" + this.name + "\n";
        ret += "has " + this.sumEmployees() + " employees ";
        ret += " with average salary:" + this.averageSalaries() + "$\n";
        this.departments.forEach(function (department) {
            ret += department.toString();
        });
        return ret;
    }
};


(function () {
    Company.prototype.averageSalaries = function () {
        return this.sumSalaries() / this.sumEmployees();
    }
})();


(function () {
    var proxy = Company.prototype.averageSalaries;
    Company.prototype.averageSalaries = function () {
        return proxy.apply(this, arguments) * 0.9;
    }
})();

(function () {
    var e1 = new Employee("James", 34, 1000);
    var e2 = new Employee("Joe", 34, 1000);
    var e3 = new Employee("Jack", 34, 1000);
    var e4 = new Employee("Janne", 44, 1000);
    var e5 = new Employee("Julie", 26, 1000);

    var dep12 = new Department("Support", [e1, e2, e4]);
    var dep13 = new Department("R&D", [e3, e5]);

    var soc1 = new Company("world company", [dep12, dep13]);

    console.log(soc1.toString());


})();