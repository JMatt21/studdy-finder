import Geocode from "react-geocode"
import keys from "../keys";
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(keys.google.geocodeKey);
console.log(keys)
// Enable or disable logs. Its optional.
// Geocode.enableDebug();

export default {
    getLatLng(address, cb) {
        Geocode.fromAddress(address).then(
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