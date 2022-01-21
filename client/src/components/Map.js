import { loader, mapOptions } from "config/loader";

export default function Map(props) {
  loader
    .load()
    .then((google) => {
      const map = new google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );
    })
    .catch((error) => {
      console.log("error loading map", error);
    });

  return <p>this is a map from google</p>;
}
