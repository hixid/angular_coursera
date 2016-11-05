(function () {

angular.module('foodApp',[])
.controller ('foodAppController', foodAppController);

foodAppController.$inject = ['$scope'];
function foodAppController($scope) {
	$scope.listOfMeal = "";
	$scope.message = "";
	$scope.messg_class = "";
	$scope.inp_class = "";

	$scope.checkList = function () {
		if ($scope.listOfMeal.length == 0) {
			$scope.message = "Please enter data first";
			$scope.messg_class = "message--invalid";
			$scope.inp_class = "inp--invalid";
		}
		else {
			var list = $scope.listOfMeal.split(',');
			var amo = 0;

			for (var i = 0; i < list.length; i++) {
				if (list[i].trim() != "") {
					amo++;
				}
			};

			if (amo > 3) {
				$scope.message = "Too much!";
				$scope.messg_class = "message--valid";
				$scope.inp_class = "inp--valid";
			}
			else if (amo == 0) {
				$scope.message = "Please enter data first"; 
				$scope.messg_class = "message--invalid";
				$scope.inp_class = "inp--invalid";
			}
			else {
				$scope.message = "Enjoy!";
				$scope.messg_class = "message--valid";
				$scope.inp_class = "inp--valid";
			}
		}
		return;
	};
};

})();