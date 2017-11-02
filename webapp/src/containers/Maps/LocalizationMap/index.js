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
      ({ centerLat, centerLng, shippingLat, shippingLng,
        billingLat, billingLng, customerLat, customerLng }) =>
        (
          <div>
            <GoogleMap
              defaultZoom={11}
              defaultCenter={{ lat: centerLat, lng: centerLng }}
            >
              <Marker
                position={{ lat: shippingLat, lng: shippingLng }}
                icon={'http://maps.google.com/mapfiles/kml/paddle/S.png'}
              />
              <Marker
                position={{ lat: billingLat, lng: billingLng }}
                icon={'http://maps.google.com/mapfiles/kml/paddle/B.png'}
              />
              <Marker
                position={{ lat: customerLat, lng: customerLng }}
                icon={'http://maps.google.com/mapfiles/kml/paddle/C.png'}
              />
            </GoogleMap>
          </div>
        )
    )
  )


export default LocalizationMap
