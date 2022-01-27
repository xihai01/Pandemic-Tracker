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
export default function useMapTools(mapData, loading, restriction) {
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
     /*  const rect = svg
        .append("rect")
        .style("position", "absolute")
        .style("width", 3 + "px")
        .style("height", 3 + "px")
        .style("x", pixels[0] + "px")
        .style("y", pixels[1] + "px"); */
      const svgMarker = svg
                          .append("svg")
                          .style("position", "absolute")
                          .style("width", 50 + "px")
                          .style("height", 50 + "px")
                          .attr("x", pixels[0] - 2 + "px")
                          .attr("y", pixels[1] - 19.2 + "px");

      svgMarker
        .append("path")
        .attr(
          "d",
          "M4.774 15.287l-2.105 3.25l.224 1.063l1.06-.227l2.104-3.248a8.352 8.352 0 0 1-1.283-.838zm8.912-1.135c.014-.029.023-.061.036-.092c.053-.117.1-.234.138-.357c.006-.022.009-.044.016-.064a4.48 4.48 0 0 0 .098-.408v-.021c.195-1.169-.145-2.473-.923-3.651l1.11-1.714c1.279.163 2.385-.159 2.917-.982c.923-1.423-.2-3.792-2.505-5.293C12.266.068 9.65.005 8.729 1.426c-.534.824-.378 1.967.293 3.073L7.91 6.213c-1.389-.233-2.716-.016-3.703.64c-.006.002-.013.004-.017.008a3.735 3.735 0 0 0-.332.254c-.017.014-.037.027-.051.041a3.024 3.024 0 0 0-.271.272c-.02.024-.048.045-.067.07a3.102 3.102 0 0 0-.29.385c-1.384 2.133-.203 5.361 2.633 7.209c2.838 1.848 6.26 1.614 7.641-.519c.087-.135.167-.276.233-.421zm-.815-9.958c-.887-.577-1.32-1.487-.965-2.036c.354-.547 1.361-.522 2.246.055c.889.577 1.318 1.489.965 2.036c-.353.547-1.358.522-2.246-.055z"
        )
        .style("fill", "#5603ad");



      console.log(pixels[0]);
      console.log(pixels[1]);
    };
    const error = function (error) {
      console.warn(error);
    };
    navigator.geolocation.getCurrentPosition(success, error);
  }, [loading, mapData, restriction]);
}
