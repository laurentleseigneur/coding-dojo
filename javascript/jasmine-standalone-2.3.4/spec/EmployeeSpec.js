describe("Employee", function () {
    var james;

    beforeEach(function () {
        james = new Employee("James", 34, 1000);
    });


    describe("getter-setter", function () {
        it("should get age", function () {
            expect(james.age).toEqual(34);
        });

        it("should get salary", function () {
            expect(james.salary).toBe(1000);
        });

        it("should get name", function () {
            expect(james.name).toBe("James");
        });
    });


    describe("raise salary", function () {
        it("should get age", function () {
            james.raiseSalary(1.3)
            expect(james.salary).toEqual(1300);
        });

    });

});


