import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MyComponent = (props) => {
  return (
    <Map
      google={props.google}
      zoom={14}
      initialCenter={{ lat: 37.7749, lng: -122.4194 }}
    >
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </Map>
  );
};

export default MyComponent
