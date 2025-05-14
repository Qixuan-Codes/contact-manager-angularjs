app.controller('ContactController', function ($scope, $routeParams, $location, ContactService) {
    $scope.contacts = ContactService.getAll();

    $scope.goToEdit = function (id) {
        $location.path('/edit/' + id);
    };

    $scope.sortColumn = 'name';
    $scope.reverseSort = false;

    $scope.sortBy = function (column) {
        if ($scope.sortColumn === column) {
            $scope.reverseSort = !$scope.reverseSort;
        } else {
            $scope.sortColumn = column;
            $scope.reverseSort = false;
        }
    };

    $scope.deleteContact = function (id) {
        if (confirm("Are you sure you want to delete this contact?")) {
            ContactService.delete(id);
            $scope.contacts = ContactService.getAll();
        }
    };

    $scope.addContact = function () {
        if ($scope.newContact) {
            ContactService.add($scope.newContact);
            $location.path('/contacts');
        }
    };

    $scope.editContact = function () {
        if ($scope.contact) {
            ContactService.update($scope.contact);
            $location.path('/contacts');
        }
    };

    function loadContact() {
        var id = $routeParams.id;
        if (id) {
            var contact = ContactService.getById(id);
            if (contact) {
                $scope.contact = angular.copy(contact);
            } else {
                alert("Contact not found.");
                $location.path('/contacts');
            }
        }
    }

    loadContact();
});
