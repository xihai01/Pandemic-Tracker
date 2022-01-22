import { google, overlayProjection } from "@googlemaps/js-api-loader";

export const googleProjection = function(coordinates) {
  const googleCoordinates = new google.maps.LatLng(coordinates[1], coordinates[0]);
  const pixelCoordinates = overlayProjection.fromLatLngToDivPixel(googleCoordinates);
  return [pixelCoordinates.x + 4000, pixelCoordinates.y + 4000];
}