import React from 'react'

import withScriptjs from 'react-google-maps/lib/async/withScriptjs'
import {
  withGoogleMap,
  GoogleMap,
  FusionTablesLayer,

} from 'react-google-maps'

const TransactionsMap = withScriptjs(withGoogleMap(() => (
  <div>
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 41.850033, lng: -87.6500523 }}
    >
      <FusionTablesLayer
        url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
        options={{
          query: {
            select: 'Geocodable address',
            from: '1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg',
          },
          styles: [{
            markerOptions: {
              iconName: 'ranger_station',
            },
          }, {
            where: 'Age > 30',
            markerOptions: {
              iconName: 'caution',
            },
          }, {
            where: 'Age > 70',
            markerOptions: {
              iconName: 'sunny',
            },
          }],
        }}
      />
    </GoogleMap>
  </div>

)))

export default TransactionsMap

