import { loader, mapOptions } from "config/loader";
import * as d3 from "d3";
import { useEffect } from "react";

export default function Map(props) {
  useEffect(() => {
    loader
      .load()
      .then((google) => {
        const map = new google.maps.Map(
          document.getElementById("map"),
          mapOptions
        );

        // create overlay
        const overlay = new google.maps.OverlayView();
        overlay.onAdd = function () {
          const pane = d3.select("map");
          const layer = d3
            .select(overlay.getPanes().overlayLayer)
            .append("div")
            .attr("class", "SvgOverlay");


          overlay.draw = function () {
            layer.select("svg").remove();
            const markerOverlay = overlay;
            const overlayProjection = markerOverlay.getProjection();

            // Turn the overlay projection into a d3 projection
            const transform = d3.geoTransform({point: function(x, y) {
              let d = new google.maps.LatLng(y, x);
              d = overlayProjection.fromLatLngToDivPixel(d);
              this.stream.point(d.x + 4000, d.y + 4000);
            }
          });

            //const proj = d3.geoTransform(transform);
            // const proj = d3.geoMercator();
            const path = d3.geoPath().projection(transform);
            const svg = layer.append("svg");
            const adminDivisions = svg
            .append("g")
            .attr("class", "AdminDivisions");
            adminDivisions
              .selectAll("path")
              .data(props.mapData.features)
              .enter()
              .append("path")
              .attr("d", path) // update existing paths

          };
        };
        if (!props.loading) {
        overlay.setMap(map);
        }
      })
      .catch((error) => {
        console.log("error loading map", error);
      });
  }, [props.mapData]);
  console.log(props.mapData.features);

  return <p>this is a map from google</p>;
}
