/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(UsersDataService, $mdSidenav, gpsService) {
    var self = this;
    self.selectedIndex = 3;
    self.selected = null;
    self.reportsList = [];
    self.picData = null;
    self.pictureURI = "./assets/img/example.jpg";
    self.selectUser = selectUser;
    self.toggleList = toggleUsersList;
    self.changePic = changePic;
    self.location = null;
    self.error = 'no errors';
    self.report = null;

    // Load all registered users

    UsersDataService
        .loadAllReports()
        .then(function (reports) {
            self.reportsList = [].concat(reports);
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
        UsersDataService.getCurrentPosition().then((location)=> {
            self.location = location;
        }).catch((e)=> {
            self.error = e.message;
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
                    // Fallback if createObjectURL is not supported
                    var fileReader = new FileReader();
                    fileReader.onload = function (event) {
                        self.pictureURI = event.target.result;
                    };
                    fileReader.readAsDataURL(file);
                }
                catch (e) {
                    self.error = "Neither createObjectURL or FileReader are supported";
                }
            }
            captureUserLocation();
        }
    }
}

export default ['UsersDataService', '$mdSidenav', AppController];
