// import React, { useState } from "react";
// import Map from "./Map";
// import { Marker, MarkerClusterer } from "@react-google-maps/api";
// // import uuidv4 from "uuid/v4";
// import { v4 as uuidv4 } from "uuid";
// import CustomMarker from "./CustomMarker";

// // var locations1 = [
// //   { lat: -31.56391, lng: 147.154312 },
// //   { lat: -33.718234, lng: 150.363181 },
// //   { lat: -33.727111, lng: 150.371124 },
// //   { lat: -33.848588, lng: 151.209834 },
// //   { lat: -33.851702, lng: 151.216968 },
// //   { lat: -34.671264, lng: 150.863657 },
// //   { lat: -35.304724, lng: 148.662905 },
// //   { lat: -36.817685, lng: 175.699196 },
// //   { lat: -36.828611, lng: 175.790222 },
// //   { lat: -37.75, lng: 145.116667 },
// //   { lat: -37.759859, lng: 145.128708 },
// //   { lat: -37.765015, lng: 145.133858 },
// //   { lat: -37.770104, lng: 145.143299 },
// //   { lat: -37.7737, lng: 145.145187 }
// // ];

// export default function MapContainer({jsonDatamap}) {
//   const [map, setMap] = useState(null);
//  // const [locs, setLocs] = useState(locations1);
// //  const [locs, setLocs] = useState(jsonDatamap);
//   const [toggle, setToggle] = useState(false);
//     console.log("jsonDatamap",jsonDatamap)

//   React.useEffect(() => {
//     if (map) {
//       // map.panTo(...)
//     //   setLocs(jsonDatamap);
//       mapFitBounds();

//     }
//   }, [map]);

//   function mapFitBounds() {
//     // console.log("mapFitBounds:map> ", map);
//     if (!map) return;

//     console.log("locs",jsonDatamap);
//     const bounds = new window.google.maps.LatLngBounds();
//     jsonDatamap.map((loc) => {
//       bounds.extend(new window.google.maps.LatLng(loc.Latitude, loc.Longitude));
//     });

//     map.fitBounds(bounds);
//   }

//   return (
//     <div>
//       <Map setMap={setMap}>
//         {/* <MarkerClusterer> */}
//         <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
//           {(clusterer) =>
//             jsonDatamap.map((loc) =>{
//                 const position = { lat: loc.Latitude, lng: loc.Longitude };
//                 return(
//                     <CustomMarker
//                       key={uuidv4()}
//                       clusterer={clusterer}
//                       position={position}
//                       can={loc}
//                     />              
//                 )
//             }            
//             )
//           }
//         </MarkerClusterer>
//       </Map>
//     </div>
//   );
// }







import React, { useState } from "react";
import Map from "./Map";
import { Marker, MarkerClusterer } from "@react-google-maps/api";
import { v4 as uuidv4 } from "uuid";
import CustomMarker from "./CustomMarker";

export default function MapContainer({ jsonDatamap }) {
  const [map, setMap] = useState(null);

  React.useEffect(() => {
    if (map) {
      mapFitBounds();
    }
  }, [map, jsonDatamap]);

  function mapFitBounds() {
    if (!map) return;

    const bounds = new window.google.maps.LatLngBounds();
    
    jsonDatamap.forEach((loc) => {
      const latitude = parseFloat(loc.Latitude);
      const longitude = parseFloat(loc.Longitude);

      if (!isNaN(latitude) && !isNaN(longitude)) {
        bounds.extend(new window.google.maps.LatLng(latitude, longitude));
      }
    });

    if (!bounds.isEmpty()) {
      map.fitBounds(bounds);
    }
  }

  return (
    <div>
      <Map setMap={setMap}>
        <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
          {(clusterer) =>
            jsonDatamap.map((loc) => {
              const latitude = parseFloat(loc.Latitude);
              const longitude = parseFloat(loc.Longitude);

              if (!isNaN(latitude) && !isNaN(longitude)) {
                const position = { lat: latitude, lng: longitude };
                return (
                  <CustomMarker
                    key={uuidv4()}
                    clusterer={clusterer}
                    position={position}
                    can={loc}
                  />
                );
              }

              return null; // Ignore markers with invalid coordinates
            })
          }
        </MarkerClusterer>
      </Map>
    </div>
  );
}

 