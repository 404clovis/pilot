import React from 'react'

import withScriptjs from 'react-google-maps/lib/async/withScriptjs'
import {
  withGoogleMap,
  GoogleMap,
  Marker,

} from 'react-google-maps'

const LocalizationMap = withScriptjs(withGoogleMap(props => (
  <div>
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
      <Marker
        position={{ lat: props.lat, lng: props.lng }}
        options={{
          styles: {
            markerOptions: {
              iconName: 'ranger_station',
            },
          },
        }}
      />
    </GoogleMap>
  </div>
)))

export default LocalizationMap
