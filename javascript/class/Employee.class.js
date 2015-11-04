function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.toString = function () {
        return ret = name + "(" + salary + "$) - age:" + age;
    };

    this.raiseSalary = function (rate) {
        this.salary = this.salary * rate;
    }
};
