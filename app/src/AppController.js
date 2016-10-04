/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(UsersDataService, $mdSidenav, gpsService) {
    var self = this;
    self.selectedIndex = 1;
    self.selected = null;
    self.users = [];
    self.picData = null;
    self.pictureURI = "./assets/img/example.jpg";
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

    function captureUserLocation() {
        gpsService.getCurrentPosition().then((location)=> {
            console.log("location");
            console.log(location);
        });
    }

    function changePic(event) {
        // Get a reference to the taken picture or chosen file
        var files = event.target.files,
            file;
        if (files && files.length > 0) {
            file = files[0];
            try {
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
            captureUserLocation();
        }
    }
}

export default ['UsersDataService', '$mdSidenav', AppController];
