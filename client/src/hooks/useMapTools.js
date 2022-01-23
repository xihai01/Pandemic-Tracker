import { useEffect } from "react";
import * as d3 from "d3";
import { setMapProjection } from "helpers/setMapProjection";

/**
 *
 * @param {} mapData
 * @param {} loading
 * this custom hook initializes the tooltip and geolocation marker once.
 * geolocation marker renders only when mapData is loaded.
 */
export default function useMapTools(mapData, loading) {
  // create a tooltip only once
  useEffect(() => {
    /// tooltip
    d3.select("body")
      .append("div")
      .attr("id", "tooltip")
      .attr("style", "position: absolute; opacity: 0");
    ///
  }, []);
  useEffect(() => {
    // get user's current geo coordinates in lat/long
    const success = function (pos) {
      const coords = [pos.coords.longitude, pos.coords.latitude];
      const pixels = setMapProjection(mapData, coords);
      const svg = d3.select("svg g");
      svg
        .append("rect")
        .style("position", "absolute")
        .style("width", 3 + "px")
        .style("height", 3 + "px")
        .style("fill", "blue")
        .style("x", pixels[0] + "px")
        .style("y", pixels[1] + "px");

      console.log(pixels[0]);
      console.log(pixels[1]);
    };
    const error = function (error) {
      console.warn(error);
    };
    navigator.geolocation.getCurrentPosition(success, error);
  }, [loading, mapData]);
}
