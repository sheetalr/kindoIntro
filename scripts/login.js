(function (global) {
    var LoginViewModel,
        app = global.app = global.app || {};

    LoginViewModel = kendo.data.ObservableObject.extend({
        isLoggedIn: false,
        username: "",
        password: "",

         var viewModel = kendo.observable({
        firstName: "John",
        lastName: "Doe",
        genders: ["Male", "Female"],
        gender: "Male",
        agreed: false,
        confirmed: false,
        register: function(e) {
            e.preventDefault();

            this.set("confirmed", true);
        },
        startOver: function() {
            this.set("confirmed", false);
            this.set("agreed", false);
            this.set("gender", "Male");
            this.set("firstName", "John");
            this.set("lastName", "Doe");
        }
    });

    kendo.bind($("form"), viewModel);
        

        onLogin: function () {

            app.el.Users.login('', '')
                .then(function () {
                    return app.el.data('Games').get();
                })
                .then(function(data) {
                    // data.result contains an array of ojbects
                    console.log("response from EL", data);
                    alert(JSON.stringify(data.result));
                },
                function(error) {
                    alert("ERROR: " + error.message);
                });
            
            
            
        },

        onLogout: function () {
            var that = this;

            that.clearForm();
            that.set("isLoggedIn", false);
        },

        clearForm: function () {
            var that = this;

            that.set("username", "");
            that.set("password", "");
        },

        checkEnter: function (e) {
            var that = this;

            if (e.keyCode == 13) {
                $(e.target).blur();
                that.onLogin();
            }
        }
    });

    app.loginService = {
        viewModel: new LoginViewModel()
    };
})(window);

