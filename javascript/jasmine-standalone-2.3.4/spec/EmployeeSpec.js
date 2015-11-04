describe("Employee", function () {

    beforeEach(function () {
        this.james = new Employee("James", 34, 1000);
    });


    describe("getter-setter", function () {
        it("should get age", function () {
            expect(this.james.age).toEqual(34);
        });

        it("should get salary", function () {
            expect(this.james.salary).toBe(1000);
        });

        it("should get name", function () {
            expect(this.james.name).toBe("James");
        });
    });


    describe("raise salary", function () {
        it("should raise salary" , function () {
            this.james.raiseSalary(1.3)
            expect(this.james.salary).toEqual(1300);
        });

    });

});


