var myMap = L.map("map", {
	center: [37, 95],
    zoom: 5
});

var light = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		id: 'mapbox.light',
		accessToken: 'pk.eyJ1IjoiZ2NoYW4wNyIsImEiOiJjamlkdjl0bWswNnhpM2tueGNnb245ZGNvIn0.fPGa7mkeY8R8yRg_ga6uOw',
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    }).addTo(myMap)

d3.json("./data.json", createMarkers);

console.log("hello");

function createMarkers(response){

	console.log(response)

	// var keysList = Object.keys(response)

	// for(var j=0; j<keysList.length; j++){
	// 	var location = response[keysList[j]];
	// 	console.log(location)
	// 	for(var i=0; i < location.coords.length; i++){
	// 		var barCoords = [
	// 			location.coords[i][1],
	// 			location.coords[i][0]
	// 		];
	// 		var barName = location.names[i];
	// 		console.log(barCoords)
	// 		console.log(barName)
	
	// 		var marker = L.circle(barCoords,{
	// 			color:"red",
	// 			fillColor:"red",
	// 			radius: 1000
	// 		})
	
	// 		marker.addTo(myMap)
	// 		marker.bindPopup("<h3>"+barName+"</h3>")
	// 	}
	// }

	for(var i=0; i < response.bar.coords.length; i++){
		var barCoords = [response.bar.coords[i][0], response.bar.coords[i][1]];
		var barName = response.bar.names[i];
		console.log(barCoords)
		console.log(barName)

		var marker = L.circle(barCoords,{
			color:"darkolivegreen",
			fillColor:"darkolivegreen",
			radius: 1000
		})

		marker.addTo(myMap)
		marker.bindPopup("<h3> Bar: "+barName+"</h3>")
	}

	for(var i=0; i < response.bus_station.coords.length; i++){
		var bus_stationCoords = [response.bus_station.coords[i][0], response.bus_station.coords[i][1]];
		var bus_stationName = response.bus_station.names[i];
		console.log(bus_stationCoords)
		console.log(bus_stationName)

		var marker = L.circle(bus_stationCoords,{
			color:"green",
			fillColor:"green",
			radius: 1000
		})

		marker.addTo(myMap)
		marker.bindPopup("<h3> Bus Station: "+bus_stationName+"</h3>")
	}

	for(var i=0; i < response.car_rental.coords.length; i++){
		var car_rentalCoords = [response.car_rental.coords[i][0], response.car_rental.coords[i][1]];
		var car_rentalName = response.car_rental.names[i];
		console.log(car_rentalCoords)
		console.log(car_rentalName)

		var marker = L.circle(car_rentalCoords,{
			color:"yellow",
			fillColor:"yellow",
			radius: 1000
		})

		marker.addTo(myMap)
		marker.bindPopup("<h3> Car Rental: "+car_rentalName+"</h3>")
	}

	for(var i=0; i < response.embassy.coords.length; i++){
		var embassyCoords = [response.embassy.coords[i][0], response.embassy.coords[i][1]];
		var embassyName = response.embassy.names[i];
		console.log(embassyCoords)
		console.log(embassyName)

		var marker = L.circle(embassyCoords,{
			color:"blue",
			fillColor:"blue",
			radius: 1000
		})

		marker.addTo(myMap)
		marker.bindPopup("<h3> Embassy: "+embassyName+"</h3>")
	}
	
	for(var i=0; i < response.lodging.coords.length; i++){
		var lodgingCoords = [response.lodging.coords[i][0], response.lodging.coords[i][1]];
		var lodgingName = response.lodging.names[i];
		console.log(lodgingCoords)
		console.log(lodgingName)

		var marker = L.circle(lodgingCoords,{
			color:"red",
			fillColor:"red",
			radius: 1000
		})

		marker.addTo(myMap)
		marker.bindPopup("<h3> Lodging: "+lodgingName+"</h3>")
	}

	for(var i=0; i < response.museum.coords.length; i++){
		var museumCoords = [response.museum.coords[i][0], response.museum.coords[i][1]];
		var museumName = response.museum.names[i];
		console.log(museumCoords)
		console.log(museumName)

		var marker = L.circle(museumCoords,{
			color:"purple",
			fillColor:"purple",
			radius: 1000
		})

		marker.addTo(myMap)
		marker.bindPopup("<h3> Museum: "+museumName+"</h3>")
	}

	for(var i=0; i < response.night_club.coords.length; i++){
		var night_clubCoords = [response.night_club.coords[i][0], response.night_club.coords[i][1]];
		var night_clubName = response.night_club.names[i];
		console.log(night_clubCoords)
		console.log(night_clubName)

		var marker = L.circle(night_clubCoords,{
			color:"gray",
			fillColor:"gray",
			radius: 1000
		})

		marker.addTo(myMap)
		marker.bindPopup("<h3> Night Club: "+night_clubName+"</h3>")
	}

	for(var i=0; i < response.restaurant.coords.length; i++){
		var restaurantCoords = [response.restaurant.coords[i][0], response.restaurant.coords[i][1]];
		var restaurantName = response.restaurant.names[i];
		console.log(restaurantCoords)
		console.log(restaurantName)

		var marker = L.circle(restaurantCoords,{
			color:"salmon",
			fillColor:"salmon",
			radius: 1000
		})

		marker.addTo(myMap)
		marker.bindPopup("<h3> Restaurant: "+restaurantName+"</h3>")
	}

	for(var i=0; i < response.subway_station.coords.length; i++){
		var subway_stationCoords = [response.subway_station.coords[i][0], response.subway_station.coords[i][1]];
		var subway_stationName = response.subway_station.names[i];
		console.log(subway_stationCoords)
		console.log(subway_stationName)

		var marker = L.circle(subway_stationCoords,{
			color:"darkslateblue",
			fillColor:"darkslateblue",
			radius: 1000
		})

		marker.addTo(myMap)
		marker.bindPopup("<h3> Subway Station: "+subway_stationName+"</h3>")
	}

	for(var i=0; i < response.taxi_stand.coords.length; i++){
		var taxi_standCoords = [response.taxi_stand.coords[i][0], response.taxi_stand.coords[i][1]];
		var taxi_standName = response.taxi_stand.names[i];
		console.log(taxi_standCoords)
		console.log(taxi_standName)

		var marker = L.circle(taxi_standCoords,{
			color:"goldenrod",
			fillColor:"goldenrod",
			radius: 1000
		})

		marker.addTo(myMap)
		marker.bindPopup("<h3> Taxi Stand: "+taxi_standName+"</h3>")
	}

	for(var i=0; i < response.train_station.coords.length; i++){
		var train_stationCoords = [response.train_station.coords[i][0], response.train_station.coords[i][1]];
		var train_stationName = response.train_station.names[i];
		console.log(train_stationCoords)
		console.log(train_stationName)

		var marker = L.circle(train_stationCoords,{
			color:"darkcyan",
			fillColor:"darkcyan",
			radius: 1000
		})

		marker.addTo(myMap)
		marker.bindPopup("<h3> Train Station: "+train_stationName+"</h3>")
	}


}

