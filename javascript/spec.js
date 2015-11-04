    testSuite("department tests",{

     before:function(){
            var e1 = new Employee("James", 34, 1000);
            var e2 = new Employee("Joe", 34, 1000);
            var e3 = new Employee("Jack", 37, 1000);
            var e4 = new Employee("Janne", 44, 1000);
            var e5 = new Employee("Julie", 26, 1000);

            window.supportDept = new Department("Support", [e1, e2, e3]);
       },


        "dept name Count": function(){
          assertEqual ( "Support", supportDept.name,"first department name");
        },

        "employee not found find": function(){
          assertEqual ( null, supportDept.hasEmployee("Raymond"),"search employee Raymond should return null");
        },


        "employee found": function(){
          var emp = supportDept.hasEmployee("James")
          assertEqual ( "James", emp.name,"search employee should find James");
        },

        "dept employees count": function(){
          assertEqual ( 3, supportDept.sumEmployees(),"employees count");
        },

         "new employee ": function(){
                var jack = new Employee("Jack", 32, 300);
                supportDept.addEmployee(jack);
                assertEqual ( 4, supportDept.sumEmployees(),"should have one more employee");

         },

          "has employee ": function(){
                var jack = supportDept.hasEmployee("Jack");
                assertEqual ( 37, jack.age,"should find employee");
         },

           "should fire employee ": function(){
                         var jack = supportDept.hasEmployee("Jack");
                         supportDept.fireEmployee(jack);
                           assertEqual ( 2, supportDept.sumEmployees(),"should fire employee");
                  }
    });


    testSuite("company tests",{
        before:function(){
            var e1 = new Employee("James", 34, 1000);
            var e2 = new Employee("Joe", 34, 1000);
            var e3 = new Employee("Jack", 34, 1500);
            var e4 = new Employee("Janne", 44, 1000);
            var e5 = new Employee("Julie", 26, 1000);

            var dep12 = new Department("Support", [e1, e2, e4]);
            var dep13 = new Department("R&D", [e3, e5]);

            window.soc1 = new Company("world company", [dep12, dep13]);
        },

        after:function(){
            soc1.name="fgfg";
        },

        "company name": function(){
          assertEqual ( "world company", soc1.name,"check company name");
         },

        "employee Count": function(){
          assertEqual ( 5, soc1.sumEmployees(),"employees count");
         },

          "department Count": function(){
          assertEqual ( 2, soc1.departments.length,"<b>"+soc1.name+"</b> should have <b>"+2+" departments</b>");
         },
        "new employee ": function(){
                var jack = new Employee("Jack", 32, 300);
                soc1.addEmployee(jack,"Support");
                assertEqual ( 6, soc1.sumEmployees(),"should have one more employee");
                assertEqual ( 870, soc1.averageSalaries(),"should have new average salary for company");
         },

          "average salary": function(){
          assertEqual ( 990, soc1.averageSalaries(),"average salary for company <b>"+soc1.name+"</b> should be <b>900</b>");
         },

          "new employee with wrong Department": function(){
                assertEqual ( 5, soc1.sumEmployees(),"should not have one more employee");

                var jack = new Employee("Jack", 32, 300);
                soc1.addEmployee(jack,"Supply Chain");
                assertEqual ( 5, soc1.sumEmployees(),"should not have one more employee");
                assertEqual ( 990, soc1.averageSalaries(),"should not have new average salary for company");
         },

          "fire employee ": function(){
                assertEqual ( 5, soc1.sumEmployees(),"should not have one more employee");
                soc1.fireEmployee("Jack");
                assertEqual ( 4, soc1.sumEmployees(),"should have one less employee");
                assertEqual (900, soc1.averageSalaries(),"should have new average salary for company");
         },
       }
    );



