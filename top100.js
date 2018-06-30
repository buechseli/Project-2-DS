// Creating map object
var myMap = L.map("map", {
    center: [0,0],
    zoom: 3
  });
  
// Adding tile layer to the map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  	accessToken: 'pk.eyJ1IjoibmFrcmFtMTE1IiwiYSI6ImNqaWR2Ym5peDAyNmgzcG1xeDVwcnIxYXcifQ.FaKZzXQlmEbjQs7q_Md-vA',
    id: 'mapbox.outdoors',
    //minZoom: 2,
    maxZoom: 18,
    // this map option disables world wrapping. by default, it is false.
    continuousWorld: false,
    // this option disables loading tiles outside of the world bounds.
    noWrap: true,
  	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  })
  .addTo(myMap);

var airports = [];

d3.csv("Top100Airports.csv",function(data) {
    data.forEach(function(entry){ 
        airports.push({"name": entry[16], "location": [parseFloat(entry[14]), parseFloat(entry[15])]}) // Add coordinates to array of objects
        });
    // Add markers
    for (var i = 0; i < airports.length; i++) {
        var airport = airports[i];
        L.marker(airport.location)
        .bindPopup("<h3>" + airport.name + "</h3>")
        .addTo(myMap);
}
});

//console.log(airports)