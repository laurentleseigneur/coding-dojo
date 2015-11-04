
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

    this.addEmployee = function (employee) {
        this.employees.push(employee);
    }

    this.findEmployee = function (employeeName) {
        var result = null;
        this.employees.forEach(function (employee) {
            if (employee.name == employeeName) {
                result = employee;
            }
        });
        return result;
    }

    this.fireEmployee = function (employee) {
        if (james != null) {
            employees.splice(employees.indexOf(james), 1);
        }
    }


};
