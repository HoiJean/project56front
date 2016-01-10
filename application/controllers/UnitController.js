app.controller('UnitController', function($scope, positionService) {

	console.log("aa");
	positionService.getPositions().then(function(response) {

		console.log("ik geloof dat het werkt, maar duurt te lang om te laden omdat het te veel data is -_-");
		// let wel op je namen -_-

		$scope.positions 		= response.data;

		console.log("oki");
	});
});