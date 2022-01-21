import { Loader } from "@googlemaps/js-api-loader";

const additionalOptions = {};
export const loader = new Loader({
  apiKey: "AIzaSyAqcseaomFQQlklNxwg28NLjK0terUZ4zg",
  version: "weekly",
  ...additionalOptions,
});

// center map at Ontario
export const mapOptions = {
  center: {
    lat: 51.49827028203139,
    lng:  -86.63948777978695,
  },
  zoom: 4,
};
