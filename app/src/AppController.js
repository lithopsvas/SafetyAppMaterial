/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(UsersDataService, $mdSidenav) {
    var self = this;

    self.selected = null;
    self.users = [];
    self.picData= null;
    self.pictureURI = null;
    self.selectUser = selectUser;
    self.toggleList = toggleUsersList;
    self.changePic = changePic;

    // Load all registered users

    UsersDataService
        .loadAllUsers()
        .then(function (users) {
            self.users = [].concat(users);
            self.selected = users[0];
        });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
        $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser(user) {
        self.selected = angular.isNumber(user) ? $scope.users[user] : user;
    }

    function changePic(event) {
        console.log("takePicture.onchange");
        console.log("self.picData");
        console.log(self.picData);
        console.log("event");
        console.log(event);
        // Get a reference to the taken picture or chosen file
        var files = event.target.files,
            file;
        if (files && files.length > 0) {
            file = files[0];
            try {
                console.log("1");
                console.log("file");
                console.log(file);
                // Create ObjectURL
                var imgURL = window.URL.createObjectURL(file);

                // Set img src to ObjectURL
                self.pictureURI = imgURL;

                // Revoke ObjectURL
               // URL.revokeObjectURL(imgURL);
            }
            catch (e) {
                try {
                    console.log("2");
                    // Fallback if createObjectURL is not supported
                    var fileReader = new FileReader();
                    fileReader.onload = function (event) {
                        self.pictureURI = event.target.result;
                    };
                    fileReader.readAsDataURL(file);
                }
                catch (e) {
                    console.log("3");
                    //
                    var error = document.querySelector("#error");
                    if (error) {
                        error.innerHTML = "Neither createObjectURL or FileReader are supported";
                    }
                }
            }
        }
    }
}

export default ['UsersDataService', '$mdSidenav', AppController];
