import Geocode from "react-geocode"
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyBynfhUBhOGE9ehSl7pDt2h1SRXL_GwAH8");

// Enable or disable logs. Its optional.
// Geocode.enableDebug();

export default {
    getLatLng(address, cb) {
        Geocode.fromAddress("Eiffel Tower").then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                cb(lat, lng)
            },
            error => {
                console.error(error);
            }
        );
    }
}