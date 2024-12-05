import React from 'react';
import { Marker, Callout } from 'react-native-maps';
import { View, Text } from 'react-native';

interface MapMarkerProps {
  loading: boolean;
  error: string;
  data: any; 
}

const MapMarker: React.FC<MapMarkerProps> = ({ loading, error, data }) => {
  if (loading) {
    return null; 
  }

  if (error) {
  
    return null;
  }

  return (
    <Marker coordinate={{ latitude: data.lat, longitude: data.lng }}> 
      <Callout>
        <View>
          <Text style={{ fontWeight: 'bold' }}>{data.title}</Text>
          <Text>{data.description}</Text>
        </View>
      </Callout>
    </Marker>
  );
   
};

export default MapMarker;


// import React from 'react';
// // import { Event } from '../../src/models';
// import { Marker } from 'react-native-maps';

// interface IProps {
//   event: Event;
// }

// // const MapMarker = ({ event }: IProps) => {
//     const MapMarker = ({ }: IProps) => {

//   const position = JSON.parse(
//     '{ "lat": -34.91554, "lng": -57.91454 }'
//     // (event && event.map_point) || '{ "lat": -34.91554, "lng": -57.91454 }',
//   );
//   return <Marker coordinate={position} />;
// };

// export default MapMarker;