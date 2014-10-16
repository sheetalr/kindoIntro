alphaApp.factory("spManager", function(){
    var self = this,
        userData = { isLoggedIn: false };
    
    self.el = new Everlive('IMregDJC77R1b1yM');
    self.isLoggedIn = false;
    
    
    self.login = function(username, password, callback){
        return self.el.Users.login(username, password)
            .then(function () {
                self.isLoggedIn = true;
                isLoggedIn = true;
                userData.isLoggedIn = true;
                console.log("self.isLoggedIn", self.isLoggedIn);
                callback();
            },
            function(error) {
                alert(error.message);
            });
    };
    
    self.logout = function(){
        self.el.Users.logout();
        self.isLoggedIn = false;
    };
    
    self.isLoggedIn = function(){
        return userData.isLoggedIn;   
    };
    
    
    return {
        login: self.login,
        logout: self.logout,
        isLoggedIn: self.isLoggedIn
    };
});