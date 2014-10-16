

var people = [ { firstName: "John",
                 lastName: "Smith",
                 email: "john.smith@telerik.com" },
               { firstName: "Jane",
                 lastName: "Smith",
                 email: "jane.smith@telerik.com" },
               { firstName: "Josh",
                 lastName: "Davis",
                 email: "josh.davis@telerik.com" },
               { firstName: "Cindy",
                 lastName: "Jones",
                 email: "cindy.jones@telerik.com" } ];

 $("#grid").kendoGrid({
     dataSource: people
 });

 $("#grid").kendoGrid({
    columns: [ { title: "First Name", field: "firstName" },
               { title: "Last Name", field: "lastName"}
               { title: "Email", field: "email" } ]
});