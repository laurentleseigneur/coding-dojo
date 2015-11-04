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

    this.getDepartment = function (departmentName) {
        var result = null;
        this.departments.forEach(function (department) {
            if (department.name == departmentName)
                result = department;
        });
        return result;
    }

    this.addEmployee = function (employee, existingDepartment) {
        var department = this.getDepartment(existingDepartment);
        if (department == null) {
            throw Error("department "+ existingDepartment + " does not exists!");
        }
        department.addEmployee(employee)
    };

    this.findEmployee = function (employeeName) {
        var result = null;
        this.departments.forEach(function (department) {
            var employee = department.findEmployee(employeeName);
            if (employee != null) {
                result = employee;
            }
        });
        return result
    };

    this.fireEmployee = function (employeeName) {
        this.departments.forEach(function (department) {
            var employee = department.findEmployee(employeeName);
            if (employee != null) {
                department.fireEmployee(employee);
            }
        });
    };

    this.raiseEmployee = function (employeeName, rate) {
        var employee = this.findEmployee(employeeName);
        if (employee != null) {
            employee.raiseSalary(rate);
        }

    };

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

    window.soc1 = new Company("world company", [dep12, dep13]);

    console.log(soc1.toString());

})();
