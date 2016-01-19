app.controller('DashboardController', function($scope, connectionService, eventService, monitoringService) {
	$scope.message = "Connecties uit angular";

	/**
	 * Filter connections by date
	 * @param  {date} date 
	 * @return {array}    
	 */
	$scope.getConnectionsByDate = function(date) {
		connectionService.getConnectionsByDate(date).then(function(response) {
			var count = response.data.length;
			var allConnections = response.data;
			var output = [];
			
			for(var i = 0; i < count; i++)
			{
				var arr = allConnections[i];
				var datetime = arr.Datetime;
				var value = arr.Value;
				var date = new Date(datetime);

				output.push([date.toLocaleTimeString(), value]);

			}

			$scope.data = output;

		});
	}

	if( $scope.aantalM > 0 ) {
		$scope.aantal = $scope.aantalM;
	}
	else {
		$scope.aantal = 10;
	}

	$scope.changeCount = function() {
		if( $scope.aantalM > 0) 
			$scope.aantal = $scope.aantalM;
	};

	$scope.changeDate = function(date) {
		if( date != "" ) {
			var splited = date.split("-");
			var outDate = splited[2] + "-" + splited[1] + "-" + splited[0];

			// console.log("####### " +outDate); 
			// console.log("date " +date); 

			$scope.selectedDate = date;
			
			$scope.getConnectionsByDate($scope.selectedDate);
		}
	};



	connectionService.getConnections().then(function(response) {
		// Connections
		$scope.connectionsCount = response.data.length;
		// $scope.data = [];
		$scope.selectData = [];

		$scope.connections = response.data;

		connectionService.getConnectionsUrl().then(function(response) {
			// var obj = connectionService.getConnectionsUrl();
			var obj = response.data;
			var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

			$('<a href="data:' + data + '" download="connections.json">download JSON</a>').appendTo('#connectionsDownload');
		});

		

		for(var i = 0; i < $scope.connectionsCount; i++) {
			var arr = $scope.connections[i];
			var datetime = arr.Datetime;
			var value = arr.Value;
			var date = new Date(datetime);

			$scope.selectData.push(date.toLocaleDateString());

		}

		var selOutput = [];

		for(var i = 0; i < $scope.connectionsCount; i++)
		{
			var conDate = $scope.selectData[i];

			if( selOutput.indexOf(conDate) == -1 ) {
				selOutput.push(conDate);
			}
		}

		
		var d = new Date(selOutput[0]);

		$scope.selectConns = selOutput;

		$scope.date = $scope.selectConns[0];
		$scope.changeDate($scope.selectConns[0]);

	});

	connectionService.getConnectionsCount().then(function(response) {
		$scope.connectionsCount = response.data;
	});

	eventService.getEventsCount().then(function(response) {
		$scope.eventsCount = response.data;

		eventService.getEventsUrl().then(function(response) {
			// var obj = connectionService.getConnectionsUrl();
			var obj = response.data;
			var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

			$('<a href="data:' + data + '" download="events.json">download JSON</a>').appendTo('#eventsDownload');
		});
	});

	monitoringService.getMonitoringCount().then(function(response) {
		$scope.monitoringsCount = response.data;

		monitoringService.getMonitoringUrl().then(function(response) {
			// var obj = connectionService.getConnectionsUrl();
			var obj = response.data;
			var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

			$('<a href="data:' + data + '" download="monitoring.json">download JSON</a>').appendTo('#monitoringDownload');
		});
	});

});
