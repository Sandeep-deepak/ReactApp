import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const defaultCenter = { lat: 28.612734, lng: 77.231178 };

const options = {
  disableDefaultUI: true,
  scaleControl: true,
  mapTypeId: "roadmap",
  labels: true
};

const getMapOptions = (maps) => {
  return {
    streetViewControl: false,
    scaleControl: true,
    fullscreenControl: true,
    styles: [
      {
        featureType: "poi.business",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      }
    ],
    gestureHandling: "greedy",
    disableDoubleClickZoom: true,
    mapTypeControl: true,
    mapTypeId: maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: maps.ControlPosition.BOTTOM_CENTER,
      mapTypeIds: [
        maps.MapTypeId.ROADMAP,
        maps.MapTypeId.SATELLITE,
        maps.MapTypeId.HYBRID
      ]
    },

    zoomControl: true,
    clickableIcons: false
  };
};

export default function Map(props) {
  const { setMap, children } = props;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyABGtfSnhch8fCQEXzBnMzrtDBLQVCoOGw" // ,
    // googleMapsApiKey:"AIzaSyC1Ni2qNj9vg683DeQnrTUoz96tK_tC6TM"
    // ...otherOptions
  });

  const renderMap = () => {
    const loadHandler = (map) => {
      setMap(map);
    };
   
    return (
      <GoogleMap
        id="circle-example"
        mapContainerStyle={{
          height: "80vh",
          width: "100%"
        }}
        zoom={50}
        center={defaultCenter}
        options={getMapOptions}
        onLoad={loadHandler}
      >
         {children}
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <div>Loading...</div>;
}

 
