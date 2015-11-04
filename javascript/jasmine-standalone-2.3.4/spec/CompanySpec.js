describe("Company", function () {

    beforeEach(function () {
        this.james = new Employee("James", 34, 1000);
        this.joe = new Employee("Joe", 36, 1000);
        this.jack = new Employee("Jack", 37, 1000);
        this.janne = new Employee("Janne", 44, 1000);
        this.julie = new Employee("Julie", 26, 1000);

        this.supportDept = new Department("Support", [this.james, this.joe, this.janne]);
        this.rdDept = new Department("R&D", [this.jack, this.julie]);

        this.company = new Company("world company", [this.supportDept, this.rdDept]);
    });

    describe("getter-setter", function () {
        it("should get company name", function () {
            expect(this.company.name).toBe("world company");
        });

    });

    describe("adding employee", function () {
        it("should raise error when departement does not exists", function () {
            var jim = new Employee("Jim", 32, 300);

            // WARNING BIND
            expect(this.company.addEmployee.bind(this.company, jim, "Supply Chain")).toThrowError("department Supply Chain does not exists!");
            //expect(function() { this.company.addEmployee(jim, "Supply Chain")}).toThrow();
        });


    });

});



