import axios from "axios";

export const GOOGLE_MAPS_API_KEY = 'AIzaSyBBVk4iIjHSYXgGjZA08-VKCCCbm03Z2is';

export const gecodificateLocation = async ({ lat, lng }: { lat: number, lng: number }) => {
    try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`
        );
        if (response.data.results && response.data.results[0]) {

          return response.data.results[0].formatted_address;
        } else {
          console.error('No results found for this location.');
        }
      } catch (error) {
        console.error(error);
      }
}