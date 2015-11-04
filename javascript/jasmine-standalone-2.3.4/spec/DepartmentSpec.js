describe("Department", function () {

    beforeEach(function () {
        this.james = new Employee("James", 34, 1000);
        this.joe = new Employee("Joe", 36, 1000);
        this.jack = new Employee("Jack", 37, 1000);
        this.supportDept = new Department("Support", [this.james, this.joe, this.jack]);

    });

    describe("getter-setter", function () {
        it("should get department name", function () {
            expect(this.supportDept.name).toBe("Support");
        });

    });

    describe("finding employee", function () {
        it("should not find employee", function () {
            expect(this.supportDept.findEmployee("Raymond")).toBeNull();

        });

        it("should not find employee", function () {
            var findEmployee = this.supportDept.findEmployee("Joe");
            expect(findEmployee.age).toBe(36);

        });

        it("should count employees", function () {
            expect(this.supportDept.sumEmployees()).toEqual(3);

        });


    });

    describe("adding employee", function () {
        it("should add employee", function () {
            var jack = new Employee("Jack", 32, 300);
            this.supportDept.addEmployee(jack);
            expect(this.supportDept.sumEmployees()).toEqual(4);

        });
    });




});
