// IDEAS
// - map per venue type, use different marker color per venue type

var myMap = L.map("map", {
    center: [0,0],
    zoom: 3
  });

var category = ["bar", "bus_station", "car_rental", "embassy",
            "lodging", "museum", "night_club", "restaurant",
            "subway_station", "taxi_stand", "train_station",
            "transit_station"]

var bars = []

d3.json("data.json",function(data) {
        for (item in data) // loop through array
        console.log(item)
             for (var key in data ) // loop through array objects
             var value = data[key]; 
             console.log(value)
});

/* d3.json("data.json",function(data) {
           for (item in data) // loop through array
            console.log("Item: ", item)
            for (var key in data ) // loop through array objects
            var key = x
            console.log("Key: ", x)
    }); */