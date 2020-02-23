import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';


const SimpleMap = (props) => {
  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };
    const [center, setCenter] = useState({lat: 32.4279, lng: 53.6880 });
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD9i8oKXeMnrsnp16jq2sWO62PAhlgSdJM' }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={getMapOptions}

        >
          <Marker
            lat={32.4279}
            lng={53.6880}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;