let successHandler = function(position){
    console.log(position.coords.latitude, position.coords.longitude);

    let pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    let map = new google.maps.Map(document.querySelector('#map'), {
        center: pos,
        zoom: 12
    });

    let markimg = 'location-pin.png';

    let marker = new google.maps.Marker({
        map: map,
        position: pos,
        animation: google.maps.Animation.DROP,
        icon: markimg


    });

    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        location: pos
    },
        function(geocoderResults){
            console.log(geocoderResults);

            let infoWindow = new google.maps.InfoWindow({
                position: pos,
                content: geocoderResults[0].formatted_address
            });

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map);
            });

        

    });

};
let errorHandler = function(error){
console.log('you done fucked up', error);
};
let options = {};

navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);