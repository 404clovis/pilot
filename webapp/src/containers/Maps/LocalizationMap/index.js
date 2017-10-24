import React from 'react'
import withScriptjs from 'react-google-maps/lib/async/withScriptjs'
import {
  withGoogleMap,
  GoogleMap,
  Marker,

} from 'react-google-maps'

const LocalizationMap =
  withScriptjs(
    withGoogleMap(
      ({ shippingLat, shippingLng, billingLat, billingLng, customerLat, customerLng }) => (
        <div>
          <GoogleMap
            defaultZoom={11}
            defaultCenter={{ lat: shippingLat, lng: shippingLng }}
          >
            <Marker
              position={{ lat: shippingLat, lng: shippingLng }}
              icon={'http://maps.google.com/mapfiles/kml/shapes/caution.png'}
            />
            <Marker
              position={{ lat: billingLat, lng: billingLng }}
              icon={'http://maps.google.com/mapfiles/kml/shapes/road_shield1.png'}
            />
            <Marker
              position={{ lat: customerLat, lng: customerLng }}
              icon={'http://maps.google.com/mapfiles/kml/shapes/horsebackriding.png'}
            />
          </GoogleMap>
        </div>
      )))


export default LocalizationMap
